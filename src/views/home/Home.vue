  <template>
    <div class="app-container">
      <Header />
      <div class="main-content">
        <div class="left-section">
          <input>
          <button @click="goToSearch" >Buscar Filme</button>
          <br>
          <button @click="goToCatalog" >Acessar Catálogo</button>
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
  import { getMovies, addMovie } from '../../api/movieApi';
  
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
    async created() {
      this.movies = await getMovies();
    },
    methods: {
      async addMovie(movie) {
        await addMovie(movie);
        if (this.movies.length >= 5) {
          this.movies.shift();
        }
        this.movies.push(movie);
      },
      goToSearch() {
        this.$router.push({ name: 'Search' });
      },
      goToCatalog() {
        this.$router.push({ name: 'Catalog' });
      }
    }
  };
  </script>
  
  <style>
    .app-container {
      padding: 0;
      margin: 0;
    }

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