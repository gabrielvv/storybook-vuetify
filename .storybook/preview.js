import { addDecorator, addParameters } from '@storybook/vue';
import { VApp } from 'vuetify/lib';
import vuetifyConfig from '@/plugins/vuetify';

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    inlineStories: false,
  },
});

addDecorator(() => ({
  vuetify: vuetifyConfig,
  components: { VApp },
  template: `
    <v-app>
      <v-content>
          <v-row align="center" justify="center">
            <v-col class="text-center"><story/></v-col>
          </v-row>
      </v-content>
    </v-app>
  `,
}))
