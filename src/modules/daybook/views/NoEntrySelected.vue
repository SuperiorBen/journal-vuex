<template>
  <div class="d-flex justify-content-center align-items-center">
      <h1 class="align-self-center">No Hay nada seleccionado</h1>
  </div>
  <FabButton/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: { FabButton: defineAsyncComponent(()=>import('../components/FabButton.vue')) }
}
</script>

<style scoped lang="scss">
    div{
        height: 100%;
    }
</style>