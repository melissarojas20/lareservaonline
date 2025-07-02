function abrirPopup() {
  document.getElementById("popupFormulario").style.display = "block";
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

  const mensaje = `Hola, quiero comprar ropa deportiva para mujer con Intelligent Form:%0A%0A👤 *Nombre:* ${nombre}%0A🆔 *Cédula:* ${cedula}%0A📱 *Celular:* ${celular}%0A📧 *Correo:* ${correo}%0A🏠 *Dirección:* ${direccion}%0A💵 *Pago:* Contra entrega`;

  window.open(`https://wa.me/573105453556?text=${mensaje}`, '_blank');
}

let tiempoRestante = 6 * 60 * 60;
function actualizarTemporizador() {
  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;

  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");

  if (tiempoRestante > 0) tiempoRestante--;
}

setInterval(actualizarTemporizador, 1000);