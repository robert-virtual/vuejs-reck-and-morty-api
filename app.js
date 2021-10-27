import card from "./components/card.js";

const app = Vue.createApp({
  data() {
    return {
      chars: [],
      title: "Rick and Morty Api",
      showCards: true,
    };
  },
  methods: {
    addFav(idx, fav) {
      this.chars[idx].fav = !fav;
      localStorage.setItem("chars", JSON.stringify(this.chars));
      console.log("se actualizo local storage");
    },
  },
  async mounted() {
    const localdata = localStorage.getItem("chars");
    if (localdata) {
      console.log("Datos desde local storage");
      this.chars = JSON.parse(localdata);
    } else {
      console.log("Datos No existian");
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      this.chars = data.results.map((e, i) => ({ ...e, fav: false, idx: i }));
      localStorage.setItem("chars", JSON.stringify(this.chars));
    }

    console.log(this.chars);
  },
});

app.component("card", card);
app.mount("#app");
