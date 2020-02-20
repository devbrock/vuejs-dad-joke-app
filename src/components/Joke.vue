<template>
  <div>
    <div id="joke">{{this.joke.joke}}</div>
    <button v-on:click="fetchJoke">Fetch Joke</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Joke",
  data() {
    return {
      joke: {}
    };
  },
  created() {
    this.fetchJoke();
  },
  methods: {
    fetchJoke() {
      axios
        .get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        })
        .then(res => {
          this.joke = res.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 0.7em;
  padding: 0.5em;
  font-size: 0.8em;
  border-radius: 5px;
}

#joke {
  font-size: 1em;
  font-weight: 700;
  color: #2c3e50;
}
</style>