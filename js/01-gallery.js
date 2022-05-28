import { galleryItems } from './gallery-items.js';

// VARIABLES

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryGrid(galleryItems));
galleryEl.addEventListener('click', onGalleryCardClick);

let instance = "";

// FUNCTION FOR MAKING GALLERY

function makeGalleryGrid(items) {
 return items.map(({ preview, original, description }) => {
   return /* html */ `
    <div class="gallery__item">
      <a class="gallery__link" href='${original}'>
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt="${description}"
        />
      </a>
    </div>   
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
    
    onShow(event);
  }
  
// CREATE BASIC LIGHTBOX GALLERY

function onShow(event) {
  instance = basicLightbox.create(`
  <img width="1280" height="853" src="${event.target.dataset.source}">
	`)
  instance.show()
  
  if (onShow) {
    galleryEl.addEventListener('keydown', onKeyDownEscape);
  } else if(!onShow){
    galleryEl.removeEventListener('keydown', onKeyDownEscape);
  }
}

function onKeyDownEscape(event) {
  if (event.code === 'Escape') {
      instance.close()
    }
}