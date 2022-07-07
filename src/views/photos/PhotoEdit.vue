<template>
  <div>
    <h1>Alterar informações de Photos</h1>
    <div>
      <!-- Formulário -->
      <form class="form">
        <fieldset>
          <!-- Input para id (apenas para visualização) -->
          <div class="inputBox">
            <label for="id">Id: </label>
            <input v-model="form.id" type="number" name="id" id="id" disabled/>
          </div>
          <!-- Input para albumid -->
          <div class="inputBox">
            <label for="albumId">Album Id: </label>
            <input v-model="form.albumId" type="number" name="albumId" id="albumId" placeholder="Album Id: "/>
          </div>
          <!-- Input para title -->
          <div class="inputBox">
            <label for="title">Title: </label>
            <input v-model="form.title" type="text" name="title" id="title" placeholder="Title: "/>
          </div>
          <!-- Input para url -->
          <div class="inputBox">
            <label for="url">Url: </label>
            <input v-model="form.url" type="text" name="url" id="url" placeholder="Url: "/>
          </div>
          <!-- Input para thumbnailUrl -->
          <div class="inputBox">
            <label for="thumbnailUrl">Thumbnail Url: </label>
            <input v-model="form.thumbnailUrl" type="text" name="thumbnailUrl" id="thumbnailUrl" placeholder="Thumbnail Url: "/>
          </div>
          <!-- Imagem da thumbnailUrl -->
          <div v-if="form.thumbnailUrl">
            <img :src="form.thumbnailUrl" :alt="form.title">
          </div>
          <!-- Botão para atualizar os dados -->
          <input @click="updatePhoto" type="button" value="Editar" class="update-photo-btn">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "PhotoEdit",

  data() {
    return {
      form: {
        albumId: null,
        title: null,
        url: null,
        thumbnailUrl: null,
      },
    };
  },

  created() {
    this.getPhoto(this.$route.params.id);
  },

  methods: {
    getPhoto(id) {
      api.get(`/photos/${id}`).then((response) => {
        this.form = response.data;
      });
    },

    updatePhoto(id) {
      api.patch(`/photos/${id}`, this.form).then(() => {
        this.$router.push({ name: 'photosView' });
      });
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #c8eeff;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -55%);
  margin-top: 320px;
}

.form fieldset {
  border: 2px solid skyblue;
  padding: 30px;
}

.inputBox {
  margin: 15px;
}

.inputBox label {
  color: cornflowerblue;
  font-weight: bold;
  display: flex;
  text-align: left;
  margin-bottom: 2px;
}

.inputBox input {
  width: 280px;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 5px;
  outline: none;
  border:none;
  border-bottom: 2px solid rgb(200, 200, 200);
  transition: 0.2s;
}

.inputBox input:focus {
  border-bottom: 2px solid cornflowerblue;
}

.update-photo-btn {
  background-color: lightgreen;
  color: white;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  padding: 6px;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

.update-photo-btn:hover {
  background-color: deepskyblue;
}
</style>
