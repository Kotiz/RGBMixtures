<template>
  <div>
    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <!-- <big-mixture-item
      :color="mixtureEffectFill" /> -->
    <!-- nowy komponent FlaskItem-->
    <flask-item
    :key="index"
    v-for="(mixture, index) in mixtures"
    :variant="mixture.variant"
    :amount="mixture.amount" />

    <!-- refresh btn -->
    <button-item
      :text="test"
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="0.9"
      icon="pi pi-refresh"
      class="refresh-btn">RESET</button-item>
  </div>
</template>

<script>
// import BigMixtureItem from './BigMixtureItem'
import ButtonItem from './shared/ButtonItem.vue'
import FlaskItem from './shared/FlaskItem.vue'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return { 'background-color': `rgb(${redCol}, ${greenCol}, ${blueCol})` }
    }
  },
  components: {
    // BigMixtureItem, ButtonItem
    ButtonItem, FlaskItem
  }
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
</style>
