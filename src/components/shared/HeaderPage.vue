<template>
      <header>
        <h1 class="page-title animate__animated animate__fadeInLeftgit">
          <slot name="header" />
        </h1>
      </header>
      <header>
        <h4 class="page-title-small">
          <slot name="header-small" />
        </h4>
      </header>
  </template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style lang="scss">
  .page-title {
    color: #637892;
    margin: 2rem;
    font-size: 2rem;
}
.page-title-small {
    color: #637892;
    margin: 2rem;
    font-size: 1rem;
}
</style>
