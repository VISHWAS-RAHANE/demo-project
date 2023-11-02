const express = require("express");
const connectDb = require("./db");

const router = express.Router();

router.delete("/delete-data/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const query = `DELETE FROM public.biodata WHERE id = ${id};`;
      const result = await connectDb(query);
      if (!result) {
        return res.status(400).json({ msg: "Something went wrong" });
      }
  
      res.status(200).json(result?.rows);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;