export default {
  props: ["char", "addfav"],
  template: `
    <div
        :class="{card:true,favcard:char.fav}"
        @click="addfav(char.idx,char.fav)"
    >
        <i v-show="char.fav">ð¤</i>
        <h2>{{ char.name }}</h2>
        <img width="250" :src="char.image" alt="" />
        <div class="info">
        <h3>{{char.species}}</h3>
        <span v-if="char.status == 'Alive'">ð¼ Vivo</span>
        <span v-else>ð§ââï¸Dead</span>
        </div>
    </div>
    `,
};
