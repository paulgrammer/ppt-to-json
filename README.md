# ppt-to-json

```javascript
const PPTtoJSON = require("ppt-to-json");

PPTtoJSON.readPath("./sample.ppt")
  .then((json) => console.log(json))
  .catch((error) => console.error(error.message));
```
