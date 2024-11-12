// JavaScript Document
// Imagenes del carrusel
const images = [
  { src: 'img/anuncios/1.JPG', description: 'Hola Mundo' },
  { src: 'img/anuncios/2.JPG', description: 'Descripción de la imagen 2' },
  { src: 'img/anuncios/3.JPG', description: 'Descripción de la imagen 3' },
  { src: 'img/anuncios/4.JPG', description: 'Descripción de la imagen 4' },
  { src: 'img/anuncios/5.JPG', description: 'Descripción de la imagen 5' },
  { src: 'img/anuncios/6.JPG', description: 'Descripción de la imagen 6' },
];

const carouselImagesContainer = document.getElementById('carouselImagesContainer');

// Genera los slides
function generateCarouselSlides() {
  let slides = '';
  for (let i = 0; i < images.length; i += 2) {
	slides += `
	  <div class="carousel-item ${i === 0 ? 'active' : ''}">
		<div class="row">
		  <div class="col-6">
			<img src="${images[i].src}" class="d-block w-100" alt="${images[i].description}" onclick="openModal(${i})">
		  </div>
		  ${images[i + 1] ? `<div class="col-6"><img src="${images[i + 1].src}" class="d-block w-100" alt="${images[i + 1].description}" onclick="openModal(${i + 1})"></div>` : ''}
		</div>
	  </div>
	`;
  }
  carouselImagesContainer.innerHTML = slides;
}

// Abre el modal con la imagen y descripción
function openModal(imageNumber) {
  document.getElementById('modalImage').src = images[imageNumber].src;
  document.getElementById('modalDescription').textContent = images[imageNumber].description;
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

// Ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', generateCarouselSlides);
