<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">HeadLine 1</span>
    <span class="text-h2">HeadLine 2</span>
    <span class="text-h3">HeadLine 3</span>
    <span class="text-h4">HeadLine 4</span>
    <span class="text-h5">HeadLine 5</span>
    <span class="text-h6">HeadLine 6</span>

    <q-separator />

    <span class="text-subtitle1">Subtile 1</span>
    <span class="text-subtitle2">Subtile 2</span>

    <q-separator />

    <p class="text-body1">
      Consequat cupidatat velit occaecat exercitation tempor nostrud labore
      dolore velit mollit deserunt labore consequat duis.
    </p>
    <p class="text-body2">Est dolore consectetur anim elit adipisicing.</p>

    <q-separator />
    text-weight-thin

    <span class="text-weight-light">text-weight-light</span>
    <span class="text-weight-regular">text-weight-regular</span>
    <span class="text-weight-medium">text-weight-medium</span>
    <span class="text-weight-bold">text-weight-bold</span>
    <span class="text-weight-bolder"> text-weight-bolder</span>

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menú' : 'Abrir menú lateral'"
      class="q-mt-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from "../composables/useUI";
export default defineComponent({
  name: "TypographyPage",
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      sideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
