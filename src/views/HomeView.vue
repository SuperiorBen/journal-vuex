<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <router-link :to="{name:'no-entry'}">
      <button class="btn btn-primary">Primary</button>
    </router-link>

    <button class="btn btn-secundary">Secundary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin: 1em;
  }
}
</style>


