<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Tab 1 page" />

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { HeaderPage, IonContent, IonPage }
});
</script>
