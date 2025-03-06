const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = require('./models');


// Routes
restRouter = require("./routes/restaurent");
app.use("/restaurent", restRouter ); // http://localhost:3024/restaurent

db.sequelize.sync().then(()=>{
    app.listen(3024,() => {
        console.log("PORT: 3024");
    })
})
