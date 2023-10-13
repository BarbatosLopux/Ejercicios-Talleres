const campus = {
    sedes: {
      Bucaramanga: {
        contacto: {
          telefono: '123-456-7890',
          direccion: '123 Calle Principal, Bucaramanga',
        },
      },
      Bogota: {
        contacto: {
          telefono: '456-789-0123',
          direccion: '456 Calle Principal, Bogotá',
        },
      },
      Medellin: {
        contacto: {
          telefono: '789-012-3456',
          direccion: '789 Calle Principal, Medellín',
        },
      },
      Mexico: {
        contacto: {
          telefono: '345-678-9012',
          direccion: '345 Calle Principal, México',
        },
      },
    },
    trainers: [
      {
        nombre: 'Trainer1',
        telefono: '111-111-1111',
        teams: [
          {
            dia: 'Lunes',
            hora: '9:00 AM',
            salon: '101A',
          },
          {
            dia: 'Miércoles',
            hora: '2:00 PM',
            salon: '201B',
          },
        ],
        email: 'trainer1@example.com',
      },
      // Otros trainers aquí
    ],
    campers: [
      {
        nombre: 'Camper1',
        telefono: '222-222-2222',
        teams: [
          {
            dia: 'Martes',
            hora: '11:00 AM',
            salon: '102A',
          },
        ],
        horarioIngles: 'Jueves, 3:00 PM',
        barrio: 'Barrio1',
        transporte: 'Transporte1',
      },
      // Otros campers aquí
    ],
    niveles: [
      {
        nombre: 'Nivel1',
        prerequisito: 'Ninguno',
        tecnologia: 'Tecnologia1',
        obligatoria: true,
      },
      // Otros niveles aquí
    ],
    roadMap: {
      numeroCreditos: 120,
      anio: 2023,
      numeroAsignaturas: 24,
    },
  };
  
  // Consultas utilizando destructuring
  const { trainers, campers, sedes, niveles, roadMap } = campus;
  
  // 2.1
  const asignaturaRemotaPresencial = trainers.map((trainer) => {
    return {
      nombre: trainer.nombre,
      asignaturaRemota: trainer.teams.every((team) => team.salon.includes('Remoto')),
    };
  });
  console.log(asignaturaRemotaPresencial);
  
  // 2.2
  const telefonoMedellin = sedes.Medellin.contacto.telefono;
  const direccionBucaramanga = sedes.Bucaramanga.contacto.direccion;
  console.log('Teléfono Medellín:', telefonoMedellin);
  console.log('Dirección Bucaramanga:', direccionBucaramanga);
  
  // 2.3
  const tieneSandbox = niveles.find((nivel) => nivel.tecnologia === 'Tecnologia1').sandbox || false;
  console.log('Tiene sandbox:', tieneSandbox);
  
  // Consultas utilizando sintaxis de punto
  // 3.1
  const prerequisitoAsignatura = niveles.find((nivel) => nivel.tecnologia === 'Tecnologia1').prerequisito;
  console.log('Prerequisito de Tecnologia1:', prerequisitoAsignatura);
  const numeroCreditosRoadmap = roadMap.numeroCreditos;
  console.log('Número de créditos del Roadmap:', numeroCreditosRoadmap);
  
  // 3.2
  const nuevoCampus = {
    sedeNueva: {
      contacto: {
        telefono: '999-999-9999',
        direccion: '999 Calle Nueva, Ciudad Nueva',
      },
    },
    nuevoTrainer: {
      nombre: 'Trainer2',
      telefono: '333-333-3333',
      teams: [
        {
          dia: 'Viernes',
          hora: '10:00 AM',
          salon: '301A',
        },
      ],
      email: 'trainer2@example.com',
    },
    nuevoCamper: {
      nombre: 'Camper2',
      telefono: '444-444-4444',
      teams: [
        {
          dia: 'Sábado',
          hora: '2:00 PM',
          salon: '202A',
        },
      ],
      horarioIngles: 'Domingo, 1:00 PM',
      barrio: 'Barrio2',
      transporte: 'Transporte2',
    },
    nuevoNivel: {
      nombre: 'Nivel2',
      prerequisito: 'Nivel1',
      tecnologia: 'Tecnologia2',
      obligatoria: false,
    },
    nuevoRoadMap: {
      numeroCreditos: 150,
      anio: 2024,
      numeroAsignaturas: 30,
    },
  };
  
  campus.nuevaSede = nuevoCampus.sedeNueva;
  campus.trainers.push(nuevoCampus.nuevoTrainer);
  campus.campers.push(nuevoCampus.nuevoCamper);
  campus.niveles.push(nuevoCampus.nuevoNivel);
  campus.roadMap = nuevoCampus.nuevoRoadMap;
  
  console.log(campus);
  