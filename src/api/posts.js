import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return {
      data: response.data,
      total: parseInt(response.headers['x-total-count'], 10),
    };
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const searchPosts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    const filteredPosts = response.data.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );
    return {
      data: filteredPosts,
      total: filteredPosts.length,
    };
  } catch (error) {
    throw new Error('Failed to search posts');
  }
}; 