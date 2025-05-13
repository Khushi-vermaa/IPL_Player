-- CreateTable
CREATE TABLE `Player` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `runs` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `role` ENUM('Batsman', 'Bowler', 'Allrounder') NOT NULL,
    `salary` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
