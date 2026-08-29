class Medico {
  constructor(id, nombres, apellidos, genero, especialidad, horarioAtencionInicio, horarioAtencionFin, aniosExperiencia, biografia) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.genero = genero;
    this.especialidad = especialidad;
    /* aunque esta vuelta pide 1 atributo , si quiero comparar el rango necesito 2 , la de inicio y la de fin*/
    this.horarioAtencion = [horarioAtencionInicio, horarioAtencionFin];
    this.aniosExperiencia = aniosExperiencia;
    this.biografia = biografia;

  }
}



