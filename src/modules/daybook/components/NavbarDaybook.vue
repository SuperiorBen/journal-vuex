<template>
  <nav class="navbar bg-primary">
    <router-link to="home" class="navbar-brand text-white"
      ><img
        src="../../../assets/logo.png"
        class="d-inline-block align-text-top mx-2"
        alt="logo"
      />Daybook</router-link
    >

    <div class="d-flex">
        <button class="btn btn-outline-info">
            <i class="fa fa-sign-out-alt"></i>
        </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  img {
    width: 1.5em;
    margin: 0px;
  }
}
</style>