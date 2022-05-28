import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryGrid(galleryItems));
galleryEl.addEventListener('click', onGalleryCardClick);

// FUNCTION FOR MAKING GALLERY

function makeGalleryGrid(items) {
 return items.map(({ preview, original, description }) => {
   return /* html */ `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> 
    `;
    })
    .join('');
};
  
// FUNCTION ON GALLERY CARD CLICK AND PREVENT DEFAULT

function onGalleryCardClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
      return;
    }
}
  
// CREATE SIMPLE LIGHTBOX GALLERY
  
const gallery =  new SimpleLightbox('.gallery a', {overlayOpacity: 0.8, captionPosition: 'bottom', captionType: 'attr', captionsData: 'alt', captionDelay: 250 });

  
