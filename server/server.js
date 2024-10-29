const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  try {
    //call to retreive array from file data.json
    res.status(200).json(); //return the array
  } catch (error) {
    res.status(500).json({ message: "Internal server errror", error });
  }
});

app.post("/add", (req, res) => {
  const data = req.body.data;

  try {
    //use add function from file.js
    //return result
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: "Internal server errror", error });
  }
});

app.put("/:id", (req, res) => {
  const id = req.params.id;

  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server errror", error });
  }

  //import update function from file.js

  res.json(); //return updated note
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  try {
    //call delete function from file.js
    res.status(200).json({ message: "Note deleted succesfully", ok: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server errror", error });
  }
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
