import { addDecorator } from '@storybook/vue';

import { VApp } from 'vuetify/lib';

import vuetifyConfig from '../src/plugins/vuetify';

addDecorator(() => ({
  vuetify: vuetifyConfig,
  components: { VApp },
  template: `
    <v-app>
        <v-content>
          <story/>
        </v-content>
    </v-app>
  `,
}))