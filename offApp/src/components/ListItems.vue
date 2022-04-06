<template>
  <!-- List of Text Items -->
  <div id="container">
    <ion-card>
      <ion-card-content>
        <ion-list>
          <div v-for="item in getItems" :key="item.id">
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
          </div>
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
import { createOutline, trashOutline, eyeOutline } from 'ionicons/icons';


export default defineComponent({
  name: 'ListItems',
  components: {
    IonItem,
    IonList,
    IonLabel
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
