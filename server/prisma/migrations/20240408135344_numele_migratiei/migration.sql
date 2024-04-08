-- DropForeignKey
ALTER TABLE "Cursa" DROP CONSTRAINT "Cursa_userId_fkey";

-- AlterTable
ALTER TABLE "Cursa" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Cursa" ADD CONSTRAINT "Cursa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAccount"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
