function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(opciones, errorElement, mensaje) {
    const generoSeleccionado = Array.from(opciones).some(opcion => opcion.checked);
    errorElement.textContent = generoSeleccionado ? "" : mensaje;
    return generoSeleccionado;
}

function validarHorarioMedico(horaInicio, horaFin, errorElement, mensaje) {
    if (!horaInicio.value || !horaFin.value) {
        horaFin.setCustomValidity("");
        return true;
    }

    const horarioValido = horaFin.value >= horaInicio.value;
    horaFin.setCustomValidity(horarioValido ? "" : mensaje);

    if (!horarioValido) {
        errorElement.textContent = mensaje;
    } else if (errorElement.textContent === mensaje) {
        errorElement.textContent = "";
    }   

    return horarioValido;
}
function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}   
//Validemos el formulario medico , paciente y registro de citas
function validarFormulario() {
    //Medico
    const inputNombresMedico = document.getElementById("nombresMedico");
    const inputApellidosMedico = document.getElementById("apellidosMedico");
    const inputGenero = document.getElementsByName("genero");
    const inputEspecialidad = document.getElementById("especialidadMedico");
    const inputHorarioAtencionInicio = document.getElementById("horarioAtencionInicio");
    const inputHorarioAtencionFin = document.getElementById("horarioAtencionFin");
    const inputAniosExperiencia = document.getElementById("aniosExperienciaMedico");
    const inputBiografia = document.getElementById("biografiaMedico");
    //paciente
    const inputNombresPaciente = document.getElementById("nombresPaciente");
    const inputApellidosPaciente = document.getElementById("apellidosPaciente");

    const labelErrorNombresMedico = document.getElementById("errorNombresMedico");
    const labelErrorApellidosMedico = document.getElementById("errorApellidosMedico");
    const labelErrorGeneroMedico = document.getElementById("errorGeneroMedico");
    const labelErrorEspecialidadMedico = document.getElementById("errorEspecialidadMedico");
    const labelErrorHorarioAtencionInicio = document.getElementById("errorHorarioAtencionInicio");
    const labelErrorHorarioAtencionFin = document.getElementById("errorHorarioAtencionFin");
    const labelErrorAniosExperienciaMedico = document.getElementById("errorAniosExperienciaMedico");
    const labelErrorBiografiaMedico = document.getElementById("errorBiografiaMedico");
    const labelErrorNombresPaciente = document.getElementById("errorNombresPaciente");
    const labelErrorApellidosPaciente = document.getElementById("errorApellidosPaciente");

    const nombresValidos = validarCampoObligatorio(inputNombresMedico, labelErrorNombresMedico, "Los nombres son obligatorios");
    const apellidosValidos = validarCampoObligatorio(inputApellidosMedico, labelErrorApellidosMedico, "Los apellidos son obligatorios");
    const especialidadValida = validarCampoObligatorio(inputEspecialidad, labelErrorEspecialidadMedico, "La especialidad es obligatoria");
    const horarioInicioValido = validarCampoObligatorio(inputHorarioAtencionInicio, labelErrorHorarioAtencionInicio, "La hora de inicio es obligatoria");
    const horarioFinValido = validarCampoObligatorio(inputHorarioAtencionFin, labelErrorHorarioAtencionFin, "La hora de fin es obligatoria");
    const experienciaValida = validarCampoObligatorio(inputAniosExperiencia, labelErrorAniosExperienciaMedico, "Los años de experiencia son obligatorios");
    const biografiaValida = validarCampoObligatorio(inputBiografia, labelErrorBiografiaMedico, "La biografía es obligatoria");
    const nombresPacienteValidos = validarCampoObligatorio(inputNombresPaciente, labelErrorNombresPaciente, "Los nombres del paciente son obligatorios");
    const apellidosPacienteValidos = validarCampoObligatorio(inputApellidosPaciente, labelErrorApellidosPaciente, "Los apellidos del paciente son obligatorios");

    // Si todas las validaciones son correctas, se devuelve true y se puede enviar el formulario al servidor
    return nombresValidos && apellidosValidos && especialidadValida &&
        horarioInicioValido && horarioFinValido && experienciaValida && biografiaValida &&
        nombresPacienteValidos && apellidosPacienteValidos;
}

function validarCamposAlCambiarFoco() {
    //medico
    const inputNombresMedico = document.getElementById("nombresMedico");
    const inputApellidosMedico = document.getElementById("apellidosMedico");
    const inputGenero = document.getElementsByName("genero");
    const inputEspecialidad = document.getElementById("especialidadMedico");
    const inputHorarioAtencionInicio = document.getElementById("horarioAtencionInicio");
    const inputHorarioAtencionFin = document.getElementById("horarioAtencionFin");
    const inputAniosExperiencia = document.getElementById("aniosExperienciaMedico");
    const inputBiografia = document.getElementById("biografiaMedico");
   //paciente
    const inputNombresPaciente = document.getElementById("nombresPaciente");
    const inputApellidosPaciente = document.getElementById("apellidosPaciente");

    const labelErrorNombresMedico = document.getElementById("errorNombresMedico");
    const labelErrorApellidosMedico = document.getElementById("errorApellidosMedico");
    const labelErrorGeneroMedico = document.getElementById("errorGeneroMedico");
    const labelErrorEspecialidadMedico = document.getElementById("errorEspecialidadMedico");
    const labelErrorHorarioAtencionInicio = document.getElementById("errorHorarioAtencionInicio");
    const labelErrorHorarioAtencionFin = document.getElementById("errorHorarioAtencionFin");
    const labelErrorAniosExperienciaMedico = document.getElementById("errorAniosExperienciaMedico");
    const labelErrorBiografiaMedico = document.getElementById("errorBiografiaMedico");
    const labelErrorNombresPaciente = document.getElementById("errorNombresPaciente");
    const labelErrorApellidosPaciente = document.getElementById("errorApellidosPaciente");

    inputNombresMedico.addEventListener("blur", () => validarCampoObligatorio(
        inputNombresMedico,
        labelErrorNombresMedico,
        "Los nombres del médico son obligatorios"));

    inputApellidosMedico.addEventListener("blur", () => validarCampoObligatorio(
        inputApellidosMedico,
        labelErrorApellidosMedico,
        "Los apellidos del médico son obligatorios"));

    Array.from(inputGenero).forEach(input => input.addEventListener("blur", () => validarGenero(
        inputGenero,
        labelErrorGeneroMedico,
        "El género es obligatorio")));

    inputEspecialidad.addEventListener("blur", () => validarCampoObligatorio(
        inputEspecialidad,
        labelErrorEspecialidadMedico,
        "La especialidad es obligatoria"));

    inputHorarioAtencionInicio.addEventListener("blur", () => validarCampoObligatorio(
        inputHorarioAtencionInicio,
        labelErrorHorarioAtencionInicio,
        "La hora de inicio es obligatoria"));

    inputHorarioAtencionFin.addEventListener("blur", () => validarCampoObligatorio(
        inputHorarioAtencionFin,
        labelErrorHorarioAtencionFin,
        "La hora de fin es obligatoria"));

    const actualizarHorarioMedico = () => {
        validarHorarioMedico(
            inputHorarioAtencionInicio,
            inputHorarioAtencionFin,
            labelErrorHorarioAtencionFin,
            "La hora de fin no puede ser menor que la hora de inicio");
        document.getElementById("btnAgregarMedico").disabled =
            !document.getElementById("formMedico").checkValidity();
    };

    inputHorarioAtencionInicio.addEventListener("input", actualizarHorarioMedico);
    inputHorarioAtencionInicio.addEventListener("change", actualizarHorarioMedico);
    inputHorarioAtencionInicio.addEventListener("blur", actualizarHorarioMedico);
    inputHorarioAtencionFin.addEventListener("input", actualizarHorarioMedico);
    inputHorarioAtencionFin.addEventListener("change", actualizarHorarioMedico);
    inputHorarioAtencionFin.addEventListener("blur", actualizarHorarioMedico);

    inputAniosExperiencia.addEventListener("blur", () => validarCampoObligatorio(
        inputAniosExperiencia,
        labelErrorAniosExperienciaMedico,
        "Los años de experiencia son obligatorios"));

    inputBiografia.addEventListener("blur", () => validarCampoObligatorio(
        inputBiografia,
        labelErrorBiografiaMedico,
        "La biografía es obligatoria"));

    inputNombresPaciente.addEventListener("blur", () => validarCampoObligatorio(
        inputNombresPaciente,
        labelErrorNombresPaciente,
        "Los nombres del paciente son obligatorios"));

    inputApellidosPaciente.addEventListener("blur", () => validarCampoObligatorio(
        inputApellidosPaciente,
        labelErrorApellidosPaciente,
        "Los apellidos del paciente son obligatorios"));
}

document.addEventListener("DOMContentLoaded", validarCamposAlCambiarFoco);