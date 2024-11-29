// JavaScript Document
// Imagenes a cargar en anuncios
const images = [
	{ src: 'img/anuncios/1.JPG', description: '' },
	{ src: 'img/anuncios/2.JPG', description: '' },
	{ src: 'img/anuncios/3.JPG', description: 'Para leer más,  haga clic aquí 👉 El comité paritario de seguridad y salud en el trabajo (COPASST)es un comité, dentro de las empresas privadas o públicas,encargado de vigilar y promover las normas relacionadas con lostemas de seguridad y salud en el trabajo. (Resolución 2013 de 1986) 👈' },
	{ src: 'img/anuncios/4.JPG', description: '' },
	{ src: 'img/anuncios/5.JPG', description: 'EXPLORACIÓN ESTRUCTURA PRUEBA SABER 11. Clic en el enlace 👇' },
	{ src: 'img/anuncios/6.JPG', description: 'Decreto por medio del cual se reglamenta la participación de las familias en los procesos educativos de los establecimientos educativos oficiales y no oficiales , de educación preescolar, básica y media para promover el desarrollo integral de niñas, niños y adolescentes. Clic en el enlace 👇' },
	{ src: 'img/anuncios/7.JPG', description: 'PORFI-PICNIC' },
	{ src: 'img/anuncios/8.JPG', description: 'Cronograma del concurso de ortografía del área de humanidades.' },
	{ src: 'img/anuncios/9.JPG', description: 'Correo @educacionbogota.edu.co Grados 10° y 11°' },
	{ src: 'img/anuncios/10.GIF', description: 'GRAN MADRUGÓNROPERO PORFIRENSE Febrero 14 de 2024 Hora: 7:00 am - 9:00 am Prendas desde $5000 Hasta agotar existencias.' },
	{ src: 'img/anuncios/11.GIF', description: 'GRAN MADRUGÓNROPERO PORFIRENSE Febrero 14 de 2024 Hora: 7:00 am - 9:00 am Prendas desde $5000 Hasta agotar existencias.' },
	{ src: 'img/anuncios/12.GIF', description: 'Hoja de matricula 2024 Hoja de matricula 2024' },
	{ src: 'img/anuncios/13.GIF', description: 'SpellingBee The Winners' },
	{ src: 'img/anuncios/14.GIF', description: 'ASTRONOMIA Clic en el enlace:' },
	{ src: 'img/anuncios/15.GIF', description: 'Orgullo Porfirense Espacio que nos hace más Porfirenses' },
	{ src: 'img/anuncios/16.JPG', description: 'APP MUVI Solo para estudiantes de grado 10° y 11°. ' },
	{ src: 'img/anuncios/17.GIF', description: 'ENCUESTA TIENDA ESCOLAR' },
	{ src: 'img/anuncios/18.JPG', description: 'Carné de Vacunas CLICK EN EL ENLACE PARA LLENAR EL FORMULARIO DE ACTUALIZACIÓN' },
	{ src: 'img/anuncios/19.GIF', description: 'SPELLING BEE 2023 SPELLING BEE 2023' },
	{ src: 'img/anuncios/20.GIF', description: 'Primer concurso de ortografía porfirense. ✍️ ¡PRUEBA TUS HABILIDADES ORTOGRÁFICAS! Nuestro colegio dio apertura al PRIMER CONCURSO DE ORTOGRAFÍA PORFIRENSE, organizado por el área de humanidades, donde participarán no solo los estudiantes de nuestra institución, sino que también están invitadas las instituciones educativas del sector oficial de nuestra localidad séptima de Bosa. Este se llevará a cabo del 20 de febrero al 4 de mayo del presente año y está dividido en las siguientes categorías: CATEGORIA A:    3°, 4° y 5° (Primaria) CATEGORÍA B:    6°, 7° y 8°. CATEGORIA C:    9°, 10° y 11°. ¡Te invitamos a prepararte y participar! ✍️ ' },
	{ src: 'img/anuncios/21.GIF', description: '' },
	{ src: 'img/anuncios/22.GIF', description: 'Rendición de cuentas año 2022 INVITACIÓN A LA AUDIENCIA PUBLICA DE RENDICIÓN DE CUENTAS E INFORME DE GESTIÓN AÑO 2022 DEL COLEGIO PORFIRIO BARBA JACOB Fecha: Viernes 24 de febrero Hora: 10:00 am Lugar. Aula Audiovisuales- Instalaciones del Colegio Porfirio Barba Jacob. CARLOS ORLANDO RAMIREZ M. Rector' },
	{ src: 'img/anuncios/23.GIF', description: '¿Por qué es importante presentar el examen Saber 11? Jornada mañana: 7:30 a.m. a 9:30 a.m., a través del siguiente enlace: https://acortar.link/Ht1MEA Jornada tarde: 2:30 p.m. a 4:30 p.m., a través del siguiente enlace: https://acortar.link/FVCykD  ' },
	{ src: 'img/anuncios/24.GIF', description: 'Invitación Educación Especial Cordial saludo Invitamos a los padres o acudientes de los estudiantes con discapacidad a participar en nuestra primera reunión con el equipo de inclusión y coordinación, el día viernes 10 de febrero de 2023 a las 9:00 am en sala de profesores. Agradecemos su participación.' },
	{ src: 'img/anuncios/25.GIF', description: 'Convocatoria Tienda Escolar 2023 Convocatoria Tienda Escolar 2023' },
	{ src: 'img/anuncios/26.GIF', description: 'cupos transición cupos transición' },
	{ src: 'img/anuncios/27.GIF', description: 'Ingreso 2023 Ingreso 2023' },
];

const galleryContainer = document.getElementById('galleryContainer');

// Genera la galería de imágenes
function generateGallery() {
  images.forEach((image, count) => {
	const galleryItem = document.createElement('div');
	galleryItem.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'gallery-item');
	galleryItem.innerHTML = `
	  <img src="${image.src}" alt="${image.description}" onclick="openModal(${count})">
	`;
	galleryContainer.appendChild(galleryItem);
  });
}

// Abre el modal con la imagen y descripción
function openModal(imageNumber) {
  document.getElementById('modalImage').src = images[imageNumber].src;
  document.getElementById('modalDescription').textContent = images[imageNumber].description;
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

// Ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', generateGallery);
