<template>
  <v-toolbar-title class="gv-toolbar-title">
    <img src="../../public/my-logo.png">
    <div>
      <span class="gv-page-title">{{ page }}</span>
      <span class="gv-website-title">{{ website }}</span>
    </div>
  </v-toolbar-title>
</template>

<script>
export default {
  props: {
    website: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
img
  width: 36px
  margin-right: 25px

.gv-website-title
    color: #837A7A
    font-size: 16px
    vertical-align: top

.gv-toolbar-title
  display: flex
  align-items: center

  div
    display: inline-block

    &> *
        display: inline-block
        margin-right: 5px

</style>
