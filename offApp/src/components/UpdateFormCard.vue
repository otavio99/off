<template>
  <div id="container">
    <ion-card>
      <ion-card-content>
        <ion-item>
          <ion-label>Nome:</ion-label>
          <ion-input v-model="item"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Avaliação (0-10):</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button type="button" @click="submit" color="success" id="btnSalvar">Salvar</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardContent, IonInput, IonButton, IonLabel } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent, onMounted } from 'vue';
import { uuid } from 'vue-uuid';

export default defineComponent({
  components: { IonCard, IonCardContent, IonInput, IonButton, IonLabel },
  props: ['itemProp'],
  data() {
    return {
      item: null
    }
  },
  mounted() {
    // this.item = this.itemProp.value.itemProp
  },
  methods: {
  }
});
</script>

<style scoped>
#container {
  max-width: 400px;
  margin: auto;
}

#btnSalvar {
  float: right;
  margin: 7px;
}
</style>
