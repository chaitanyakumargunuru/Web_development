const fs =require("fs");
let data = fs.readFileSync("abc.txt","ascii");
data=data.replace("chaitanya","chaitanya kumar gunuru");
console.log(data);

console.log("creating new file.......")
fs.writeFileSync("abc2.txt",data);
fs.appendFileSync("abc2.txt","sasi vardhan , vamsi , dilip kumar ");
new_data=fs.readFileSync("abc2.txt","ascii");
console.log(new_data);