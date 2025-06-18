//Tomamos la referencia de los elementos HTML
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const execBtn = document.getElementById("btn-execute");
const imcText = document.getElementById("imc-text");

//Añadimos un listener para calcular el peso cuando se haga click en el boton
execBtn.addEventListener("click", (e) => {
  //Prevenimos que el botón ejecute cualquier otro evento por defecto
  e.preventDefault();

  //Obtenemos los datos de los input
  const height = heightInput.value;
  const weight = weightInput.value;

  //Validamos los datos
  if (height < 0.3 || height > 2.5) {
    alert("Altura invalida, por favor digita una altura válida");

    heightInput.value = null;
    weightInput.value = null;
    return;
  }

  if (weight < 0 || weight > 1000) {
    alert("Peso invalido, por favor digita un peso válido");

    heightInput.value = null;
    weightInput.value = null;
    return;
  }

  //Calculamos el IMC
  const imc = weightInput.value / heightInput.value ** 2;

  //Dependiendo del IMC, cambiará el estado
  let state;
  if (imc < 18.5) state = "Bajo peso";
  else if (imc > 18.5 && imc < 24.9) state = "Adecuado";
  else if (imc > 24.9 && imc < 29.9) state = "Sobrepeso";
  else if (imc > 29.9 && imc < 34.9) state = "Obesidad grado 1";
  else if (imc > 34.9 && imc < 39.9) state = "Obesidad grado 2";
  else if (imc > 39.9) state = "Obesidad grado 3";

  //Mostramos en pantalla el resultado
  imcText.textContent = `Tu imc es ${imc}, tu estado es: ${state}`;
});
