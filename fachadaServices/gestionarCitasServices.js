class GestionarCitas {
  constructor(medicoRepo, pacienteRepo, citaRepo) {
    this.medicoRepo = medicoRepo;
    this.pacienteRepo = pacienteRepo;
    this.citaRepo = citaRepo;
  }
  registrarCita(fecha, horaInicio, horaFin, idMedico, idPaciente) {
    const id = this.citaRepo.siguienteId();
    const medico = this.medicoRepo.buscarPorId(idMedico);
    if (!medico) {
      throw new Error("Médico no encontrado");
    }

    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) {
      throw new Error("Paciente no encontrado");
    }

    if (horaInicio < medico.horarioAtencion[0] || horaFin > medico.horarioAtencion[1]) {
      throw new Error("La cita está fuera del horario de atención del médico");
    }

    const cita = new Cita(id, fecha, horaInicio, horaFin, medico, paciente);
    this.citaRepo.agregar(cita);
    return cita;
  }

  listarCitas() {
    return this.citaRepo.obtenerTodos();
  }

  buscarCita(id) {
    return this.citaRepo.buscarPorId(id);
  }
}
const gestionarCitas = new GestionarCitas(medicoRepo, pacienteRepo, citaRepo);
