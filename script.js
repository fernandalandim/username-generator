// These variables are for the RESULT
// Icon + adjective + noun
const $avatar = document.getElementById("avatar");
const $adjective = document.getElementById("adjective");
const $name = document.getElementById("name");

// Buttons
const $newAvatar = document.getElementById("newAvatar");
const $newAdjective = document.getElementById("newAdjective");
const $newName = document.getElementById("newName");
const $refresh = document.getElementById("refresh");

// Content
const emojis = ["😀", "😁", "🥳", "😡"];
const adjectives = [
  "handsome",
  "bully",
  "resourceful",
  "appropriate",
  "busy",
  "patient",
  "pretty",
  "awesome",
  "",
];
const names = ["John", "Smith", "Mary", "Sylvia"];

const getRandomElement = (array) => {
  return array[Math.ceil(Math.random() * array.length - 1)];
};

// Interactios
$newAvatar.addEventListener("click", (event) => {
  $avatar.innerText = getRandomElement(emojis);
});

$newAdjective.addEventListener("click", (event) => {
  $adjective.innerText = getRandomElement(adjectives);
});

$newName.addEventListener("click", (event) => {
  $name.innerText = getRandomElement(names);
});

$refresh.addEventListener("click", (event) => {
  $avatar.innerText = "";
  $adjective.innerText = "Lorem";
  $name.innerText = "ipsum";
});
