let names = ["Micheal", "Melissa", "Andrea", "John"];

names[4] = "Ryan";
names[0] = "Ryan";
for (i in names) {
  if (names[i] == "Andrea") console.log("Exists");
}
names.push("Ryan");
names.pop();
names.unshift("Ryan");
names.shift();
