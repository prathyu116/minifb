import app from "./index.js";
import {connect} from "./configs/db.js"


app.listen(5000, async () => {
  try {
    await connect();
    console.log("list 5000");

  } catch (e) {
    console.log(e);
  }

});
