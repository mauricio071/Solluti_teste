import { shallowMount } from '@vue/test-utils'
import PhotosView from '@/views/photos/PhotosView'

describe('PhotosView', () => {
  it('should be a vue instance', () => {
    // Verificar se é um componente Vue
    const wrapper = shallowMount(PhotosView);

    // Verificar se é um componente Vue
    expect(wrapper.vm).toBeDefined();
  });
});
