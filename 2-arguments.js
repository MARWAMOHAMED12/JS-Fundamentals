const args = process.argv.slice(2);
const count = args.length;
if (count === 0 )  {
    console .log("No argument");
}
else if (count === 1) {
    console .log("One argument");
}
else {
    console .log("More than one argument");
}       

