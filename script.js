// expresiones regulares
const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

function mostrarMensaje(id, mensaje, esCorrecto) {
    const span = document.getElementById(id);
    span.textContent = mensaje; 

    if (esCorrecto) {
        span.classList.add("correcto");   
        span.classList.remove("error");   
    } else {
        span.classList.add("error");      
        span.classList.remove("correcto"); 
    }
}

function validarCampo(idInput, idError, validacion, mensajeError, mensajeCorrecto) {

    const valor = document.getElementById(idInput).value.trim();

    if (validacion(valor)) {
        mostrarMensaje(idError, mensajeCorrecto, true); 
        return true;
    } else {
        mostrarMensaje(idError, mensajeError, false); 
        return false;
    }
}

function Validacion(event) {
    event.preventDefault(); 

    const validaciones = [
        validarCampo("nombre", "error-nombre", valor => valor.length >= 3, "El nombre debe tener al menos 3 caracteres.", "Nombre válido."),
        validarCampo("email", "error-email", valor => validEmail.test(valor), "El email no es válido.", "Email correcto."),
        validarCampo("contraseña", "error-contraseña", valor => regex.test(valor), "Debe tener al menos 8 caracteres, una letra y un número.", "Contraseña segura."),
        validarCampo("confirmacionContraseña", "error-confirmacion", valor => valor === document.getElementById("contraseña").value, "Las contraseñas no coinciden.", "Las contraseñas coinciden.")
    ];

    validaciones.every(Boolean) && (alert("¡Formulario enviado correctamente!"), document.getElementById("myForm").submit());
}

document.getElementById("nombre").addEventListener("input", function() {
    validarCampo("nombre", "error-nombre", valor => valor.length >= 3, "El nombre debe tener al menos 3 caracteres.", "Nombre válido.");
});

document.getElementById("email").addEventListener("input", function() {
    validarCampo("email", "error-email", valor => validEmail.test(valor), "El email no es válido.", "Email correcto.");
});

document.getElementById("contraseña").addEventListener("input", function() {
    validarCampo("contraseña", "error-contraseña", valor => regex.test(valor), "Debe tener al menos 8 caracteres, una letra y un número.", "Contraseña segura.");
});

document.getElementById("confirmacionContraseña").addEventListener("input", function() {
    validarCampo("confirmacionContraseña", "error-confirmacion", valor => valor === document.getElementById("contraseña").value, "Las contraseñas no coinciden.", "Las contraseñas coinciden.");
});

document.getElementById('myForm').addEventListener('submit', Validacion);

const eyeIcons = {
    open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>',
    closed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /></svg>'
};

function addListeners() {
    const toggleButton = document.querySelector(".toggle-button");
    
    if (!toggleButton) {
        return;
    }
    
    toggleButton.addEventListener("click", togglePassword);
}

function togglePassword() {
    let passwordField;
    if(document.getElementById("contraseña")){
        passwordField = document.querySelector("#contraseña");
    }
    else{
        passwordField = document.querySelector("#confirmacionContraseña");
    }
    const toggleButton = document.querySelector(".toggle-button");
    
    if (!passwordField || !toggleButton) {
        return;
    }
    
    toggleButton.classList.toggle("open");
    
    const isEyeOpen = toggleButton.classList.contains("open");

    toggleButton.innerHTML = isEyeOpen ? eyeIcons.closed : eyeIcons.open;
    passwordField.type = isEyeOpen ? "text" : "password";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".toggle-button").forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target"); 
            const passwordField = document.getElementById(targetId);
            
            if (!passwordField) return;

            // Alternar tipo de input entre 'password' y 'text'
            const isPasswordVisible = passwordField.type === "text";
            passwordField.type = isPasswordVisible ? "password" : "text";

            // Alternar icono
            this.innerHTML = isPasswordVisible ? eyeIcons.open : eyeIcons.closed;
        });
    });
});
