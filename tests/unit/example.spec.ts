import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('should be increment when button is clicked', () => {
    const wrapper = shallowMount(HelloWorld);
    const button = wrapper.find('button');
    button.trigger('click')
    expect(wrapper.vm.$data.count).toBe(1);
  });
});
