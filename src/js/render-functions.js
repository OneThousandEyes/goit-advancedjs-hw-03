import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGallery = imgData => {
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${imgData.webformatURL}" alt="${imgData.tags}" />
      <div class="gallery-stats">
        <div class="stat-item">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${imgData.likes}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Views</span>
          <span class="stat-value">${imgData.views}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${imgData.comments}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${imgData.downloads}</span>
        </div>
      </div>
    </li>
  `;
};

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  preloader: document.querySelector('.js-loader'),
};

const clearGallery = () => {
  refs.galleryList.innerHTML = '';
};

const showLoader = () => {
  refs.preloader.classList.add('is-active');
};

const hideLoader = () => {
  refs.preloader.classList.remove('is-active');
};

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export { createGallery, clearGallery, showLoader, hideLoader };
