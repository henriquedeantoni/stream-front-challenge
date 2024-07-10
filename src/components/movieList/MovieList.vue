<template>
    <div>
      <h2>Last 5 Registered Movies</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }} - {{ movie.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['movies'],
  };
  </script>