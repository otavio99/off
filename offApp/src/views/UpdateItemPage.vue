<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderPage name="Filme" />
      <div id="container">
        <UpdateFormCard :item-prop="getItemId" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import HeaderPage from '@/components/HeaderPage.vue';
import { useRoute } from 'vue-router';
import UpdateFormCard from '@/components/UpdateFormCard.vue';

export default  defineComponent({
  name: 'UpdateItemPage',
  computed: {
    getItemId() {
      const route = useRoute();
      const id = ref(route.params);
      console.log("HHHHHHHHHHHHHHHHHHHHHH")
      console.log(toRaw(id.value).id)
      console.log(this.$store.getters.getItem(toRaw(id.value).id))
      return this.$store.getters.getItem(id);
    }
  },
  components: { HeaderPage, IonContent, IonPage, UpdateFormCard }
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
