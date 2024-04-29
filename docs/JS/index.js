function calcularAreaTriangulo() {
  const base = parseFloat(document.getElementById("baseInput").value);
  const altura = parseFloat(document.getElementById("alturaInput").value);

  if (isNaN(base) || isNaN(altura)) {
    document.getElementById("resultado").textContent = "Ingrese valores numéricos válidos para la base y la altura del triángulo.";
  } 
  else if (base <= 0 || altura <= 0) {
    document.getElementById("resultado").textContent = "Los valores de la base y la altura deben ser mayores a cero.";
  }else {
    const area = (base * altura) / 2;
    document.getElementById("resultado").textContent = `El área del triángulo con base ${base} y altura ${altura} es: ${area}`;
  }

}


function calcularAreaCirculo() {
  const radio = parseFloat(document.getElementById("radioInput").value);

  if (isNaN(radio) || radio <= 0) {
    document.getElementById("resultado2").textContent = "Ingrese un valor numérico válido mayor a cero para el radio.";
  } else {
    const area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultado2").textContent = `El área del círculo con radio ${radio} es: ${area}`;
  }
}
  