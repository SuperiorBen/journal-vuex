<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 font-weight-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-1 fs-4 font-weight-light">2022, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  <FabButton icon="fa-save" />
  <img
    class="img-thumbnail"
    src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1583636821/content-items/003/827/572/paisaje_urbano_berlin_digitalizado-original.jpeg?1583636821"
    alt="entry-picture"
  />
  
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("../components/FabButton.vue")
    ),
  },
};
</script>

<style scoped lang="scss">
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}
img{
    width: 200px;
    position: fixed;
    bottom: 1em;
    right: 6em;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>