const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const PORT = process.env.PORT || config.get("serverPort");
const statusRouter = require("./routes/status.routes");
const cors = require('./middlware/cors.middleware');

app.use(cors);
app.use(express.json());
app.use("/api/get", statusRouter);
app.use("/api/post", statusRouter);

const start = async () => {
  try {
    await mongoose.connect(
      config.get("dbUrl"),
      {
        useNewUrlParser: true,  
        useUnifiedTopology: true
      },);
    
    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (e) {console.log(e)}
};

start();
