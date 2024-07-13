const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let diaActual;
let numeroDiaActual;
let mesActual;
let anioActual;
let h;
let m;
let s;

const concatenar = i => i < 10 ? "0" + i : i;

const comenzarReloj = () => {
  //fecha
  const date = new Date();
  const datosFecha = date.toDateString().split(' ');
  
  diaActual = dias[date.getDay()];
  numeroDiaActual = datosFecha[2];
  mesActual = meses[date.getMonth()];
  anioActual = date.getFullYear();

  //hora
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();

  h = concatenar(h);
  m = concatenar(m);
  s = concatenar(s);
}

const mostrarReloj = () => {
  h2.innerHTML = `<div class="d-flex gap-2">
                    <h3 class="display-1 fw-bold">${h} :</h3>
                    <h3 class="display-1 fw-bold">${m} :</h3>
                    <h3 class="display-1 fw-bold">${s}</h3>
                  </div>`
  h3.textContent = `${diaActual} ${numeroDiaActual} de ${mesActual} de ${anioActual}`;
}

setInterval(() => {
  comenzarReloj();
  mostrarReloj();
}, 1000);


//Segunda solución

/*let horaActual = [];

setInterval(() => {
  const date = new Date();
  const datosFecha = date.toDateString().split(' ');
  
  diaActual = dias[date.getDay()];
  numeroDiaActual = datosFecha[2];
  mesActual = meses[date.getMonth()];
  anioActual = date.getFullYear();

  horaActual = date.toTimeString().split(" ")[0].split(":");
  h2.innerHTML = `<div class="d-flex gap-2">
                    <h3 class="display-1 fw-bold">${horaActual[0]} :</h3>
                    <h3 class="display-1 fw-bold">${horaActual[1]} :</h3>
                    <h3 class="display-1 fw-bold">${horaActual[2]}</h3>
                  </div>`
  h3.textContent = `${diaActual} ${numeroDiaActual} de ${mesActual} de ${anioActual}`;

}, 1000);

*/