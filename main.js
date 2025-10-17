console.log("hola mundo");

//Crear un programa que identifique cuantos multiplos de tres, hay en un rango del 0 al 100. Y que los imprima en consola

// let contador = 0;

// console.log("Multiplos de 3 entre 0 y 100");

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//         contador++;
//     }
// }

// console.log("los numeros totales de multiplos entre 0 y 100 son:",contador);




import os from "os";

console.log(os);

//Este sirve para ver el almacenamiento restante en el equipo.
const memory = (os.freemem/1024)

console.log(memory / 1024);

//Este sirve para ver la arquitectura actual del equipo (32 o 64).
console.log(os.arch());

//Estos son los nucleos de la maquina.
console.log (os.availableParallelism());

//Sirve para checar los picos de velocidad de la CPU.
console.log(os.cpus());

//Devuelve la prioridad de planificacion del sistema operativo para un proceso dado.
console.log(os.getPriority())

//Devuelve el nombre del host.
console.log(os.hostname());

//Esto devuelve la cantidad de GPU usado por aplicaciones de alta demanda (en segundo plano).
console.log(os.loadavg());

//Muesta datos sobre las redes del equipo.
console.log(os.networkInterfaces());

//Muestra la plataforma principal donde se almacena Windows.
console.log(os.platform());

//Devuelve la versión del sistema operativo.
console.log(os.release());

//¿?
//console.log(os.setPriority(pid,0));

//Devuelve el directorio predeterminado para archivos temporales del sistema operativo. 
console.log(os.tmpdir());

//Devuelve la cantidad total de memoria del sistema en bytes.
console.log(os.totalmem());

// Identifica el sistema operativo. Por ejemplo: 'Linux', 'Darwin' (para macOS), o 'Windows_NT'. 
console.log(os.type());

// Devuelve información sobre el usuario actual del sistema. 
console.log(os.userInfo());

// Devuelve el tiempo que el sistema ha estado encendido, en segundos. 
console.log(os.uptime());

// Devuelve la versión del kernel del sistema operativo. 
console.log(os.version());

// Devuelve la arquitectura de la máquina, como 'x86_64' o 'arm64'. 
console.log(os.machine());
