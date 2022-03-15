<template>
  <div>
    <main>
      <div class="flex">
        <img src="../../static/img/faker-ingame.jpg" alt="faker-ingame">
        <div class="flex-div"><h1>Qui est Faker ?</h1>
          <p>Faker est un joueur d'ESport connu dans le monde entier mais si vous êtes ici je me doute que vous le
            connaissez. Il est connu pour ses performances exceptionnelles sur le jeu vidéo Leagues of Legends(LoL)
            qui est le jeu le plus joué au monde depuis pas mal d'années. Mais trêve de bavardages, je vous invite à
            partir à la découverte de ce joueur qui aura écrit l'histoire de l'ESport de LoL.</p>
          <button class="bouton">
            <router-link class="lien" to="/biographie">En savoir plus</router-link>
          </button>
        </div>
      </div>
      <div id="quote">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
        <h2>You just have to not feed.</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
      </div>
      <div class="flex nd-child">
        <div class="flex-div">
          <h2>Un palmarès sans limite ?</h2>
          <p>Faker a eu l'occasion de démontrer ses talents en compétition et de participer à de nombreux tournois,
            nous vous proposons une liste de ses palmarès accompagné d'un possibilité d'ajouter des palmarès qui ne
            serait pas forcément disponibles.</p>
          <button class="bouton">
            <router-link class="lien" to="/palmares">En savoir plus</router-link>
          </button>
        </div>
        <img src="../../static/img/SKT-Summoners-Cup.jpg" alt="win-image">
      </div>
      <div class="transition"><h2>Mais il n'a pas gagné toutes ses compétition seul !</h2>
        <p>Ici vous aurez accès aux informations de son équipe actuelle</p></div>
      <img id="logo-t1" src="../../static/img/t1-logo.png" alt="">
      <button id="last-bouton" class="bouton">
        <router-link class="lien" to="/equipe">En savoir plus</router-link>
      </button>
    </main>
  </div>
</template>

<script>
export default {
  name: "Accueil",
}
</script>

<style scoped>
@import "../../static/css/accueil.css";
</style>
