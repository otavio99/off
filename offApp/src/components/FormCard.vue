<template>
  <div id="container">
    <ion-card>
      <ion-card-content>

        <ion-item>
          <ion-label>Nome:</ion-label>
          <ion-input v-model="item.name" placeholder="Ex: Boku no ****"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Avaliação (0-10):</ion-label>
          <ion-input v-model="item.rate"></ion-input>
        </ion-item>

        <ion-button type="button" @click="submit" color="success" id="btnSalvar">Salvar</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardContent, IonInput, IonButton, IonLabel } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonInput, IonButton, IonLabel },
  data () {
    return {
      item: {
        id: null,
        name: "",
        rate: 0
      }
    }
  },
  setup() {
    return { warning };
  },
  methods: {
    submit() {
      console.log("testttt")
      this.$store.commit({type: 'setItem',item: {id: this.item.id, name: this.item.name, rate: this.item.rate}})
    }
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
