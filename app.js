const app = Vue.createApp({
  data() {
    return {
      chars: [],
      title: "Rick and Morty Api",
    };
  },
  methods: {
    addFav(idx, fav) {
      this.chars[idx].fav = !fav;
    },
  },
  async mounted() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    this.chars = data.results.map((e, i) => ({ ...e, fav: false }));
    console.log(this.chars);
  },
});

app.mount("#app");
