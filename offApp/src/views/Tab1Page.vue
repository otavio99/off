<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Cadastro" />
      <FormCard />
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import FormCard from '@/components/FormCard.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { HeaderPage, FormCard, IonContent, IonPage }
});
</script>
