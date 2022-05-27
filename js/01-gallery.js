import { galleryItems } from './gallery-items.js';
// Change code below this line

// VARIABLES

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryGrid(galleryItems));
galleryEl.addEventListener('click', onGalleryCardClick);

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
  let instance = basicLightbox.create(`
       <img width="1280" height="853" src="${event.target.dataset.source}">
	`)
  instance.show()

  if (onShow) {
    galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close()
    }
    });
  }
}