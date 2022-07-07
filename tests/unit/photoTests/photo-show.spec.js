import { shallowMount } from '@vue/test-utils'
import PhotoShow from '@/views/photos/PhotoShow'

describe('PhotoShow', () => {
  it('should be a vue instance', () => {
    // Componente a ser testado
    const wrapper = shallowMount(PhotoShow);

    // Verificar se é um componente Vue
    expect(wrapper.vm).toBeDefined();
  });

  it('can add a new photo', async () => {
    // Componente a ser testado
    const wrapper = shallowMount(PhotoShow);

    // Encontrar o input no componente
    const albumId = wrapper.find('#albumId');
    // Atribuir um valor para ser testado
    await albumId.setValue(1);

    // Encontrar o input no componente
    const photoTitle = wrapper.find('#title');
    // Atribuir um valor para ser testado
    await photoTitle.setValue('test1');

    // Encontrar o input no componente
    const url = wrapper.find('#url');
    // Atribuir um valor para ser testado
    await url.setValue('test2');

    // Encontrar o input no componente
    const thumbnailUrl = wrapper.find('#thumbnailUrl');
    // Atribuir um valor para ser testado
    await thumbnailUrl.setValue('test3');

    // Encontrar o botão no componente
    const addPhotoBtn = wrapper.find('.store-photo-btn');
    // Simular um click no botão
    await addPhotoBtn.trigger('click');

    // Verificar se os dados foram preenchidas
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
