<template>
  <div>
    <h1>Equipe actuelle de Faker</h1>
    <main>
        <div v-for="joueur in json.equipe" :key="joueur.id">
          <router-link class="lien" :to="{name:'FicheJoueur', params: {id : joueur.id}}">
          <img :src=joueur.image alt="" class="profil-picture">
          <div>
            <p>{{ joueur.pseudo }}</p>
            <p>{{ joueur.role }}</p>
          </div>
          </router-link>
        </div>

<!--     <div id="zeus"><img class="profil-picture" src="../../static/img/T1_Zeus.png" alt="">
        <div><p>Zeus</p>
          <p>Top laner</p></div>
      </div>
      <div id="oner"><img class="profil-picture" src="../../static/img/T1_Oner.png" alt="">
        <div><p>Oner</p>
          <p>Jungler</p>
        </div>
      </div>
      <div id="guya"><img class="profil-picture" src="../../static/img/T1_Gumayusi.png" alt="">
        <div><p>Gumayusi</p>
          <p>ADC</p></div>
      </div>
      <div id="keria"><img class="profil-picture" src="../../static/img/T1_Keria.png" alt="">
        <div><p>Keria</p>
          <p>Support</p></div>
      </div>-->
    </main>
  </div>
</template>

<script>
export default {
  name: "Equipe",
  data() {
    return {
      json: [],
      joueur:{
        "id": null,
      }
    }
  },
  created() {
    //Liste des mots-clés
    // eslint-disable-next-line no-undef
    axios.get('static/faker.json')
      .then(function (response) {
        console.log("Response", response.data);
        this.json = response.data
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },
}
</script>

<style scoped>
@import "../../static/css/team.css";
</style>
