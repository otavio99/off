<template>
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Adicionar</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label>Nome:</ion-label>
          <ion-input placeholder="Ex: Boku no ****"></ion-input>
        </ion-item>
        <ion-button color="success" id="btnSalvar">Salvar</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  setup() {
    return { warning };
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
