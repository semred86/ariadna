const gm = require("gm");
const fs = require("fs");

// for (let i = 73; i < 88; i++) {
//   fs.rename("m" + i + ".jpg", "m" + (i - 2) + ".jpg", () => console.log("111"));
// }

// fs.readdir("./", (e, f) => {
//   f.slice(0, f.length - 1).forEach((e) => {
//     gm(e)
//       .resize(200)
//       .write("m" + e, function (err) {
//         console.log(err ? err : "m" + e + "Done!");
//       });
//   });
// });

gm("81.jpg")
  .resize(200)
  .write("m81.jpg", function (err) {
    console.log(err ? err : "Done!");
  });
// gm("1.jpg").write("3.jpg", function (err) {
// console.log(err ? err : "Done!");
// });
