import GVAppMenu from '@/components/GVAppMenu.vue';

export default {
  title: 'Design System/GVAppMenuJS',
  component: GVAppMenu,
};

export const basic = () => ({
  components: { GVAppMenu },
  template: `
        <v-menu
          absolute
          nav
          :close-on-click="false"
          :close-on-content-click="false"
          dark
          v-model="showMenu"
        >
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on" color="black">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <GVAppMenu v-bind:items="items" title="Menu" @hide="showMenu = false"/>
        </v-menu>
      `,
  data: () => ({
    items: [
      { title: 'Titre de page 1' },
      { title: 'Titre de page 2' },
      {
        title: 'Ensemble de pages 1',
        items: [{ title: 'Titre de page 3' }, { title: 'Titre de page 4' }],
      },
      { title: 'Titre de page 5' },
    ],
    showMenu: true,
  }),
});
