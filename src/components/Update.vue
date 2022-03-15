<template>
  <div>
    <main>
      <h1>Formulaire de modification de palmarès</h1>
      <form @submit.prevent="modif()">
        <label for="equipe">Equipe</label>
        <select v-model="palmares.equipe" id="equipe">
          <option disabled selected value=""> </option>
          <option value="SK Telecom T1">SK Telecom T1</option>
          <option value="SK Telecom T1 K">SK Telecom T1 K</option>
          <option value="SK Telecom T1 S">SK Telecom T1 S</option>
        </select>
        <label for="tournoi">Tournoi</label>
        <input v-model="palmares.tournoi" id="tournoi" type="text">
        <label for="annee">Année</label>
        <input v-model="palmares.annee" id="annee" type="text">
        <label for="place">Place</label>
        <select v-model="palmares.place" id="place" >
          <option value="" disabled selected> </option>
          <option value="1er">1er</option>
          <option value="2nd">2nd</option>
          <option value="3e">3e</option>
          <option value="4e">4e</option>
          <option value="5e">5e</option>
          <option value="6e">6e</option>
        </select>
        <button type="submit" class="bouton">Modifier</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Update",
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
    this.id = this.$route.params.id;
    axios.get('static/faker.json')
      .then(function (response) {
        console.log("Response", response.data);
        this.palmares = response.data.palmares[this.id-1];
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })

    var select = document.getElementsByTagName("select");
    console.log(select)
    var cpt = select.length;

    for (var i=0; i<cpt; i++) {
      if (this.palmares.place === select.options.selectedIndex[i])
        console.log()
      var value = select.options[i].value;
      value.setAttribute("selected")
    }

  },
  methods:{
    modif: function(){

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
