<template>
  <v-app-bar
    app
    clipped-left
    dark
    color="#151515"
  >
    <v-menu
      v-model="showMenu"
      fixed
      nav
      :close-on-click="false"
      :close-on-content-click="false"
      dark
    >
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on" />
      </template>

      <GVAppMenu
        :items="items"
        title="Menu"
        @hide="showMenu = false"
      />
    </v-menu>
    <v-spacer />
    <GVToolbarTitle
      website="Website name"
      page="Page title"
    />
    <v-spacer />
    <div class="gv-username">
      {{ username }}
    </div>
    <v-btn icon>
      <v-icon>mdi-power</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import GVToolbarTitle from '@/components/GVToolbarTitle.vue';
import GVAppMenu from '@/components/GVAppMenu.vue';

export default {
  components: {
    GVToolbarTitle,
    GVAppMenu,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showMenu: false,
    items: [
      { title: 'Titre de page 1' },
      { title: 'Titre de page 2' },
      {
        title: 'Ensemble de pages 1',
        items: [{ title: 'Titre de page 3' }, { title: 'Titre de page 4' }],
      },
      { title: 'Titre de page 5' },
    ],
  }),
};
</script>

<style scoped>
.gv-username {
  text-transform: uppercase;
}
</style>
