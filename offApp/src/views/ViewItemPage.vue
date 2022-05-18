<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Cadastro" />
      <ItemView items={id: id}/>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import ItemView from '@/components/ItemView.vue';
import { useRoute } from 'vue-router';

export default  defineComponent({
  name: 'ViewItem',
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
  components: { HeaderPage, ItemView, IonContent, IonPage }
});
</script>
