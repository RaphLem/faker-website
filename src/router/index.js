import Vue from 'vue'
import Router from 'vue-router'

import Accueil from "../components/Accueil.vue";
import Biographie from "../components/Biographie.vue";
import Equipe from "../components/Equipe.vue";
import Palmares from "../components/Palmares.vue";
import Create from "../components/Create.vue";
import FicheJoueur from "../components/FicheJoueur.vue";
import Update from "../components/Update.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/biographie',
      name: 'Biographie',
      component: Biographie
    },
    {
      path: '/equipe',
      name: 'Equipe',
      component: Equipe
    },
    {
      path: '/palmares',
      name: 'Palmares',
      component: Palmares
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    },
    {
      path: '/fichejoueur/:id',
      name: 'FicheJoueur',
      component: FicheJoueur
    }
  ]
})
