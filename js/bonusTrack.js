let saldo = 100000;
let opcion = prompt(
  "Bienvenidos al himalaya... digo al cajero automatico! Que va queri?\n1. Consultar saldo\n2. Depositar platica\n3. Retirar platica"
);

switch (opcion) {
  case "1":
    console.log("Tu saldo es de $" + saldo);
    break;
  case "2":
    let deposito = parseInt(prompt("cuato deseas depositar?:"));
    saldo += deposito;
    console.log("Tu nuevo saldo es de $" + saldo + " andamos con filo $.$");
    break;
  case "3":
    let retiro = parseInt(prompt("cuanto deseas retirar:"));
    if (retiro > saldo) {
      console.log("Saldo insuficiente. Estas crocante de seco!!");
    } else {
      saldo -= retiro;
      console.log("Retiro exitoso! Tu nuevo saldo es de $" + saldo);
    }
    break;
  default:
    console.log("Opción inválida. que no sabi lee??.");
    break;
}

