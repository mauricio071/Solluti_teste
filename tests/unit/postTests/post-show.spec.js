import { shallowMount } from '@vue/test-utils'
import PostShow from '@/views/posts/PostShow'

describe('PostShow', () => {
  it('should be a vue instance', () => {
    // Componente a ser testado
    const wrapper = shallowMount(PostShow);

    // Verificar se é um componente Vue
    expect(wrapper.vm).toBeDefined();
  });

  it('can add a new post', async () => {
    // Componente a ser testado
    const wrapper = shallowMount(PostShow);

    // Encontrar o input no componente
    const userId = wrapper.find('#userId');
    // Atribuir um valor para ser testado
    await userId.setValue(1);

    // Encontrar o input no componente
    const postTitle = wrapper.find('#title');
    // Atribuir um valor para ser testado
    await postTitle.setValue('test1');

    // Encontrar o input no componente
    const body = wrapper.find('#body');
    // Atribuir um valor para ser testado
    await body.setValue('test2');

    // Encontrar o botão no componente
    const addPostBtn = wrapper.find('.store-post-btn');
    // Simular um click no botão
    await addPostBtn.trigger('click');

    // Verificar se os dados foram preenchidas
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
