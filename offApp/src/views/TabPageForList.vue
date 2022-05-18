<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Lista" />

      <ListItems />

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import ListItems from '@/components/ListItems.vue';

export default defineComponent({
  name: 'TabPageForList',
  components: { HeaderPage, IonContent, IonPage, ListItems }
});
</script>
