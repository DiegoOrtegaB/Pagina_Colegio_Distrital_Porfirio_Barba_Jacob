// JavaScript Document
// Imagenes a cargar en anuncios
const images = [
  { src: 'img/anuncios/1.JPG', description: 'Descripción de la imagen 1' },
  { src: 'img/anuncios/2.JPG', description: 'Descripción de la imagen 2' },
  { src: 'img/anuncios/3.JPG', description: 'Descripción de la imagen 3' },
  { src: 'img/anuncios/4.JPG', description: 'Descripción de la imagen 4' },
  { src: 'img/anuncios/5.JPG', description: 'Descripción de la imagen 5' },
  { src: 'img/anuncios/6.JPG', description: 'Descripción de la imagen 6' },
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
