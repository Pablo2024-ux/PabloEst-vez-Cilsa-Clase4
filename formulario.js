const form = document.getElementById("formulario-informacion-personal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("Nombre").value;
  const apellido = document.getElementById("Apellido").value;
  const email = document.getElementById("email").value;
  const fechaNacimiento = document.getElementById("fecha-de-nacimiento").value;
  const paisResidencia = document.getElementById("Pais-de-Residencia").value;

  // Validate form input
  if (!nombre ||!apellido ||!email ||!fechaNacimiento ||!paisResidencia) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Por favor, rellene todos los campos obligatorios.";
    return;
  }

  // Validate email
  if (!validateEmail(email)) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Dirección de correo electrónico no válida.";
    return;
  }

  // Toggle high contrast mode
  const highContrastButton = document.getElementById("high-contrast");
  highContrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  // Submit form data
  console.log("Form data:", {
    nombre,
    apellido,
    email,
    fechaNacimiento,
    paisResidencia,
  });

  // También puede enviar los datos del formulario a un servidor usando Fetch API o XMLHttpRequest
  //...
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}