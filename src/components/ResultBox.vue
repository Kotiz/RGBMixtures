<template>
  <div>
    <!-- text between -->
    <p
      v-text="'And the result...'" />
    <!-- nowy komponent FlaskItem-->
    <center><flask-item
      :buttonsVisible="false"
      :size="15"
      :amount="100"
      :color="mixtureEffectFill"/></center>

    <p>value of {{ mixtureEffectFill }}</p>

    dd {{ mixtures }}
    <!-- refresh btn -->
    <button-item
      :text="test"
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="0.9"
      icon="pi pi-refresh"
      class="refresh-btn" />

      <button-item
      :text="test"
      @click="showModal()"
      :size="4"
      :movement="-0.5"
      :font-size="0.9"
      icon="pi pi-question"
      class="refresh-btn" />

      <rabarbar-modal-component v-if="modalVisible" @cancel="hideModal()">
          <template v-slot:header>
            About the app
          </template>

          <template v-slot:body>
            Mix three colors to create the perfect one!
          </template>

          <template v-slot:footer>
            <button-item icon="fa-thumbs-up" />
          </template>

      </rabarbar-modal-component>

      <router-link :to="'color/'+ mixtures[0]['amount'] +
        '/' + mixtures[1]['amount'] + '/' + mixtures[2]['amount'] ">
        <button-item
          :text="test"
          @click="$emit('')"
          :size="4"
          :movement="-0.5"
          :font-size="0.9"
          icon="pi pi-share-alt"
          class="refresh-btn" />
      </router-link>
  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem.vue'
import FlaskItem from './shared/FlaskItem.vue'
import RabarbarModalComponent from '@/components/modals/rabarbar.modal.vue'
import modalMixin from '@/mixin/modalMixin'

export default {
  name: 'ResultsBox',
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      console.log('this.mixtures ------------------------------------- ', this.mixtures)
      return this.calculateColour(this.mixtures)
    },
    returnLinkRgb () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return [redCol, greenCol, blueCol]
    }
  },
  components: {
    RabarbarModalComponent,
    ButtonItem,
    FlaskItem
  }
  // mixins: [modalMixin]
}
</script>

<style scoped lang="scss">
.refresh-btn {
  background-color: #9a9a9a;
  background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
  transition: .3s;
  outline: none;
  font-size: 1.5rem;
  color: #637892;

  &:hover {
    margin-top: -0.5rem;
  }
}
.slide-fade-enter-active {
  transition: opacity .3s;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-enter-to {
  opacity: 1;
}
</style>
