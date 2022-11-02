function CalcularAumento(sueldo) {
  return (sueldo / 100) * 10; //+ parseInt(sueldo);
}

// function SueldoAproximado() {
//   const Sueldo1 = document.getElementById("SueldoInicial").value;
//   const Cantidad = document.getElementById("Tiempo").value;

//   const calcular = CalcularAumento(Sueldo1);

//   for (var i = 0; i <= Cantidad.length; i++) {
//     const SuerdoT = document.getElementById("SuerdoT");
//     SuerdoT.innerText = "tu suerdo sera de: $" + calcular;
//   }
// }

function SueldoAproximado() {
  const Sueldo1 = parseInt(document.getElementById("SueldoInicial").value);
  const Cantidad = parseInt(document.getElementById("Tiempo").value);

  let sueldoTotal = Sueldo1;

  for (var i = 0; i < Cantidad; i++) {
    sueldoTotal += CalcularAumento(sueldoTotal);
    // sueldoTotal += Sueldo1;
  }

  const SuerdoT = document.getElementById("SuerdoT");
  SuerdoT.innerText = "tu suerdo sera de: " + sueldoTotal;
}
