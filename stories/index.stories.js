import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('with vuetify', () => ({
    template: '<v-btn color="primary" @click="action">Hello Vuetify</v-btn>',
    methods: { action: action('clicked') },
  }))