const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("VTU Server Running");
});

app.post("/buy-airtime", (req, res) => {
  const { network, phone, amount } = req.body;

  res.json({
    status: "success",
    message: `Airtime sent to ${phone}`,
    network,
    amount
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
