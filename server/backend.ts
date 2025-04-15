import { GenezioAuth, GenezioDeploy, GnzContext } from "@genezio/types";

import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";

import pg from "pg";
import { Mailer } from "./mailer";

import { races as allRaces } from "./config/racesConfig";

const { Pool } = pg;

type HTTPResponse = {
  status: number;
  message: string;
};

type HTTPError = {
  status: number;
  message: string;
};

const pool = new Pool({
  connectionString: process.env.APV_DB_DATABASE_URL,
  ssl: true,
});

// type UserDataType = {
//   status: number;
//   message: string;
//   name?: string;
//   email?: string;
//   phone: string;
//   marimeTricou: string;
// }

function createHTTPError(status: number, message: string): HTTPError {
  return {
    status,
    message,
  };
}

@GenezioDeploy()
export class BackendService {
  prisma: PrismaClient;
  mailer: Mailer;

  constructor() {
    this.prisma = new PrismaClient();
    this.mailer = new Mailer();
  }

  @GenezioAuth()
  async addUser(context: GnzContext): Promise<HTTPResponse | HTTPError> {
    try {
      // Check if user already exists
      const existingUser = await this.prisma.userAccount.findUnique({
        where: { userId: context.user!.userId },
      });

      if (existingUser) {
        return {
          status: 200,
          message: "User already exists",
        };
      }

      await this.prisma.userAccount.create({
        data: {
          userId: context.user!.userId,
          phone: "Nu e definit!",
          userType: "USER",
          marimeTricou: "Nu e definit!",
        },
      });
      return {
        status: 200,
        message: "User added successfully",
      };
    } catch (error) {
      console.log(error);
      return createHTTPError(400, "Bad Request");
    }
  }

  @GenezioAuth()
  async updateUser(
    context: GnzContext,
    newPhone: string,
    newMarimeTricou: string
  ): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: { userId: context.user!.userId },
      });

      if (!userInfo) {
        throw createHTTPError(401, "UNAUTHORIZED");
      }

      await this.prisma.userAccount.update({
        where: {
          userId: context.user!.userId,
        },
        data: {
          phone: newPhone,
          marimeTricou: newMarimeTricou,
        },
      });

      return {
        status: 200,
        message: "Status",
      };
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error
      ) {
        return error as HTTPError;
      } else {
        console.log(error);
        return createHTTPError(500, "Internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async getUserData(context: GnzContext): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: { userId: context.user!.userId },
      });

      if (!userInfo) {
        throw createHTTPError(401, "UNAUTHORIZED");
      }

      return {
        status: 202,
        message: "Accepted",
      };
    } catch (error) {
      console.log(error);
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error
      ) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "Internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async addRaces(
    context: GnzContext,
    races: string,
    phone: string,
    marime: string,
    revolut: string
  ) {
    try {
      const checkHasRace = await this.prisma.cursa.findMany({
        where: { userId: context.user!.userId },
      });
      if (checkHasRace.length === 0) {
        await this.prisma.cursa.create({
          data: {
            idCursa: randomUUID(),
            userId: context.user!.userId,
            name: context.user!.name || "",
            categorie: races,
            timpAlergat: null,
            phone: phone,
            marimeTricou: marime,
            revolute_cash: revolut,
          },
        });

        const subject = `Inscriere cursa ${allRaces[races].name} - Alearga Pentru Viata`;
        const ora = allRaces[races].time;

        await this.mailer.registerMail(
          context.user!.email,
          subject,
          context.user!.name || "drag alergator",
          "11 Mai",
          `${ora}`,
          "Rectoratul UNSTPB"
        );

        return {
          status: 200,
          message: "Successfully registered",
        };
      } else {
        return createHTTPError(400, "Nu te poți înscrie de mai multe ori!");
      }
    } catch (error) {
      console.log("❌ Eroare la trimiterea emailului:", error); //verificare trimtere
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async adaugaCursa(context: GnzContext): Promise<HTTPResponse | HTTPError> {
    try {
      const infoUser = await this.prisma.userAccount.findUnique({
        where: { userId: context.user!.userId },
      });

      if (!infoUser) {
        throw createHTTPError(401, "UNAUTHORIZED");
      }

      await this.prisma.cursa.create({
        data: {
          idCursa: "APV2025",
          userId: infoUser.userId,
          numarTricou: undefined,
          categorie: undefined,
          timpAlergat: undefined,
        },
      });

      return {
        status: 200,
        message: "Successfully registered",
      };
    } catch (error) {
      console.log(error);
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error
      ) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "Internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async deleteUserCursa(
    context: GnzContext,
    categorie: string
  ): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.cursa.findMany({
        where: { userId: context.user!.userId },
      });

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      await this.prisma.cursa.deleteMany({
        where: {
          userId: context.user!.userId,
          categorie: categorie,
        },
      });

      return {
        status: 500,
        message: "",
      };
    } catch (error) {
      console.log(error);
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error
      ) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async checkIfUserCreateIsComplete(
    context: GnzContext
  ): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: { userId: context.user!.userId },
      });

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      if (
        userInfo?.phone === undefined ||
        userInfo?.marimeTricou === undefined
      ) {
        throw createHTTPError(406, "Not Acceptable");
      }

      return {
        status: 202,
        message: "Accepted",
      };
    } catch (error) {
      console.log(error);
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "message" in error
      ) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async getRaces(context: GnzContext) {
    try {
      const userInfo = await this.prisma.cursa.findMany({
        where: { userId: context.user!.userId },
      });

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      return userInfo;
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async getAllRaces(context: GnzContext) {
    try {
      const response = await pool.query(`
        SELECT c.*, u.email 
        FROM "Cursa" c 
        LEFT JOIN "users" u ON c."userId" = u."userId"
        ORDER BY 
          CASE 
            WHEN c.checkin = 'NU' THEN 1 
            WHEN c.checkin IS NULL THEN 2 
            ELSE 3 
          END,
          COALESCE(c.name, '') ASC;
      `);

      return response.rows;
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async updateUserDetailsByUserId(
    context: GnzContext,
    userId: string,
    json: any
  ) {
    //eslint-disable-line
    console.log("Start update user details...");
    try {
      const client = await pool.connect();
      await client.query(
        `UPDATE "users" SET "customInfo" = $1 WHERE "userId" = $2`,
        [json, userId]
      );
      client.release();
      return {
        status: 200,
        message: "Successfully updated",
      };
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async updateUserById(
    context: GnzContext,
    name: string,
    id: number,
    idCursa: string,
    categorie: string,
    marimeTricou: string,
    numarTricou: string,
    revolute_cash: string,
    phone: string,
    checkin: string,
    money: string
  ) {
    try {
      const userInfo = await this.prisma.cursa.findUnique({
        where: {
          id: id,
          idCursa: idCursa,
        },
      });

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      await this.prisma.cursa.update({
        where: {
          id: id,
          idCursa: idCursa,
        },
        data: {
          name: name,
          categorie: categorie,
          marimeTricou: marimeTricou,
          numarTricou: numarTricou,
          revolute_cash: revolute_cash,
          phone: phone,
          checkin: checkin,
          suma: money,
        },
      });

      return {
        status: 200,
        message: "Successfully updated",
      };
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async addRacesInEventDay(
    context: GnzContext,
    name: string,
    email: string,
    tshirtSize: string,
    tshirtNumber: string,
    phoneNumber: string,
    race: string,
    paymentMethod: string,
    money: string
  ) {
    try {
      const userIdFromEmail = await pool.query(
        `SELECT "userId" FROM "users" WHERE "email" = $1`,
        [email]
      );
      let checkHasRace;
      if (userIdFromEmail.rows[0] === undefined) {
        checkHasRace = [];
      } else {
        checkHasRace = await this.prisma.cursa.findMany({
          where: { userId: userIdFromEmail.rows[0].userId },
        });
      }
      if (checkHasRace.length === 0) {
        if (userIdFromEmail.rows.length === 1) {
          const checkUser = await this.prisma.userAccount.findUnique({
            where: { userId: userIdFromEmail.rows[0].userId },
          });
          if (!checkUser) {
            await this.prisma.userAccount.create({
              data: {
                userId: userIdFromEmail.rows[0].userId,
                phone: "Nu e definit!",
                userType: "USER",
                marimeTricou: "Nu e definit!",
              },
            });
          }
          const createCursa = await pool.query(
            `INSERT INTO "Cursa" ("idCursa","userId", "numarTricou", "categorie", "name", "phone", "marimeTricou", "revolute_cash","suma","checkin","inscriereFizic") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)`,
            [
              randomUUID(),
              userIdFromEmail.rows[0].userId,
              tshirtNumber,
              race,
              name,
              phoneNumber,
              tshirtSize,
              paymentMethod,
              money,
              "DA",
              "DA",
            ]
          );
          if (createCursa.rowCount === 1) {
            return {
              status: 200,
              message: "Successfully registered",
            };
          } else {
            return createHTTPError(400, "Internal Server Error");
          }
        } else {
          const randomuuid = randomUUID();
          const createUser = await pool.query(
            `INSERT INTO "users" ("userId", "email", "name") VALUES ($1, $2, $3)`,
            [randomuuid, email, name]
          );
          const checkUser = await this.prisma.userAccount.findUnique({
            where: { userId: randomuuid },
          });
          if (!checkUser) {
            await this.prisma.userAccount.create({
              data: {
                userId: randomuuid,
                phone: "Nu e definit!",
                userType: "USER",
                marimeTricou: "Nu e definit!",
              },
            });
          }

          if (createUser.rowCount === 1) {
            const createCursa = await pool.query(
              `INSERT INTO "Cursa" ("idCursa","userId","numarTricou", "categorie", "name", "phone", "marimeTricou", "revolute_cash","suma","checkin","inscriereFizic") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)`,
              [
                randomUUID(),
                randomuuid,
                tshirtNumber,
                race,
                name,
                phoneNumber,
                tshirtSize,
                paymentMethod,
                money,
                "DA",
                "DA",
              ]
            );
            if (createCursa.rowCount === 1) {
              return {
                status: 200,
                message: "Successfully registered",
              };
            } else {
              return createHTTPError(400, "Internal Server Error");
            }
          }
        }
      } else {
        return createHTTPError(
          400,
          "Nu te poți înscrie de mai multe ori pe acelasi email!"
        );
      }
    } catch (error) {
      console.log(error);
      return createHTTPError(400, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async updateRaceTime(context: GnzContext, idCursa: number, time: string) {
    try {
      const userInfo = await this.prisma.cursa.findUnique({
        where: {
          id: idCursa,
        },
      });

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      await this.prisma.cursa.update({
        where: {
          id: idCursa,
        },
        data: {
          timpAlergat: time,
        },
      });

      return {
        status: 200,
        message: "Successfully updated",
      };
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async sendRaceCompletionEmail(context: GnzContext, id: number) {
    const userInfo = await this.prisma.cursa.findUnique({
      where: {
        id: id,
      },
    });
    if (!userInfo) {
      throw createHTTPError(404, "User not exist");
    }
    const subject = `Felicitări pentru finalizarea cursei - Aleargă pentru Viață`;
    const ora = userInfo.timpAlergat;
    const cursa = userInfo.categorie;
    const aiTrimis = userInfo.emailTrimis;
    const name = userInfo.name;

    if (aiTrimis === "DA") {
      return {
        status: 200,
        message: "A fost trimis deja email-ul",
      };
    }

    const userId = userInfo.userId;
    const user = await pool.query(
      `SELECT "email" FROM "users" WHERE "userId" = $1`,
      [userId]
    );
    if (user.rows[0] === undefined) {
      throw createHTTPError(404, "User not exist");
    }

    const email = user.rows[0].email;

    const response = await this.mailer.sendRaceCompletionEmail(
      email,
      subject,
      name!,
      cursa!,
      ora!
    );

    if (response) {
      await this.prisma.cursa.update({
        where: {
          id: id,
        },
        data: {
          emailTrimis: "DA",
        },
      });
      return {
        status: 200,
        message: "Successfully sent",
      };
    } else {
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async getAllUsers(context: GnzContext) {
    try {
      const users = await pool.query(`SELECT * FROM "users"`);
      return users.rows;
    } catch (error) {
      console.log(error);
      return createHTTPError(500, "Internal Server Error");
    }
  }
}
