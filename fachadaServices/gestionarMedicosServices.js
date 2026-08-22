class GestionarMedicos {
  constructor(repoMedico) {
    this.repoMedico = repoMedico;
  }
  //Acá es nomas agregar los atributos que se agregaron en la entidad Medico, para que se puedan meter los nuevios atributos 
  registrarMedico(nombre, apellido,especialidad, horarioAtencionInicio, horarioAtencionFin, aniosExperiencia, biografia) {
    const id = this.repoMedico.siguienteId();
    const medico = new Medico(id, nombre, apellido, especialidad, horarioAtencionInicio, horarioAtencionFin, aniosExperiencia, biografia);
    this.repoMedico.agregar(medico);
    return medico;
  }

  listarMedicos() {
    return this.repoMedico.obtenerTodos();
  }

  buscarMedico(id) {
    return this.repoMedico.buscarPorId(id);
  }
}

const gestionarMedicos = new GestionarMedicos(medicoRepo);

