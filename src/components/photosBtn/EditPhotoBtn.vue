<template>
  <!-- Botão direcional para a página PhotoEdit -->
  <router-link :to="to" class="edit-photo-btn">{{ text }}</router-link>
</template>

<script>
export default {
  name: "EditPhotoBtn",

  props: {
    to: Object,
    text: String,
  },
};
</script>

<style scoped>
.edit-photo-btn {
  background-color: lightgreen;
  margin-bottom: 20px;
  padding: 9px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.5s;
}

.edit-photo-btn:hover {
  color:white;
}
</style>
