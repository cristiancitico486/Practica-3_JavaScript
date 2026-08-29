const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

// habilita/deshabilita el botón según la validez del formulario
formMedico.addEventListener("input", () => {
  btnAgregarMedico.disabled =! formMedico.checkValidity();
});

formMedico.addEventListener("change", () => {
  btnAgregarMedico.disabled = !formMedico.checkValidity();
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombres = document.getElementById("nombresMedico").value;
  const apellidos = document.getElementById("apellidosMedico").value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const especialidad = document.getElementById("especialidadMedico").value;
  const horarioAtencionInicio = document.getElementById("horarioAtencionInicio").value;
  const horarioAtencionFin = document.getElementById("horarioAtencionFin").value;
  const aniosExperiencia = document.getElementById("aniosExperienciaMedico").value;
  const biografia = document.getElementById("biografiaMedico").value;

  const medico = gestionarMedicos.registrarMedico(
    nombres,
    apellidos,
    genero,
    especialidad,
    horarioAtencionInicio,
    horarioAtencionFin,
    aniosExperiencia,
    biografia
  );

  // actualizar select
  const option = document.createElement ("option");
  option.value = medico.id;
  option.textContent = `${medico.nombres} ${medico.apellidos}`;
  medicoSelect.appendChild(option);

  formMedico.reset();
  btnAgregarMedico.disabled = true;

  mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
  });

