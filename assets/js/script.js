//Declaración de clases
//cómo se identifica una propiedad aqui, nombrePropietario vs la que se hereda
class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        //datos es un objeto privado, osea que todo lo que esté dentro del objeto también es privado?
        // this._datos = {
        //     _nombre: nombrePropietario,
        //     _direccion: direccion,
        //     _telefono: telefono
        // };
        this._nombre = nombrePropietario;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get nombreDueno(){
        return this._nombre;
    };
    get direccion(){
        return this._direccion;
    };
    get telefono(){
        return this._telefono;
    };

    // objeto que retorna datos propietario
    // get datosPropietario() {
    //     return {
    //         nombre: this.nombreDueno(),
    //         direcion: this.direccion(),
    //         telefono: this.telefono()
    // }}
}

class Animal extends Propietario { 

    constructor(tipo, nombrePropietario,direccion,telefono) {
        super(nombrePropietario,direccion,telefono) //siempre hay que poner el super
        this._tipo = tipo;
    }

    // 3. Crear un método get para la clase Animal de la propiedad tipo para retornar el mensahje “Eltipo de animal es un: ${this.tipo}”. (2 Puntos) 
    //getter para obtener el tipo privado
    get tipoAnimal() {
        // this._tipo = tipo;
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {

    constructor(nombreMascota,tipo,nombrePropietario,direccion,telefono) {
        super(tipo,nombrePropietario,direccion,telefono)
        this._nombreM = nombreMascota;
    }

    // 2. Crear los métodos get y set para la clase de mascota. (2 Puntos) 
    get nombreMascota() {
        return this._nombreM;
    }
    set nombreMascota(nuevo_nombre) {
        this._nombreM = nuevo_nombre;
    }
    //hereda metodo de datosPropietario
    //hereda metodo de tipoAnimal
}

//perros, gatos o conejos,
// Propietario, Animal y Mascota en ese orden son las clases del desafio opcional, y el desafio opcional mezcla JavaScript con html
// Animal hereda completo a Propietario y Mascota hereda completo a Animal

// 5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse “Perro”. (1 Puntos) 

const duenoInput = document.getElementById('propietario'); //propietario
const telefonoInput = document.getElementById('telefono'); //propietario
const direccionInput = document.getElementById('direccion'); //propietario
const nombreMascotaInput = document.getElementById('nombreMascota'); // mascota 
const tipoInputSelect = document.getElementById('tipo'); //mascota
const consultaInput = document.getElementById('enfermedad'); //mascota
const btnAgregar = document.querySelector('.btn'); // boton agregar
const espacioResultado = document.getElementById('resultado'); // caja resultado

//capturar el valor seleccionado
tipoInputSelect.addEventListener('change', () => {
    // console.log(typeof (tipoInputSelect.value))
    //aqui llamar a la funcion que instancia segun tipo animal y pasarle el argumento del select
    // instanciarMascota(nombreMascotaInput.value,tipoInputSelect.value,duenoInput.value, direccionInput.value, telefonoInput.value)
});

//agregar mascota al click del btnAgregar

btnAgregar.addEventListener('click', (e) => { //si le pongo el submit no va a pescar console.lo, porque el preventdefault hace q no ocurra el submit
    e.preventDefault();
    // console.log('click')
    let mascota = instanciarMascota(nombreMascotaInput.value,tipoInputSelect.value,duenoInput.value, direccionInput.value, telefonoInput.value)
    //llamar a funcion que imprime los datos:
    imprimirDatos(mascota,nombreMascotaInput.value,tipoInputSelect.value,duenoInput.value, direccionInput.value, telefonoInput.value, consultaInput.value);
});

//instanciar propietario antes
 
//Función que instancia según select
//funcion constructora
// tipo,nombreMascota,nombrePropietario,direccion,telefono

function instanciarMascota(tipo,nombreMascota,nombrePropietario,direccion,telefono) {
    // tipo,nombreMascota,nombrePropietario,direccion,telefono
    let mascota = new Mascota(tipo,nombreMascota,nombrePropietario,direccion,telefono);
    // console.log('Mascota instanciada:',mascota)
    return mascota;
}

//funcion que imprime los datos 

function imprimirDatos(mascota,nombreMascota,tipo,nombrePropietario,direccion,telefono, enfermedad){
    const datos =`
    <ul>
    <li>
      El nombre del dueño es: ${nombrePropietario}. El domicilio es: ${direccion}, y el número telefónico de contacto: ${telefono}
    </li>
    <li>
      ${mascota.tipoAnimal}, mientras que el nombre de la mascota es: ${nombreMascota} y la enfermedad es: ${enfermedad}
    </li>
  </ul> 
  `
  espacioResultado.innerHTML = datos;
}
