const mongoose = require("mongoose");

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://Angel:YmBowiUYA8Nx4G1E@movies.gxj5gcc.mongodb.net/Movies?retryWrites=true&w=majority&appName=Movies" 
        //La base de datos se puede entrar desde cualquier IP
    );
}

module.exports = dbCon;