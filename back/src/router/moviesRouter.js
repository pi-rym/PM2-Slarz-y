const { Router } = require("express");
const { moviesController } = require("../controllers"); 

const moviesRouter = Router();

moviesRouter.get("/", moviesController);

module.exports = moviesRouter;