// Temă pentru acasă - INTRO
// 1. Returnează un boolean dacă un număr este divizibil cu 10

const isDivisibleByTen = (num) => {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isDivisibleByTen(20));
console.log(isDivisibleByTen(21));

// 2. Scrieți o funcție numită tellFortune care:
// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom folosi aceste 4 argumente către apelul funcției.

const tellFortune = (N, Z, Y, X) => {
  console.log(
    `Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`,
  );
};

tellFortune(3, "Emanuela", "Italia", "Programator");

// 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

const getDayOfWeek = (dayNum) => {
  switch (dayNum) {
    case 1:
      dayNum = "Luni";
      break;
    case 2:
      dayNum = "Marti";
      break;
    case 3:
      dayNum = "Miercuri";
      break;
    case 4:
      dayNum = "Joi";
      break;
    case 5:
      dayNum = "Vineri";
      break;
    case 6:
      dayNum = "Sâmbătă";
      break;
    case 7:
      dayNum = "Duminică";
      break;
    default:
      dayNum = "Nu există zi a săptămânii cu acest număr.";
  }
  return dayNum;
};

console.log(getDayOfWeek(1));
console.log(getDayOfWeek(2));
console.log(getDayOfWeek(11));
