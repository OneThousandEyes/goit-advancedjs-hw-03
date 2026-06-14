import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import * as render from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
  galleryList: document.querySelector('.js-gallery'),
  preloader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchFormEl } = event;
  const searchedQuery = searchFormEl.elements['search-text'].value.trim();

  render.clearGallery();
  render.showLoader();
  // refs.preloader.classList.add('is-active');

  // if (!searchedQuery) {
  //   iziToast.error({
  //     title: 'Error',
  //     message:
  //       'There is no search query in the form. Please fill out search field.',
  //     position: 'topRight',
  //   });
  //   return;
  // }

  // fetch(
  //   `https://pixabay.com/api/?key=56234849-957137b57f74daf80c06e675b&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  // )
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   })

  getImagesByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;

        return;
      }

      const galleryCardsTemplate = data.hits
        .map(img => render.createGallery(img))
        .join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
      // console.log(galleryCardsTemplate);
      // console.log(render.createGallery(data.hits[0]));
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      refs.preloader.classList.remove('is-active');
    });

  console.log(searchedQuery);
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

console.log(refs.searchForm);
