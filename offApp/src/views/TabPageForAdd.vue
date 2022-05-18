<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Cadastro" />
      <AddFormCard />
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import AddFormCard from '@/components/AddFormCard.vue';

export default  defineComponent({
  name: 'TabPageForAdd',
  components: { HeaderPage, AddFormCard, IonContent, IonPage }
});
</script>
