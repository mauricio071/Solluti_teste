<template>
  <div>
    <div>
      <h1>Photos</h1>
      <!-- Botão para abrir o formulário de Photo -->
      <AddPhotoBtn :to="{ name:'photoShow' }" text="Nova Photo"/>
    </div>
    <!-- Galeria de foto -->
    <div class="gallery">
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <a :href="photo.url" target="_blank">
            <!-- Imagem da Thumbnail -->
            <img :src="photo.thumbnailUrl" :alt="photo.title" class="picture">
          </a>
          <!-- Título da imagem -->
          <p>{{ photo.title }}</p>
          <!-- Botão para abrir o componente de edição de dados -->
          <EditPhotoBtn :to="{ name:'photoEdit', params:{id:photo.id} }" text="Editar"/>
          <!-- Botão para excluir o registro -->
          <button @click="deletePhoto(photo.id)" class="delete-photo-btn">Excluir</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
import AddPhotoBtn from "@/components/photosBtn/AddPhotoBtn";
import EditPhotoBtn  from "@/components/photosBtn/EditPhotoBtn";

export default {
  name: 'PhotosView',

  components: {
    AddPhotoBtn,
    EditPhotoBtn,
  },

  data() {
    return {
      photos: [],
    };
  },

  created() {
    this.getPhotos();
  },

  methods: {
    getPhotos() {
      api.get('/photos').then((response) => {
        this.photos = response.data;
      });
    },

    deletePhoto(id) {
      api.delete(`/photos/${id}`).then(() => {
        this.getPhotos();
      });
    },
  },
};

</script>

<style scoped>
.gallery ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
}

.picture {
  margin-top: 10%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #0003;
  transition: 0.2s;
}

.picture:hover {
  transform: scale(1.1);
}

.delete-photo-btn {
  background-color: #ff3c3c;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

.delete-photo-btn:hover {
  color: black;
}
</style>
