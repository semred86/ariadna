const gm = require("gm");

gm("2.jpg")
  .resize(200)
  .write("3.jpg", function (err) {
    console.log(err ? err : "Done!");
  });
// gm("1.jpg").write("3.jpg", function (err) {
  // console.log(err ? err : "Done!");
// });
