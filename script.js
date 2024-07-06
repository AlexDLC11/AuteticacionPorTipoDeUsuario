// Lista simulada de usuarios registrados
let registeredUsers = [];

// Función para verificar si un usuario ya está registrado
function userAlreadyExists(email) {
  return registeredUsers.some(user => user.email === email);
}

// Función para alternar entre mostrar y ocultar contraseña
function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = passwordInput.nextElementSibling.querySelector('button');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Ocultar';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Ver';
  }
}

// Mostrar el formulario de inicio de sesión y ocultar los otros dos
function showLogin() {
  // Verificar si hay usuarios registrados
  if (registeredUsers.length === 0) {
    alert('No hay usuarios registrados. Por favor, regístrate primero.');
    return;
  }

  document.getElementById('loginCard').style.display = 'block';
  document.getElementById('registerCard').style.display = 'none';
  document.getElementById('welcomeCard').style.display = 'none';
}

// Mostrar el formulario de registro y ocultar los otros dos
function showRegister() {
  // Mostrar el formulario de registro y ocultar los otros dos
  document.getElementById('loginCard').style.display = 'none';
  document.getElementById('registerCard').style.display = 'block';
  document.getElementById('welcomeCard').style.display = 'none';

  // Limpiar el formulario de registro
  document.getElementById('registerForm').reset();
}

// Mostrar la tarjeta de bienvenida y ocultar los otros dos
function showWelcome(userName) {
  document.getElementById('loginCard').style.display = 'none';
  document.getElementById('registerCard').style.display = 'none';
  document.getElementById('welcomeCard').style.display = 'block';
  document.getElementById('welcomeMessage').textContent = `Bienvenido, ${userName}!`;
}

// Función para cerrar sesión
function logout() {
  showLogin(); // Volver a la pantalla de inicio de sesión
  document.getElementById('loginForm').reset(); // Limpiar el formulario de inicio de sesión
}

// Función para validar y procesar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Aquí puedes agregar la lógica para validar el inicio de sesión
  // Ejemplo básico: validar que los campos no estén vacíos y hacer algo con la información

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validar credenciales
  const user = registeredUsers.find(user => user.email === email && user.password === password);
  if (user) {
    // Mostrar mensaje de bienvenida
    showWelcome(user.name);
  } else {
    alert('Credenciales incorrectas. Por favor, regístrate antes de iniciar sesión.');
  }
});

// Función para validar y procesar el registro
document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Aquí puedes agregar la lógica para validar y procesar el registro
  const name = document.getElementById('name').value;
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;

  // Validar si el usuario ya está registrado
  if (userAlreadyExists(email)) {
    alert(`El usuario ${email} ya está registrado. Por favor, usa otro correo electrónico.`);
    return;
  }

  // Agregar nuevo usuario a la lista simulada
  registeredUsers.push({ name: name, email: email, password: password });

  // Mostrar alerta de registro exitoso
  alert(`Te has registrado como ${name}`);

  // Mostrar mensaje de bienvenida después del registro
  showLogin();
});

// Cambiar entre formularios de inicio de sesión y registro
document.getElementById('linkToRegister').addEventListener('click', function (event) {
  event.preventDefault();
  showRegister();
});

document.getElementById('linkToLogin').addEventListener('click', function (event) {
  event.preventDefault();
  showLogin();
});

// Función para alternar el modo nocturno
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const modeToggleBtn = document.querySelector('.mode-toggle-btn');
  const modeToggleText = document.querySelector('.mode-toggle-text');

  if (body.classList.contains('dark-mode')) {
    modeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    modeToggleText.textContent = 'Modo Diurno';
  } else {
    modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    modeToggleText.textContent = 'Modo Nocturno';
  }
}
