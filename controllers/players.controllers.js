import prisma from "../Db/db.config.js";
import catchAsync from "../utils/catchasync.js";
export const createPlayer = catchAsync(async (req, res, next) => {
  const { name, team, country, runs, image, role, salary } = req.body;

  const Player = await prisma.player.create({
    data: {
      name,
      team,
      country,
      runs: parseInt(runs),
      image,
      role,
      salary: parseInt(salary),
    },
  });
  return res
    .status(201)
    .json({ message: "Player created successfully", Player });
});
export const getAllPlayers = catchAsync(async (req, res, next) => {
  const {
    page = 1,
    limit = 10,
    team,
    search,
    sortBy,
    order = "asc",
  } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const take = parseInt(limit);
  const whereClause = {
    ...(team && { team }),
    ...(search && {
      name: {
        contains: search,
        mode: "insensitive", // case-insensitive search
      },
    }),
  };
  const orderByClause = sortBy
    ? {
        [sortBy]: order.toLowerCase() === "desc" ? "desc" : "asc",
      }
    : { id: "asc" }; // default sorting
  const allplayers = await prisma.player.findMany({
    where: whereClause,
    skip: skip,
    take: take,
    orderBy: orderByClause,
    select: {
      id: true,
      name: true,
      image: true,
      role: true,
      team: true,
      salary: true,
    },
  });
  const totalPlayers = await prisma.player.count({
    where: whereClause,
  });

  res.status(200).json({
    message: "All players fetched successfully",
    page: parseInt(page),
    limit: parseInt(limit),
    allplayers,
    totalPlayers,
  });
});
export const updatePlayerDeatils = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, team, country, runs, image, role, salary } = req.body;

  const player = await prisma.player.update({
    where: { id: id },
    data: {
      name,
      team,
      country,
      runs: parseInt(runs),
      image,
      role,
      salary: parseInt(salary),
    },
  });
  return res
    .status(200)
    .json({ message: "Player updated successfully", player });
});
export const deletePlayer = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const player = await prisma.player.delete({
    where: { id: id },
  });
  return res
    .status(200)
    .json({ message: "Player deleted successfully", player });
});
export const getplayerDescription = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const player = await prisma.player.findUnique({
    where: { id: id },
    select: {
      id: true,
      name: true,
      image: true,
      role: true,
      team: true,
      country: true,
      runs: true,
      salary: true,
    },
  });
  res.status(200).json({
    message: " players fetched successfully",
    player,
  });
});
