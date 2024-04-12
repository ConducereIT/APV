import {
  GenezioAuth,
  GenezioDeploy,
  GnzContext,
} from "@genezio/types";

import {PrismaClient} from "@prisma/client";
import {randomUUID} from "node:crypto";

type HTTPResponse = {
  status: number;
  message: string;
}

type HTTPError = {
  status: number;
  message: string;
};

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
    message
  };
}

@GenezioDeploy()
export class BackendService {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient();
  }

  @GenezioAuth()
  async addUser(
    context: GnzContext,
  ): Promise<HTTPResponse | HTTPError> {
    try {
      await this.prisma.userAccount.create({
        data: {
          userId: context.user!.userId,
          phone: "Nu e definit!",
          userType: "USER",
          marimeTricou: "Nu e definit!",
        },
      });
    } catch (error) {
      return createHTTPError(400, 'Bad Request');
    }

    return {
      status: 200,
      message: "User added successfully"
    }
  }

  @GenezioAuth()
  async updateUser(context: GnzContext,
                   newPhone: string,
                   newMarimeTricou: string
  ): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: {userId: context.user!.userId},
      })

      if (!userInfo) {
        throw createHTTPError(401, "UNAUTHORIZED")
      }

      await this.prisma.userAccount.update({
        where: {
          userId: context.user!.userId,
        },
        data: {
          phone: newPhone,
          marimeTricou: newMarimeTricou
        }
      });

      return {
        status: 200,
        message: "Status",
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'status' in error && 'message' in error) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "Internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async getUserData(context: GnzContext): Promise<HTTPResponse | HTTPError> {

    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: {userId: context.user!.userId}
      })

      if (!userInfo) {
        throw createHTTPError(401, "UNAUTHORIZED")
      }

      return {
        status: 202,
        message: "Accepted"
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'status' in error && 'message' in error) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "Internal Server Error");
      }
    }

  }



  @GenezioAuth()
  async addRaces(context: GnzContext, races: string, phone:string,marime:string,revolut:string){
    try {
      const checkHasRace = await this.prisma.cursa.findMany({
        where: {userId: context.user!.userId}
      })
      if (checkHasRace.length === 0) {
        await this.prisma.cursa.create({
          data: {
            idCursa: randomUUID(),
            userId: context.user!.userId,
            name:context.user!.name,
            numarTricou: undefined,
            categorie: races,
            timpAlergat: undefined,
            phone: phone,
            marimeTricou: marime,
            revolute_cash:revolut
          }
        })
      }
      else {
        return createHTTPError(400, "Nu te poți înscrie de mai multe ori!");
      }
    } catch (error) {
      return createHTTPError(500, "Internal Server Error");
    }
  }

  @GenezioAuth()
  async adaugaCursa(context: GnzContext): Promise<HTTPResponse | HTTPError> {
    try {
      const infoUser = await this.prisma.userAccount.findUnique({
        where: {userId: context.user!.userId},
      })

      if (!infoUser) {
        throw createHTTPError(401, "UNAUTHORIZED");
      }

      await this.prisma.cursa.create({
        data: {
          idCursa: "APV2024",
          userId: infoUser.userId,
          numarTricou: undefined,
          categorie: undefined,
          timpAlergat: undefined,
        }
      })

      return {
        status: 200,
        message: "Successfully registered"
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'status' in error && 'message' in error) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "Internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async deleteUserCursa(context: GnzContext, categorie: string): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.cursa.findMany({
        where: {userId: context.user!.userId}
      })

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      await this.prisma.cursa.deleteMany({
        where:
          {
            userId: context.user!.userId,
            categorie: categorie,
          }
      })

      return {
        status: 500,
        message: "",
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'status' in error && 'message' in error) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "internal Server Error");
      }
    }
  }

  @GenezioAuth()
  async checkIfUserCreateIsComplete(context: GnzContext): Promise<HTTPResponse | HTTPError> {
    try {
      const userInfo = await this.prisma.userAccount.findUnique({
        where: {userId: context.user!.userId}
      })

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      if (userInfo?.phone === undefined || userInfo?.marimeTricou === undefined) {
        throw createHTTPError(406, "Not Acceptable");
      }

      return {
        status: 202,
        message: "Accepted"
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'status' in error && 'message' in error) {
        return error as HTTPError;
      } else {
        return createHTTPError(500, "internal Server Error");
      }
    }
  }


  @GenezioAuth()
  async getRaces(context: GnzContext){
    try{
      const userInfo = await this.prisma.cursa.findMany({
        where: {userId: context.user!.userId}
      })

      if (!userInfo) {
        throw createHTTPError(404, "User not exist");
      }

      return userInfo;
    }
    catch(error){
      return createHTTPError(500, "Internal Server Error");
    }
  }
}
