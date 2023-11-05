let resultado = "";

do {
  let texto = prompt("Introduce un texto");
  if (texto != null) {
    texto = texto.trim();
  } else {
    texto = "";
  }

  if (resultado == "" && texto != "") {
    resultado += texto;
  } else if (resultado != "" && texto != "") {
    resultado += "-" + texto;
  } else {
    resultado = resultado;
  }
} while (confirm("Seguir siguiendo?"));
console.log(resultado);
