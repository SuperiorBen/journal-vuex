<template>
  <div
    @click="$router.push({ name: 'entry-view', params: { id: 1 } })"
    class="entry-container mb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 font-weight-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 font-weight-light">2021,Jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum non nam
      doloremque, qui tempore perspiciatis excepturi assumenda quidem ut, dolor
      sed fugit eaque maxime temporibus odit. Fuga, eaque! Modi, ipsum!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: gray, $amount: 45);
  }
  .entry-description {
    text-align: start;
    font-size: 12px;
  }
}
</style>