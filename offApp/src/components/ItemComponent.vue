<template>
  <ion-item>
    <ion-label>{{item.name}}</ion-label>
    <ion-button :router-link="viewItemUrl" color="success" class="edit-btn">
      <ion-icon :icon="eyeOutline" />
    </ion-button>
    <ion-button :router-link="updateItemUrl" class="edit-btn">
      <ion-icon :icon="createOutline" />
    </ion-button>
    <ion-button @click="deleteItem" color="danger" >
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
import { IonButton } from '@ionic/vue';


export default defineComponent({
  name: 'ItemComponent',
  props: ['item'],
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
  data () {
    return {
      viewItemUrl: "/view-item/" + this.item.id,
      updateItemUrl: "/update-item/" + this.item.id
    }
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
