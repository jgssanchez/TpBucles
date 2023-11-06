for (let i = 1; i <= 500; i++) {
  let linea = i.toString();

  if (i % 4 === 0) {
    linea += " (Múltiplo de 4)";
  }

  if (i % 9 === 0) {
    linea += " (Múltiplo de 9)";
  }

  console.log(linea);

  if (i % 5 === 0) {
    console.log("———————————————");
  }
}
