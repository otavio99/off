<template>
  <!-- List of Text Items -->
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Lista</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-label>Pokémon Yellow</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Mega Man X</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>The Legend of Zelda</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Pac-Man</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Super Mario World</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import {
  IonItem,
  IonList,
  IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItems',
  components: {
    IonItem,
    IonList,
    IonLabel
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
