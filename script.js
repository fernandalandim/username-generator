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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
const getRandomElement = (array) => {
  const random = Math.random(); // generate number greater than or equal to 0 and less than 1  
  const multipleByLength = random * array.length;
  const index = Math.floor(multipleByLength); // round down to an integer
  return array[index];
};

// Interactios
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
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
