export async function getMovies() {
    // Logica para buscar filmes da API
    return [
      { id: 1, title: "Movie 1", description: "Description 1" },
      { id: 2, title: "Movie 2", description: "Description 2" },
      { id: 3, title: "Movie 3", description: "Description 3" },
      { id: 4, title: "Movie 4", description: "Description 4" },
      { id: 5, title: "Movie 5", description: "Description 5" },
      // ... mais filmes
    ];
  }
  
  export async function addMovie(movie) {
    // Logica para adicionar filme na API
    console.log('Adding movie', movie);
  }