<template>
  <div>
    <h1>Alterar as informações de Posts</h1>
    <div>
      <!-- Formulário -->
      <form class="form">
        <fieldset>
          <!-- Input para id (apenas para visualização) -->
          <div class="inputBox">
            <label for="id">Id: </label>
            <input v-model="form.id" type="number" name="id" id="id" disabled/>
          </div>
          <!-- Input para userId -->
          <div class="inputBox">
            <label for="userId">UserId: </label>
            <input v-model="form.userId" type="number" name="userId" id="userId" placeholder="User id: "/>
          </div>
          <!-- Input para title -->
          <div class="inputBox">
            <label for="title">Title: </label>
            <input v-model="form.title" type="text" name="title" id="title" placeholder="Title: "/>
          </div>
          <!-- Textarea para body -->
          <div class="inputBox">
            <label for="body">Body: </label>
            <textarea v-model="form.body" name="body" id="body" placeholder="Body: "/>
          </div>
          <!-- Botão para atualizar os dados -->
          <input @click="updatePost" type="button" value="Editar" class="update-post-btn">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: "PostEdit",

  data() {
    return {
      form: {
        userId: null,
        title: null,
        body: null,
      },
    };
  },

  created() {
    this.getPost(this.$route.params.id);
  },

  methods: {
    getPost(id) {
      api.get(`/posts/${id}`).then((response) => {
        this.form = response.data;
      });
    },

    updatePost(id) {
      api.patch(`/posts/${id}`, this.form).then(() => {
        this.$router.push({ name: 'postsView' });
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
  transform: translate(-50%, -50%);
  margin-top: 280px;
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

.inputBox textarea {
  width: 290px;
  height: 150px;
  outline: none;
  border: none;
  transition: 0.2s;
}

.inputBox textarea:focus {
  border: 2px solid cornflowerblue;
}

.update-post-btn {
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

.update-post-btn:hover {
  background-color: deepskyblue;
}
</style>
