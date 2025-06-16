import React, { useState, useEffect } from 'react';
import { fetchPosts, searchPosts } from '../api/posts';
import Card from './Card';
import Button from './Button';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 10;

  useEffect(() => {
    loadPosts();
  }, [page]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const result = await fetchPosts(page, postsPerPage);
      setPosts(result.data);
      setTotalPosts(result.total);
      setError(null);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      loadPosts();
      return;
    }

    try {
      setLoading(true);
      const result = await searchPosts(searchQuery);
      setPosts(result.data);
      setTotalPosts(result.total);
      setError(null);
    } catch (err) {
      setError('Failed to search posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
          className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Button type="submit">Search</Button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id}>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
              </Card>
            ))}
          </div>

          {!searchQuery && (
            <div className="flex justify-center gap-2 mt-6">
              <Button
                variant="secondary"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="px-4 py-2">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="secondary"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Posts; 