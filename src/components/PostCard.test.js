import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PostCard from './PostCard.vue';

const mockPost = {
  id: 1,
  image_url: 'http://example.com/image.jpg',
  caption: 'Testing the new design with Vitest!',
  user_handle: '@designer_dev',
  likes_count: 420,
  tag: 'Design',
};

describe('PostCard.vue', () => {
  
  it('renders post content correctly when all props are provided', () => {
 
    const wrapper = mount(PostCard, {
      props: {
        post: mockPost,
      },
    });

    expect(wrapper.find('h3').text()).toContain(mockPost.caption);

    expect(wrapper.find('p.bg-gray-100').text()).toContain(mockPost.user_handle);

    const likesSpan = wrapper.find('.hover\\:text-pink-600 span');
    expect(likesSpan.exists()).toBe(true);
    expect(likesSpan.text()).toBe(String(mockPost.likes_count));
    
    const tagDiv = wrapper.find('.bg-pink-600\\/80');
    expect(tagDiv.exists()).toBe(true);
    expect(tagDiv.text()).toBe(mockPost.tag);
  });

  it('renders default values when caption, handle, or likes are missing', () => {
    const missingPost = {
      id: 2,
      image_url: 'http://example.com/default.jpg',
      likes_count: null, 
      tag: null, 
    };

    const wrapper = mount(PostCard, {
      props: {
        post: missingPost,
      },
    });
    
    expect(wrapper.find('h3').text()).toBe('Untitled Post');
    
    expect(wrapper.find('p.bg-gray-100').text()).toBe('@anonymous');

    const likesSpan = wrapper.find('.hover\\:text-pink-600 span');
    expect(likesSpan.text()).toBe('0');
    
    expect(wrapper.find('.bg-pink-600\\/80').exists()).toBe(false);
  });
});