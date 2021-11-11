const PPTtoJSON = require(".");

PPTtoJSON.readPath("./sample.ppt")
  .then((json) => console.log(json))
  .catch((error) => console.error(error.message));
