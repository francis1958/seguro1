function siguientePaso(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function calcularPrecio() {
  const tipo = document.getElementById('tipoSeguro').value;
  const edad = parseInt(document.getElementById('edad').value);
  let precio = 0;

  if (tipo === 'auto') {
    precio = 200 + (edad < 25 ? 100 : 0);
  } else if (tipo === 'salud') {
    precio = 150 + (edad > 50 ? 50 : 0);
  }

  document.getElementById('precioEstimado').innerText = `Precio estimado: $${precio}`;
  document.getElementById('detalleSeguro').innerHTML = `
    <p>Tipo de seguro: ${tipo}</p>
    <p>Edad: ${edad}</p>
    <p>Precio estimado: $${precio}</p>
    <p>Coberturas: Cobertura básica + Asistencia 24h + Servicio personalizado</p>
  `;
}

function confirmarSeguro() {
  document.getElementById('mensajeConfirmacion').innerHTML = '<p><strong>¡Contratación realizada con éxito!</strong> Se ha generado un documento PDF (simulado).</p>';
  setTimeout(() => siguientePaso('postventa'), 2000);
}