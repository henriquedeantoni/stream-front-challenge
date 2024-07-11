<template>
    <div>
      <Header />
      <div class="main-content">
        <div class="left-section">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
        <div class="center-section">
          <MovieForm @movie-registered="addMovie"/>
        </div>
        <div class="right-section">
          <MovieList :movies="movies"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>  
  import Header from '../../components/header/Header.vue';
  import MovieForm from '../../components/movieForm/MovieForm.vue';
  import MovieList from '../../components/movieList/MovieList.vue';
  
  export default {
    components: {
      Header,
      MovieForm,
      MovieList
    },
    data() {
      return {
        movies: []
      };
    },
    methods: {
      addMovie(movie) {
        if (this.movies.length >= 5) {
          this.movies.shift();
        }
        this.movies.push(movie);
      }
    }
  };
  </script>
  
  <style>
    .main-content {
      display: flex;
    }
    .left-section, .center-section, .right-section {
      flex: 1;
      padding: 1rem;
    }
    .left-section {
      background-color: #f0f0f0;
    }
    .center-section {
      background-color: #fff;
    }
    .right-section {
      background-color: #f9f9f9;
    }
  </style>