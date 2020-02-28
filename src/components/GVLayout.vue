<template>
  <v-app>
    <GVAppbar username="Cyril Martinez" />
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            CONTENT
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import GVAppbar from '@/components/GVAppbar.vue';

export default {
  components: {
    GVAppbar,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="sass" scoped>

</style>
