<template>
  <!-- List of Text Items -->
  <div id="container">
    <ion-card>
      <ion-card-content>
        <ion-list>
          <div v-for="item in getItems" :key="item.id">
            <ItemComponent :item="item"/>
          </div>
        </ion-list>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import {
  IonList,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, trashOutline, eyeOutline } from 'ionicons/icons';
import ItemComponent from './ItemComponent.vue'


export default defineComponent({
  name: 'ListItems',
  components: {
    IonList,
    ItemComponent
  },
  setup() {
    return {
      createOutline,
      trashOutline,
      eyeOutline
    }
  },
  computed: {
    getItems () {
      return this.$store.state.items;
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
