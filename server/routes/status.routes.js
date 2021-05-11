const Router = require("express");
const Status = require("../models/Status");
const router = new Router();

router.get("/status", async (req, res) => {
  try {
    const status = await Status.find();
    return res.json(status);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.post("/status", async (req, res) => {
  try {
    const { status } = req.body;
    const statusData = await Status.find();
    Status.findByIdAndUpdate(
      statusData[0]._id,
      {
        $set: {
          status: status,
        },
      },
      function (err) {
        console.log(err);
      }
    );
    return res.json(status);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
