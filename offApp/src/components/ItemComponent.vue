<template>
  <ion-item>
    <ion-label>{{item.name}}</ion-label>
    <ion-button color="success" class="edit-btn">
      <ion-icon :icon="eyeOutline" />
    </ion-button>
    <ion-button class="edit-btn">
      <ion-icon :icon="createOutline" />
    </ion-button>
    <ion-button color="danger" >
      <ion-icon :icon="trashOutline" />
    </ion-button>
  </ion-item>
</template>

<script lang="ts">
import {
  IonItem,
  IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, trashOutline, eyeOutline } from 'ionicons/icons';


export default defineComponent({
  name: 'ItemComponent',
  props: ['item'],
  components: {
    IonItem,
    IonLabel
  },
  setup() {
    return {
      createOutline,
      trashOutline,
      eyeOutline
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
