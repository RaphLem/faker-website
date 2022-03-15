<template>
  <div>
    <main>
      <h1>Formulaire d'ajout de palmarès</h1>
      <form @submit.prevent="creer()">
        <label for="equipe">Equipe</label>
        <select v-model="palmares.equipe" id="equipe">
          <option value=""> </option>
          <option value="sktt1">SK Telecom T1</option>
          <option value="sktt1K">SK Telecom T1 K</option>
          <option value="sktt1S">SK Telecom T1 S</option>
        </select>
        <label for="tournoi">Tournoi</label>
        <input v-model="palmares.tournoi" id="tournoi" type="text">
        <label for="annee">Année</label>
        <input v-model="palmares.annee" id="annee" type="text">
        <label for="place">Place</label>
        <select v-model="palmares.place" id="place">
          <option value=""> </option>
          <option value="1">1er</option>
          <option value="2">2nd</option>
          <option value="3">3e</option>
          <option value="4">4e</option>
          <option value="5">5e</option>
          <option value="6">6e</option>
        </select>
        <button type="submit" class="bouton">Ajouter</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Create",
  data(){
    return{
      palmares:{
        id:null,
        equipe:'',
        tournoi:'',
        annee:'',
        place:''
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
  methods:{
    creer: function(){
      const formData = new FormData();
      formData.append("equipe", this.palmares.equipe);
      formData.append("tournoi", this.palmares.tournoi);
      formData.append("annee", this.palmares.annee);
      formData.append("place", this.palmares.place);
      axios.post('https://video.jmfino.fr/test.php', formData)
        .then(response =>{
          console.log(response.data);
        })
        .catch(error => {
          console.log("Erreur création");
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
@import "../../static/css/page-ajout.css";
</style>
