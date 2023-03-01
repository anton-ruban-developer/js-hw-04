let country = prompt("В какую страну вы хотите доставить товар?");
let update = country.toLowerCase();
let price;

switch (update) {
  case "china":
    price = 100;
    break;
  case "chile":
    price = 250;
    break;
  case "australia":
    price = 170;
    break;
  case "india":
    price = 80;
    break;
  case "jamaica":
    price = 120;
    break;
  default:
    alert("У вашу країну немає доставки.");
}
alert(`Доставка в ${update} буде коштувати ${price} кредитів.`);
