const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = require('./models');

db.sequelize.sync().then(()=>{
    app.listen(3024,() => {
        console.log("PORT: 2424");
    })
})
