<template>
  <div id="container">
    <ion-card>
      <ion-card-content>
        <ion-item>
          <ion-label>Nome: {{item.id}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Avaliação (0-10):</ion-label>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import {
  IonItem,
  IonLabel
} from '@ionic/vue';
import { IonCard, IonCardContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, trashOutline, eyeOutline } from 'ionicons/icons';


export default defineComponent({
  name: 'ItemView',
  props: ['item'],
  components: {
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent
  },
  setup() {
    return {
      createOutline,
      trashOutline,
      eyeOutline,
    }
  },
  methods: {
    deleteItem(){
      this.$store.commit({type: 'deleteItem',item: {id: this.item.id}})
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

.edit-btn{
  margin-right: 16px;
}
</style>
