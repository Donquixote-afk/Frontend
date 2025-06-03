function cancelarFormulario() {
  document.getElementById("formulario").reset();
  limpiarErrores();
}

function limpiarErrores() {
  const errores = document.querySelectorAll(".mensaje-error");
  errores.forEach(e => e.textContent = "");
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach(i => i.classList.remove("error"));
}

function validarFormulario(e) {
  e.preventDefault(); // Evita el envío si hay errores

  limpiarErrores();

  let valido = true;

  if (!validarNombre()) valido = false;
  if (!validarEmail()) valido = false;
  if (!validarRUT()) valido = false;
  // ...añadir más validaciones según tus campos

  if (valido) {
    alert("Formulario enviado correctamente 😄");
  }
}

// Validaciones individuales
function validarNombre() {
  const nombre = document.getElementById("nombre");
  const error = document.getElementById("error-nombre");
  if (nombre.value.trim() === "") {
    error.textContent = "El nombre es obligatorio.";
    nombre.classList.add("error");
    return false;
  }
  return true;
}

function validarEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("error-email");
  const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email.value)) {
    error.textContent = "Email no válido.";
    email.classList.add("error");
    return false;
  }
  return true;
}

function validarRUT() {
  const rut = document.getElementById("rut").value;
  const error = document.getElementById("error-rut");
  // Aquí puedes implementar tu función validadora de RUT chileno
  if (rut.trim() === "") {
    error.textContent = "El RUT es obligatorio.";
    document.getElementById("rut").classList.add("error");
    return false;
  }
  // TODO: validación de formato del RUT
  return true;
}

// Asignar eventos
document.getElementById("formulario").addEventListener("submit", validarFormulario);