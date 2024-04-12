-- CreateTable
CREATE TABLE "UserAccount" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "userType" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "marimeTricou" TEXT,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cursa" (
    "id" SERIAL NOT NULL,
    "idCursa" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "numarTricou" TEXT,
    "categorie" TEXT,
    "timpAlergat" TIMESTAMP(3),
    "name" TEXT,
    "phone" TEXT,
    "marimeTricou" TEXT,
    "revolute_cash" TEXT,

    CONSTRAINT "Cursa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_userId_key" ON "UserAccount"("userId");

-- AddForeignKey
ALTER TABLE "Cursa" ADD CONSTRAINT "Cursa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAccount"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
