<template>
  <div>
    <h1>Formulário Photos</h1>
    <div>
      <!-- Formulário -->
      <form class="form">
        <fieldset>
          <!-- Input para albumid -->
          <div class="inputBox">
            <label for="albumId">Album Id: </label>
            <input v-model="form.albumId" type="number" name="albumId" id="albumId" placeholder="Album Id:"/>
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
          <!-- Botão para salvar os dados -->
          <input @click="storePhoto" type="button" value="Cadastrar" class="store-photo-btn">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: 'PhotoShow',

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

  methods: {
    storePhoto() {
      api.post('/photos', this.form).then(() => {
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
  top: 110px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 310px;
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

.store-photo-btn {
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

.store-photo-btn:hover {
  background-color: deepskyblue;
}
</style>
