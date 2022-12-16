require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const PORT = process.env.port || 7000;
const blogRouter = require("./Router/routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", blogRouter);

// app.get("/",(req,res)=>{
//     res.send("HomePage")
// });

app.listen(PORT, async () => {
  await connectDB();
  console.log(`ServerRunning on http://localhost:${PORT}`);
});
