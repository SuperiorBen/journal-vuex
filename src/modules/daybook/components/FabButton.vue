<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type:String,
      default:"fa-plus"
    }
  }
};
</script>

<style scoped lang="scss">
button {
  align-items: center;
  border-radius: 100%;
  bottom: 20px;
  display: flex;
  height: 4em;
  justify-content: center;
  position: fixed;
  right: 20px;
  width: 4em;
}
</style>