<template>
  <v-card>
    <v-toolbar
      dark
      flat
    >
      <v-btn
        icon
        @click="hide()"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>
        <span class="gv-app-menu--title">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-item
          v-if="!item.items"
          :key="i"
          @click="open()"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-action>
            <v-btn
              icon
              :ripple="false"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-group
          v-if="item.items"
          :key="i"
          dark
          no-action
          style="color: #fff !important"
        >
          <template v-slot:activator>
            <v-list-item-content class="gv-group-header">
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(subItem, j) in item.items"
            :key="j"
            @click="open()"
          >
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            <v-list-item-action>
              <v-btn
                icon
                :ripple="false"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
    <v-divider />
    <v-list
      subheader
      class="px-6"
    >
      <v-subheader>Autres sites</v-subheader>
      <v-row
        dark
        class="ma-0"
      >
        <div
          v-for="n in 3"
          :key="n"
          light
          class="gv-app-menu--site ma-3"
          outlined
          tile
        />
      </v-row>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hide() {
      this.$emit('hide');
    },
    open() {
      this.$emit('open');
    },
  },
};
</script>

<style scoped>
.gv-app-menu--site {
  width: 50px;
  height: 50px;
  background-color: #d8d8d8;
  border-radius: 1px;
}

.gv-app-menu--title {
  text-transform: capitalize;
}

.gv-group-header {
  min-height: 60px;
}
</style>
