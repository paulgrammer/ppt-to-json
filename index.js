const pdfUtil = require("pdf-to-text");
const libre = require("libreoffice-convert");
const path = require("path");
const fs = require("fs");

function readPdf(pdfPath, callback) {
  pdfUtil.info(pdfPath, async (err, { pages }) => {
    const readeLine = (opts) => {
      return new Promise((resolve, reject) => {
        pdfUtil.pdfToText(pdfPath, opts, (err, lines) => {
          if (err) return reject(err);
          resolve(
            lines
              .trim()
              .split("\n")
              .map((text) => text.trim())
              .filter((text) => text.length)
          );
        });
      });
    };

    const lines = [];

    for (let idx = 1; idx < pages + 1; idx++) {
      let line = await readeLine({ from: idx, to: idx });
      lines.push(line);
    }

    callback(lines);
  });
}

exports.readPath = (input) => {
  return new Promise((resolve, reject) => {
    const enterPath = path.resolve(input);
    const file = fs.readFileSync(enterPath);
    const extend = ".pdf";
    const outputPath = path.join(`/tmp/pdf-to-json${extend}`);

    libre.convert(file, extend, undefined, (err, done) => {
      if (err) {
        return reject(new Error(`Error converting file: ${err}`));
      }

      fs.writeFileSync(outputPath, done);

      readPdf(outputPath, (pairs) => {
        resolve(pairs);
        fs.rmSync(outputPath);
      });
    });
  });
};
