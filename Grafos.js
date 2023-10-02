class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  class Ciudad {
    constructor(nombre) {
      this.nombre = nombre;
      this.habitantes = new Set();
    }
  
    agregarHabitante(persona) {
      this.habitantes.add(persona);
    }
  }
  
  class Grafo {
    constructor() {
      this.ciudades = new Map();
    }
  
    agregarPersonaACiudad(nombrePersona, edadPersona, nombreCiudad) {
      let ciudad = this.ciudades.get(nombreCiudad);
      if (!ciudad) {
        ciudad = new Ciudad(nombreCiudad);
        this.ciudades.set(nombreCiudad, ciudad);
      }
      const persona = new Persona(nombrePersona, edadPersona);
      ciudad.agregarHabitante(persona);
    }
  
    imprimirPersonasPorCiudad(nombreCiudad) {
      const ciudad = this.ciudades.get(nombreCiudad);
      if (!ciudad) {
        console.log(`La ciudad ${nombreCiudad} no existe.`);
        return;
      }
      if (ciudad.habitantes.size === 0) {
        console.log(`Nadie vive en ${nombreCiudad}.`);
        return;
      }
      console.log(`Personas que viven en ${nombreCiudad}:`);
      ciudad.habitantes.forEach(persona => {
        console.log(`${persona.nombre}, Edad: ${persona.edad}`);
      });
    }
  }
  
  // Uso:
  const grafo = new Grafo();
  grafo.agregarPersonaACiudad('Alicia', 25, 'Nueva York');
  grafo.agregarPersonaACiudad('Bob', 30, 'Londres');
  grafo.agregarPersonaACiudad('Carlos', 35, 'Nueva York');
  grafo.imprimirPersonasPorCiudad('Nueva York');