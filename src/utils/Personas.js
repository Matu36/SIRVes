export const personas = [
  {
    id: 1,
    tipo: "usuario",
    nombre: "Juan Pérez",
    documento: "30567890",
    tipoDocumento: "dni",
    fechaNacimiento: "1990-05-15",
    domicilio: "Av. Siempre Viva 742",
    telefono: "1123456789",
    genero: "Masculino",
    email: "juan.perez@example.com",
    discapacidad: "No",
    coberturaSocial: "OSDE",
    reclamo: {
      id: 1,
      tipo: "Cobertura médica",
      descripcion: "Problema con la autorización de una cirugía",
      estado: "Pendiente",
      fechaReclamo: "2024-02-15",
      expGEDEBA: "12345",
      vincReportante: "jefe",
      fechaSituacion: "12/12/1985",
      tipoReporte: 1,
      intervenciones: [
        {
          id: 1,
          idReporte: 1,
          nroAbordaje: "001",
          nroInternoSecuencial: "A1",
          tipoAbordaje: "Llamado telefónico",
          fechaAbordaje: "2024-02-16",
          accionRecomendada: "Esperar confirmación médica",
          tipoSituacion: "Evaluación inicial",
          descripcionAbordaje:
            "Se contactó con el afiliado para pedir más detalles",
          usuario: "admin",
          informeAdjunto: null,
        },
      ],
    },
  },
  {
    id: 2,
    tipo: "trabajador",
    nombre: "juan González",
    tipoDocumento: "PASAPORTE",
    documento: "28456789",
    fechaNacimiento: "1985-10-23",
    domicilio: "Calle Falsa 123",
    telefono: "1134567890",
    genero: "Femenino",
    email: "maria.gonzalez@example.com",
    discapacidad: "No",
    coberturaSocial: "Swiss Medical",
    lugarTrabajo: "Hospital Central",
    agrupamiento: "Administrativo",
    contratacion: "Planta Permanente",
    disciplina: "Enfermería",
    observaciones: "Turno nocturno",
    reclamo: {
      id: 2,
      tipo: "Condiciones laborales",
      tipoReporte: 2,
      descripcion: "Solicita revisión de turnos nocturnos excesivos",
      estado: "En proceso",
      fechaReclamo: "2024-01-10",
      expGEDEBA: "12345EWEWEWE",
      vincReportante: "compañeros",
      fechaSituacion: "1985/12/03",
      jerarquia: "Superior",
      intervenciones: [
        {
          id: 2,
          idReporte: 1,
          nroAbordaje: "002",
          nroInternoSecuencial: "B2",
          tipoAbordaje: "Reunión con supervisor",
          fechaAbordaje: "2024-01-15",
          accionRecomendada: "Revisar rotación de turnos",
          tipoSituacion: "Revisión en curso",
          descripcionAbordaje: "Se informó la situación al área de RRHH",
          usuario: "gestor1",
          informeAdjunto: null,
        },
      ],
    },
  },
  {
    id: 3,
    tipo: "usuario",
    nombre: "Carlos López",
    documento: "32987654",
    fechaNacimiento: "1995-08-12",
    domicilio: "San Martín 456",
    telefono: "1145678901",
    genero: "Masculino",
    email: "carlos.lopez@example.com",
    discapacidad: "Sí",
    coberturaSocial: "PAMI",
    reclamo: {
      id: 3,
      tipo: "Atención médica",
      descripcion: "Falta de atención prioritaria para discapacitados",
      estado: "Resuelto",
      fechaReclamo: "2023-12-20",
      fechaSituacion: "03/07/1985",
      tipoReporte: 3,
      intervenciones: [
        {
          id: 3,
          nroAbordaje: "003",
          nroInternoSecuencial: "C3",
          tipoAbordaje: "Presencial",
          fechaAbordaje: "2023-12-21",
          accionRecomendada: "Brindar prioridad en atención",
          tipoSituacion: "Caso cerrado",
          descripcionAbordaje: "Se garantizó atención preferente",
          usuario: "coordinador1",
          informeAdjunto: null,
        },
      ],
    },
  },
  {
    id: 4,
    tipo: "trabajador",
    nombre: "Ana Fernández",
    documento: "27345678",
    fechaNacimiento: "1980-03-05",
    domicilio: "Belgrano 789",
    telefono: "1156789012",
    genero: "Femenino",
    email: "ana.fernandez@example.com",
    discapacidad: "No",
    coberturaSocial: "IOMA",
    lugarTrabajo: "Clínica Privada Norte",
    agrupamiento: "Médico",
    contratacion: "Monotributista",
    disciplina: "Cardiología",
    observaciones: "Especialista en urgencias",
  },
  {
    id: 5,
    tipo: "usuario",
    nombre: "Sofía Ramírez",
    documento: "31876543",
    fechaNacimiento: "2000-07-20",
    domicilio: "Rivadavia 1020",
    telefono: "1167890123",
    genero: "Femenino",
    email: "sofia.ramirez@example.com",
    discapacidad: "No",
    coberturaSocial: "Medicus",
  },
  {
    id: 6,
    tipo: "trabajador",
    nombre: "Gustavo Peralta",
    documento: "26678901",
    fechaNacimiento: "1975-06-30",
    domicilio: "Mitre 150",
    telefono: "1178901234",
    genero: "Masculino",
    email: "gustavo.peralta@example.com",
    discapacidad: "No",
    coberturaSocial: "OSDE",
    lugarTrabajo: "Sanatorio Sur",
    agrupamiento: "Técnico",
    contratacion: "Contratado",
    disciplina: "Radiología",
    observaciones: "Especialista en resonancias",
  },
  {
    id: 7,
    tipo: "usuario",
    nombre: "Lucas Benítez",
    documento: "33123456",
    fechaNacimiento: "1998-09-14",
    domicilio: "Sarmiento 300",
    telefono: "1189012345",
    genero: "Masculino",
    email: "lucas.benitez@example.com",
    discapacidad: "Sí",
    coberturaSocial: "PAMI",
  },
  {
    id: 8,
    tipo: "trabajador",
    nombre: "Verónica Díaz",
    documento: "25567890",
    fechaNacimiento: "1970-11-10",
    domicilio: "Entre Ríos 450",
    telefono: "1190123456",
    genero: "Femenino",
    email: "veronica.diaz@example.com",
    discapacidad: "No",
    coberturaSocial: "IOMA",
    lugarTrabajo: "Hospital del Norte",
    agrupamiento: "Médico",
    contratacion: "Residente",
    disciplina: "Pediatría",
    observaciones: "Turnos de 12 horas",
  },
  {
    id: 9,
    tipo: "usuario",
    nombre: "Fernando Castro",
    documento: "34234567",
    fechaNacimiento: "2002-01-25",
    domicilio: "Corrientes 750",
    telefono: "1201234567",
    genero: "Masculino",
    email: "fernando.castro@example.com",
    discapacidad: "No",
    coberturaSocial: "Medife",
  },
  {
    id: 10,
    tipo: "trabajador",
    nombre: "Patricia Muñoz",
    documento: "24567890",
    fechaNacimiento: "1965-04-18",
    domicilio: "Santa Fe 999",
    telefono: "1212345678",
    genero: "Femenino",
    email: "patricia.munoz@example.com",
    discapacidad: "No",
    coberturaSocial: "Swiss Medical",
    lugarTrabajo: "Hospital General",
    agrupamiento: "Administrativo",
    contratacion: "Planta Permanente",
    disciplina: "Gestión Hospitalaria",
    observaciones: "Encargada de recursos humanos",
  },
];
