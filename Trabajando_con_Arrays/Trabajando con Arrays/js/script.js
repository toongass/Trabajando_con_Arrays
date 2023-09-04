// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  const filtrarElementos = strangeArray.filter(item => typeof item === "string"); /* iltra del array "strangeArray" los elementos de tipo string, 
  incluyendolos en el nuevo array "filtrarElementos".*/
  filtrarElementos.sort((a, b) => a.localeCompare(b)); /* se encarga de ordenar los elementos en el array filtrarElementos alfabéticamente utilizando 
  un método de comparación que tiene en cuenta las reglas de ordenación del idioma especificado, lo que garantiza un ordenamiento más preciso, 
  especialmente cuando se trata de cadenas de texto que contienen caracteres acentuados o especiales. */
  
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(filtrarElementos);
});
