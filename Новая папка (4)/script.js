let name = prompt("Ismingizni kiriting");
let letter = prompt("biror harfni kiriting:");

if (name.includes(letter)) {
  alert(`${name} ismining ichida ${letter} harfi mavjud`)
} else {
  alert(`${name} ismining ichida ${letter} harfi mavjud emas`)
}