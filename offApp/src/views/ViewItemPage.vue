<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Filme" />
      <div id="container">
        The current id of the item is {{ id }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import { useRoute } from 'vue-router';

export default  defineComponent({
  name: 'ViewItemPage',
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
  components: { HeaderPage, IonContent, IonPage }
});
</script>

<style scoped>
#container {
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

#btnSalvar {
  float: right;
  margin: 7px;
}
</style>
