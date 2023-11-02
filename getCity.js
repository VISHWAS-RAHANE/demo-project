const express = require("express");
const connectDb = require("./db");

const router = express.Router();

router.get("/get-city-name", async (req, res) => {
    try {
        const query = `select * from public.biodata ;`;
        const result = await connectDb(query);
        if (!result) {
          return res.status(400).json({ msg: "no city" });
        }
    
        res.status(200).json(result?.rows);
      } catch (error) {
        res.status(500).send(error.message);
      }
});

module.exports = router;