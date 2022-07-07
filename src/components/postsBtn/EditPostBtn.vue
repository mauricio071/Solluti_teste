<template>
  <!-- Botão direcional para a página PostEdit -->
  <router-link :to="to" class="edit-post-btn">{{ text }}</router-link>
</template>

<script>
export default {
  name: "EditPostBtn",

  props: {
    to: Object,
    text: String,
  },
};
</script>

<style scoped>
.edit-post-btn {
  background-color: lightgreen;
  margin-bottom: 20px;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.5s;
}

.edit-post-btn:hover {
  color:white;
}
</style>
