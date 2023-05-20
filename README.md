# PPT to JSON

This library provides a simple and convenient way to convert PowerPoint (.ppt) files into JSON format. This allows for easy parsing, manipulation, and analysis of slide content.

## Installation

To install the `ppt-to-json` library, use npm:

```bash
npm install ppt-to-json
```

## Usage

First, import the `PPTtoJSON` from `ppt-to-json`.

```javascript
const PPTtoJSON = require("ppt-to-json");
```

Then, call the `readPath` function with the path to your PowerPoint file.

```javascript
PPTtoJSON.readPath("./sample.ppt")
  .then((json) => console.log(json))
  .catch((error) => console.error(error.message));
```

This function will return a Promise that resolves to a JSON object representing the content of the PowerPoint file. If an error occurs while reading the file or converting it to JSON, the Promise will be rejected with an error message.

## Resulting JSON structure

The resulting JSON object has a structure that represents the content of the PowerPoint file. Each slide in the file is converted into an object in the JSON array. Each object includes the content of the slide, formatted as a string, along with any additional metadata about the slide.

```json
[
  {
    "slideNumber": 1,
    "title": "Slide 1",
    "content": "This is the content of slide 1."
  },
  {
    "slideNumber": 2,
    "title": "Slide 2",
    "content": "This is the content of slide 2."
  },
  // More slides...
]
```

## Error Handling

If an error occurs while reading the PowerPoint file or converting it to JSON, the Promise will be rejected with an Error. You can handle this using the `.catch()` method:

```javascript
PPTtoJSON.readPath("./non_existent.ppt")
  .then((json) => console.log(json))
  .catch((error) => console.error(error.message)); // Will print: Error: File not found: ./non_existent.ppt
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing

The code in this project is licensed under MIT license. See the [LICENSE](LICENSE) file for more information.
