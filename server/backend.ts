import {
  GenezioAuth,
  GenezioDeploy,
  GnzContext,
} from "@genezio/types";

import {PrismaClient} from "@prisma/client";

type HTTPResponse = {
  status: number;
  message: string;
}

type HTTPError = {
  status: number;
  message: string;
};

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
    phone: string,
    marimeTricou: string  
  ): Promise<HTTPResponse | HTTPError>{
    try {
      await this.prisma.userAccount.create({
        data: {
          userId: context.user!.userId,
          phone: phone,
          marimeTricou: marimeTricou
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
  async adaugaCursa(context: GnzContext): Promise<HTTPResponse | HTTPError>{
    try {
      const infoUser = await this.prisma.userAccount.findUnique({
        where: {userId: context.user!.userId},
      })

      if (!infoUser){
        throw createHTTPError(401, "UNAUTHORIZED");
      }

      await this.prisma.cursa.create({
        data: {
          idCursa: "APV2024",
          userId: infoUser.userId,
          numarTricou: "",
          categorie: "",
          timpAlergat: "",
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
}
