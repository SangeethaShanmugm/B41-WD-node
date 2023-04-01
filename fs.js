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

// const [, , noOfFiles] = process.argv;
// //console.log(noOfFiles)
// const quote3 = "Happy Day";
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote3, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(`Completed writing note-${i}.txt`);
//   });
// }

//read file

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is ✅:", data);
// });

//append file

// const niceQuote = "\nMake everyday a little less ordinarily🥳";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names", files);
// });

//Task - Delete all the files in the backup folder

// fs.readdir("./backup", (err, data) => {

//   data.forEach(fileName => {
//     fs.unlink(`./backup/${fileName}`, (err) => {
//       console.log("Deleted Successfully", fileName);
//     });

//   })

// });

// writeFile => CallStack => WebApi(whoever finishes writing file first) => CallBack Q(event loop) => CallStack

// writeFile, readFile, appendFile - async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync - sync

//Sync writeFile
const [, , noOfFiles] = process.argv;
//console.log(noOfFiles)
const quote3 = "Happy Day";
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFileSync(`./backup/text-${i}.txt`, quote3),
    console.log("Completed writing", i);
}
