import { galleryItems } from './gallery-items.js';
// Change code below this line


// VARIABLES

const galleryEl = document.querySelector('.gallery');

function makeGalleryGrid(items) {
 return items.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a href="" class="gallery__link">
        <img class="gallery__image" src='${preview}' alt="${description}" >
      </a>
    </div>
    `;
    })
    .join('');
  
  
  };
  

galleryEl.insertAdjacentHTML('beforeend', makeGalleryGrid(galleryItems));
galleryEl.addEventListener('click', onGalleryCardClick);


function onGalleryCardClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
    
  const imageOriginal = galleryItems.map(el => el.original);

document.querySelectorAll('.gallery__image').forEach((item, i) => {
  item.addEventListener('click', () => {
    basicLightbox.create(`
		<img width="1280" height="853" src="${imageOriginal[i]}">
	`).show()
  })
})