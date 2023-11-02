const express = require("express");
const connectDb = require("./db");

const router = express.Router();

router.post("/post-data", async (req, res) => {
    try {
        const query = `INSERT INTO public.biodata(name, city) VALUES ('${req.body.name}', '${req.body.city}');`;
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