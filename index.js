const express = require("express");
const { getPackageData } = require("./controller");

const app = express();

app.get("/:name", async (req, res) => {
  try {
    let stringArray = [];
    const response = await getPackageData.get(`${req.params.name}/latest`);
    if (response.status === 200) {
      const data = response.data.dependencies;
      for (let i in data) {
        stringArray.push(`${i} : ${data[i]}`);
      }
      res.send(stringArray);
    } else {
      console.log("error getting package");
    }
  } catch (e) {
    console.log("error", e);
  }
});

app.listen(4000, err => {
  if (!err) {
    console.log("successfully connected to the port ", 4000);
  } else {
    console.log("error occured ", err);
  }
});
