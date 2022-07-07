import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '../views/posts/PostsView.vue';
import PostShow from '../views/posts/PostShow.vue';
import PostEdit from '../views/posts/PostEdit.vue';
import PhotoShow from '../views/photos/PhotoShow.vue';
import PhotoEdit from '../views/photos/PhotoEdit.vue';

const routes = [
  {
    path: '/',
    name: 'postsView',
    component: PostsView,
  },
  {
    path: '/photosView',
    name: 'photosView',

    component() {
      return import(/* webpackChunkName: "about" */ '../views/photos/PhotosView.vue');
    },
  },
  {
    path: '/postShow',
    name: 'postShow',
    component: PostShow,
  },
  {
    path: '/postEdit/:id',
    name: 'postEdit',
    component: PostEdit,
  },
  {
    path: '/photoShow',
    name: 'photoShow',
    component: PhotoShow,
  },
  {
    path: '/photoEdit/:id',
    name: 'photoEdit',
    component: PhotoEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
