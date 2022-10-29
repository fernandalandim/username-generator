// These variables are for the RESULT
// Icon + adjective + noun
const $avatar = document.getElementById("avatar");
const $adjective = document.getElementById("adjective");
const $noun = document.getElementById("noun")

// Buttons
const $newAvatar = document.getElementById("newAvatar");
const $newAdjective = document.getElementById("newAdjective");
const $newName = document.getElementById("newName");
const $refresh = document.getElementById("refresh");

// Content
const emoji = [""];

const adjective = {
    "handsome", "bully", "resourceful", "appropriate", "busy", "patient", "pretty", "awesome", ""
}

// for (let i = 127904; i < 127968; i++) {
//     $avatar.innerHTML += `<div class="emoji">
//     <p>&#${i};</p>
//     </div>`;
//     console.log("icons")
// }

// Interactios
$newAvatar.addEventListener("click") {
    console.log("clicked")
}