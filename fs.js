const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart🥳";

// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

const quote2 = "Live more, worry less🥳";

//Task 1
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log(`Completed writing text-${i}.html`);
//       });
// }

//Task 2
// node fs.js 20 ->  20 files to be created | note-1.txt, note-2.txt...note-20.txt

const [, , noOfFiles] = process.argv;
//console.log(noOfFiles)
const quote3 = "Happy Day";
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote3, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(`Completed writing note-${i}.txt`);
//   });
// }

//read file

fs.readFile("./cool123.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error ❌", err);
  }
  console.log("The content of the file is ✅:", data);
});
