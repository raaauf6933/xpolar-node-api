/*
  Warnings:

  - You are about to drop the column `Region` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `assignment_end_date` on the `case_batch` table. All the data in the column will be lost.
  - You are about to drop the column `assignment_start_date` on the `case_batch` table. All the data in the column will be lost.
  - You are about to drop the column `batch_id` on the `case_batch` table. All the data in the column will be lost.
  - You are about to drop the column `batch_reference` on the `case_batch` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `case_batch` table. All the data in the column will be lost.
  - You are about to drop the column `case_batch_id` on the `cases` table. All the data in the column will be lost.
  - You are about to drop the column `case_reference` on the `cases` table. All the data in the column will be lost.
  - You are about to drop the column `case_unique_batch_id` on the `cases` table. All the data in the column will be lost.
  - You are about to drop the column `client_reference` on the `cases` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `cases` table. All the data in the column will be lost.
  - You are about to drop the column `contact_value` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `birth_day` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `person` table. All the data in the column will be lost.
  - Added the required column `personId` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentEndDate` to the `case_batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentStartDate` to the `case_batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batchId` to the `case_batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batchReference` to the `case_batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `case_batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caseBatchId` to the `cases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caseReference` to the `cases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caseUniqueBatchId` to the `cases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `cases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactValue` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDay` to the `person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `case_batch` DROP FOREIGN KEY `case_batch_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `cases` DROP FOREIGN KEY `cases_case_batch_id_fkey`;

-- DropForeignKey
ALTER TABLE `cases` DROP FOREIGN KEY `cases_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_person_id_fkey`;

-- AlterTable
ALTER TABLE `address` DROP COLUMN `Region`,
    DROP COLUMN `person_id`,
    DROP COLUMN `zip_code`,
    ADD COLUMN `personId` INTEGER NOT NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `case_batch` DROP COLUMN `assignment_end_date`,
    DROP COLUMN `assignment_start_date`,
    DROP COLUMN `batch_id`,
    DROP COLUMN `batch_reference`,
    DROP COLUMN `client_id`,
    ADD COLUMN `assignmentEndDate` DATETIME(3) NOT NULL,
    ADD COLUMN `assignmentStartDate` DATETIME(3) NOT NULL,
    ADD COLUMN `batchId` VARCHAR(191) NOT NULL,
    ADD COLUMN `batchReference` VARCHAR(191) NOT NULL,
    ADD COLUMN `clientId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `cases` DROP COLUMN `case_batch_id`,
    DROP COLUMN `case_reference`,
    DROP COLUMN `case_unique_batch_id`,
    DROP COLUMN `client_reference`,
    DROP COLUMN `person_id`,
    ADD COLUMN `caseBatchId` INTEGER NOT NULL,
    ADD COLUMN `caseReference` VARCHAR(191) NOT NULL,
    ADD COLUMN `caseUniqueBatchId` VARCHAR(191) NOT NULL,
    ADD COLUMN `clientReference` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `personId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `contact_value`,
    DROP COLUMN `person_id`,
    ADD COLUMN `contactValue` VARCHAR(191) NOT NULL,
    ADD COLUMN `personId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `person` DROP COLUMN `birth_day`,
    DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    ADD COLUMN `birthDay` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `case_batch` ADD CONSTRAINT `case_batch_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cases` ADD CONSTRAINT `cases_caseBatchId_fkey` FOREIGN KEY (`caseBatchId`) REFERENCES `case_batch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cases` ADD CONSTRAINT `cases_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
