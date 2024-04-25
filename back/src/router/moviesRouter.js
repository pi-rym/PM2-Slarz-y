const { Router } = require("express");
const { getAllMovies } = require("../controllers/moviesController"); 

// 

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);

module.exports = moviesRouter;