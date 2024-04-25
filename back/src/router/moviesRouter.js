const { Router } = require("express");
const  moviesController = require("../controllers/moviesController"); //Esto se cambio a una variable 

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/post", moviesController.createUser);

module.exports = moviesRouter;