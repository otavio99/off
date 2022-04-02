<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ name }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderPage',
  props: {
    name: String
  }
});
</script>
