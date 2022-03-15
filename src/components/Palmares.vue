<template>
  <div>
    <h1>Palmarès</h1>
    <div id="titres">
      <h2>Equipe</h2>
      <h2>Tounoi</h2>
      <h2>Année</h2>
      <h2>Place</h2>
    </div>
    <div id="palmares" v-for="palmares in json.palmares" :key="palmares">
      <p>{{palmares.equipe}}</p>
      <p>{{palmares.tournoi}}</p>
      <p>{{palmares.annee}}</p>
      <p>{{palmares.place}}</p>
      <router-link class="lien" :to="{name:'Update', params: {id: palmares.id}}">
        <i class="fa fa-edit fa-lg text-light" ></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Palmares",
  data() {
    return {
      json: [],
      palmares:{
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
@import "../../static/css/palmares.css";
</style>
