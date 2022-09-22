<template>
  <header-page>
    <template v-slot:header>Home</template>
  </header-page>
</template>
<script>
import HeaderPage from '@/components/shared/HeaderPage.vue'
export default {
  name: 'HomePage',
  components: {
    HeaderPage
  }
}
</script>
