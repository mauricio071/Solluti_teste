<template>
  <div>
    <div>
      <h1>Posts</h1>
      <!-- Botão para abrir o formulário de Post -->
      <AddPostBtn :to="{ name:'postShow' }" text="Novo Post"/>
    </div>
    <div>
      <!-- Tabela de posts -->
      <table class="table">
        <!-- Cabeçalhos da tabela -->
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Ações</th>
          </tr>
        </thead>
        <!-- Conteúdos da tabela -->
        <tbody>
          <tr v-for="user in users" :key='user.id'>
            <th>{{ user.userId }}</th>
            <td>{{ user.id }}</td>
            <td>{{ user.title }}</td>
            <td>{{ user.body }}</td>
            <td>
              <!-- Botão para abrir o componente de edição de dados -->
              <EditPostBtn :to="{ name:'postEdit', params:{id:user.id} }" text="Editar"/>
              <!-- Botão para excluir o registro -->
              <button @click="deletePost(user.id)" class="delete-post-btn">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
import AddPostBtn from "@/components/postsBtn/AddPostBtn";
import EditPostBtn from "@/components/postsBtn/EditPostBtn";

export default {
  name: 'PostsView',

  components: {
    AddPostBtn,
    EditPostBtn,
  },

  data() {
    return {
      users: [],
    };
  },

  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      api.get('/posts').then((response) => {
        this.users = response.data;
      });
    },

    deletePost(id) {
      api.delete(`/posts/${id}`).then(() => {
        this.getPosts();
      });
    },
  },
};
</script>

<style scoped>
.table {
  margin: 30px auto;
  max-width: 1300px;
  display: block;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  border-collapse: collapse;
}

.table thead {
  background-color: lightskyblue;
}

.table thead tr th{
  color: #ffffff;
}

.table th,
.table td {
  padding: 15px;
  border: 1px solid #ccccca;
}

.table tbody tr:nth-child(even) {
  background-color: #eeeeee;
}

.delete-post-btn {
  background-color: #ff3c3c;
  color: white;
  margin-top: 10px;
  padding: 6px;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

.delete-post-btn:hover {
  color: black;
}
</style>
