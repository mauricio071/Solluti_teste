<template>
  <!-- Botão direcional para a página PostShow -->
  <router-link :to="to" class="add-post-btn">{{ text }}</router-link>
</template>

<script>
export default {
  name: "AddPostBtn",

  props: {
    to: Object,
    text: String,
  },
};
</script>

<style scoped>
.add-post-btn {
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

.add-post-btn:hover {
  color: lightblue;
}
</style>
