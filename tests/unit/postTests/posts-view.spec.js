import { shallowMount } from '@vue/test-utils'
import PostsView from '@/views/posts/PostsView'

describe('PostsView', () => {
  it('should be a vue instance', () => {
    // Componente a ser testado
    const wrapper = shallowMount(PostsView);

    // Verificar se é um componente Vue
    expect(wrapper.vm).toBeDefined();
  });
});
