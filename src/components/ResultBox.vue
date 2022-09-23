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
      :color="mixtureEffectFill2(mixtures)"/></center>

    <p>value of {{ mixtureEffectFill2(mixtures) }}</p>

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

      <transition name="slide-fade">
      <rabarbar-modal-component v-if="modalVisible" @cancel="hideModal()">
          <template v-slot:header>
          </template>

          <template v-slot:body>
            Mix three colors to create the perfect one!
          </template>

          <template v-slot:footer />

      </rabarbar-modal-component>
    </transition>

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
  methods: {
    // dziala jako method ale nie dziala jako computed :| dlaczego ?
    mixtureEffectFill2 (mixtures) {
      const [redCol, greenCol, blueCol] = mixtures.map(item => Math.floor(item.amount * 2.5))

      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
      // console.log('this.mixtures ------------------------------------- ', this.mixtures)
      // return this.calculateColour(this.mixtures)
    }

  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))

      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
      // console.log('this.mixtures ------------------------------------- ', this.mixtures)
      // return this.calculateColour(this.mixtures)
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

<style lang="scss">
@import '@/styles/variables'
</style>
