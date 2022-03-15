<template>
  <div id="fiche">
    <img :src=DonneeJoueur.image alt="" class="profil-picture">
    <div><h1>{{ DonneeJoueur.pseudo }}</h1>
      <h2>{{ DonneeJoueur.name }}</h2>
      <div style="display: flex;align-items: center; justify-content: center; gap: 3rem;"><h3>Rôle :</h3>
        <p>{{ DonneeJoueur.role }}</p></div>
      <h3>Champion favoris :</h3>
      <ul>
        <li v-for="liste in DonneeJoueur.champions" :key="liste.name">
          {{ liste.champion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "FicheJoueur",
  data(){
    return {
      DonneeJoueur: [],
      joueur:{
        "id": 0,
      }
    }
  },
  created() {

    this.joueur = this.$route.params.id
    //Liste des mots-clés
    // eslint-disable-next-line no-undef
    axios.get('static/faker.json')
      .then(function (response) {
        console.log("Response", response.data);
        this.DonneeJoueur = response.data.equipe[this.joueur-1]
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },
}
</script>
<style scoped>
@import "../../static/css/fiche.css";
</style>
