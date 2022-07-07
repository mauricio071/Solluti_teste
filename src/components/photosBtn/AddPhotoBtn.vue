<template>
  <!-- Botão direcional para a página PhotoShow -->
  <router-link :to="to" class="add-photo-btn">{{ text }}</router-link>
</template>

<script>
export default {
  name: "AddPhotoBtn",

  props: {
    to: Object,
    text: String,
  },
};
</script>

<style scoped>
.add-photo-btn {
  background-color: lightskyblue;
  color: white;
  width: 88px;
  position: absolute;
  margin-top: -60px;
  margin-left: 15%;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.5s;
}

.add-photo-btn:hover {
  color: lightblue;
}
</style>
