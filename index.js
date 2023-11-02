const express = require("express");
const app = express();

const city = require('./getCity')
const data = require('./dataPost')
const deleteData = require('./deleteData')

app.use(express.json()); // Add this line to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));// Add this line to parse URL-encoded form data

app.use("/city", city);
app.use("/data", data)
app.use("/deleteData", deleteData)


app.listen(5000, () => {
  console.log("Your app is listening on 5000");
});