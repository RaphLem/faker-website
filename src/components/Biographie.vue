<template>
  <div>
    <div id="content">
      <h1>Biographie</h1>
      <div id="introduction">
        <img class="portrait" :src=json.biographie[0].image alt="">
        <div id="container">
          <p>{{ json.biographie[0].texte }}</p>
          <img src="../../static/img/t1-logo.png" alt="">
          <p>{{ json.biographie[1].texte }}</p>
        </div>
      </div>
      <h2>Jeunesse</h2>
      <p>{{ json.biographie[2].texte }}</p>
      <h2>Carrière</h2>
      <div v-for="saison in json.biographie[3].saisons" :key="saison.id">
        <h3>{{ "Saison " + saison.id }}</h3>
        <p>{{ saison.texte }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biographie",
  data() {
    return {
      json: []
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
@import "../../static/css/biography.css";
</style>
