import Joi from "joi";
export const playerSchema = Joi.object({
  name: Joi.string().required(),
  team: Joi.string().required(),
  country: Joi.string().required(),
  runs: Joi.number().integer().required(),
  image: Joi.string().uri().required(),
  role: Joi.string().valid("Batsman", "Bowler", "Allrounder").required(),
  salary: Joi.number().integer().required(),
});

export const updateSchema = Joi.object({
  name: Joi.string(),
  team: Joi.string(),
  country: Joi.string(),
  runs: Joi.number().integer(),
  image: Joi.string().uri(),
  role: Joi.string().valid("Batsman", "Bowler", "Allrounder"),
  salary: Joi.number().integer(),
});
