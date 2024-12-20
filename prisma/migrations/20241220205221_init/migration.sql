-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
