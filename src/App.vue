<template>
  <div id="app">
    <header>
      <router-link class="lien" to="/" id="logo-text">Faker</router-link>
      <nav>
        <div id="burger-menu">
          <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
            <div class="nav-toggle-bar"></div>
          </div>
          <div class="menu">
            <ul>
              <li @click="close()">
                <router-link class="lien" to="/biographie">Biographie</router-link>
              </li>
              <li @click="close()">
                <router-link class="lien" to="/equipe">Equipe actuelle</router-link>
              </li>
              <li @click="close()">
                <router-link class="lien" to="/palmares">Palmarès</router-link>
              </li>
              <li @click="close()">
                <router-link class="lien" to="/create">Ajouter un palmarès</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-bar">
          <div>
            <ul>
              <li>
                <router-link class="lien" to="/biographie">Biographie
                </router-link>
              </li>
              <li>
                <router-link class="lien" to="/equipe">Equipe actuelle
                </router-link>
              </li>
              <li>
                <router-link class="lien" to="/palmares">Palmarès</router-link>
              </li>
              <li>
                <router-link class="lien" to="/create">Ajouter un palmarès
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer id="footer">
      <div><p>Raphaël Lemoine | MMI Montbéliard</p>
        <p>Projet réalisé dans un cadre pédagogique</p>
        <p>© Tous droits réservés - 2022</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    close() {
      document.documentElement.classList.remove('menu-open')
    }
  }
}
</script>

<style>
</style>
