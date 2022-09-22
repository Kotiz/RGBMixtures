<template>
    <div>
        <header-page>
            <template v-slot:header>Color</template>
        </header-page>
        <header-page>
            <template v-slot:header-small>You`ve picked a great color!</template>
        </header-page>
        <center><flask-item
            :buttonsVisible="false"
            :size="15"
            :amount="100"
            :color="mixtureEffectFill"/></center>
        </div>
        <button-item
          :text="test"
          @click="$emit('')"
          :size="2"
          :movement="-0.5"
          :font-size="0.9"
          icon="pi pi-share-alt" />
    <InputText type="text" v-model="$route.fullPath" />
    <p>{{ mixtureEffectFill }}</p>
</template>
<script>
import FlaskItem from '@/components/shared/FlaskItem.vue'
import ButtonItem from '@/components/shared/ButtonItem.vue'
import HeaderPage from '@/components/shared/HeaderPage.vue'
import InputText from 'primevue/inputtext'

export default {
  name: 'ColorPage',
  components: {
    FlaskItem, InputText, ButtonItem, HeaderPage
  }
}
</script>
