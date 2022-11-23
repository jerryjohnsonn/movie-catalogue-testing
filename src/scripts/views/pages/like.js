import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;
