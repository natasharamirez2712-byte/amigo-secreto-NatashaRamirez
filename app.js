// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para guardar los nombres
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Funcion para no repetir nombres
  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus(); 
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    
    // Botón para eliminar los nombres registrados
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => eliminarAmigo(index);
    
    li.appendChild(deleteBtn);
    lista.appendChild(li);
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `🎉 Tu amigo secreto es: ${amigoSecreto}`;
  resultadoElement.appendChild(li);
}

// Para que al picar enter también guarde
document.getElementById("amigo").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    agregarAmigo();
  }
});