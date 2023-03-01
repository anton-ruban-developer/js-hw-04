let mood;
let option = prompt("How are You feeling today?");

switch (option) {
  case "happy":
    mood = "😀 Excellent!";
    break;
  case "sad":
    mood = "😢 Don't worry everything will be fine!";
    break;
  case "angry":
    mood = "😡 Don't stress yourself, life is good! ";
    break;
  default:
    alert("Please, answer the quastion, it is very important for us!");
}
alert(mood);
