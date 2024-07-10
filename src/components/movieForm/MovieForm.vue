<template>
    <div>
      <h2>Register a Movie</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: ''
      };
    },
    methods: {
      submitForm() {
        // Logica para submeter o formulario
        const newMovie = {
          title: this.title,
          description: this.description,
        };
        console.log(newMovie);
        // Limpar formulario
        this.title = '';
        this.description = '';
      }
    }
  };
  </script>