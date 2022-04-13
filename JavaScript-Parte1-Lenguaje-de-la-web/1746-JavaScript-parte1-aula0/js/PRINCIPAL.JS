/* var paciente = document.querySelector("#primer-paciente"); 

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);

var imc = peso /(altura * altura )//100 / 2 * 2 = 100 /4 = 25
console.log(imc);

 */

var cuartoPaciente = document.querySelector("#cuarto-paciente");

var nombreCuartoPaciente = cuartoPaciente.querySelector(".info-nombre");

var nombrecuatro = nombreCuartoPaciente.textContent;

console.log(cuartoPaciente);
console.log(nombreCuartoPaciente);

console.log(nombrecuatro);

/* 
var peso = cuartoPaciente.querySelector(".info-peso");

var altura = cuartoPaciente.querySelector(".info-altura");

var gordura = cuartoPaciente.querySelector(".info-gordura");

var datoPeso = peso.textContent;

var datoAltura = altura.textContent;
 
var datoGordura = gordura.textContent;

console.log(datoPeso);
console.log(datoAltura);
console.log(datoGordura);


var sumatoria = (datoPeso  + datoAltura + datoGordura)
  console.log(sumatoria)
 */
  

  var pesoCuartoPaciente = cuartoPaciente.querySelector(".info-peso");

  var pesocuatro = pesoCuartoPaciente.textContent;

  
  var alturaCuartoPaciente = cuartoPaciente.querySelector(".info-altura");

  var alturacuatro = alturaCuartoPaciente.textContent;

  
  var gorduraCuartoPaciente = cuartoPaciente.querySelector(".info-gordura");

  var gorduracuatro = gorduraCuartoPaciente.textContent;

  var cuartoPaciente = document.querySelector("#cuarto-paciente");

var quintoN = document.querySelector("#quinto-paciente").querySelector(".info-nombre").textContent;
console.log(quintoN);
gorduraCuartoPaciente.textContent = "aca va el gordo";



var imcCuartoPaciente = cuartoPaciente.querySelector(".info-imc");

imcCuartoPaciente.textContent = pesocuatro /(alturacuatro * alturacuatro );





var primerPaciente = document.querySelector("#primer-paciente");

var nombreprimerPaciente = primerPaciente.querySelector(".info-nombre");

var nombreprimer = nombreprimerPaciente.textContent;


var pesoprimerPaciente = primerPaciente.querySelector(".info-peso");

var pesoprimer = pesoprimerPaciente.textContent;


var alturaprimerPaciente = primerPaciente.querySelector(".info-altura");

var alturaprimer = alturaprimerPaciente.textContent;


var imcprimerPaciente = primerPaciente.querySelector(".info-imc");

imcprimerPaciente.textContent = pesoprimer /(alturaprimer * alturaprimer );




