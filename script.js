
function cambiarImagen(idImagen, miniatura) {
  document.getElementById(idImagen).src = miniatura.src;
}

function abrirPopup() {
  document.getElementById("popupFormulario").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popupFormulario").style.display = "none";
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const celular = document.getElementById("celular").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;

  const mensaje = `Hola, quiero hacer un pedido:\n\nNombre: ${nombre}\nCédula: ${cedula}\nCelular: ${celular}\nCorreo: ${correo}\nDirección: ${direccion}`;
  const url = `https://wa.me/573001112233?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
