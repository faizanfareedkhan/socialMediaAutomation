import React, { useEffect, useState } from "react";
import axios from "axios";

const searchOptions = ["nature", "animals", "city", "technology", "cars", "flowers", "mountains", "beach", "art", "food"];

const getRandomSearchTerm = () => {
  const randomIndex = Math.floor(Math.random() * searchOptions.length);
  return searchOptions[randomIndex];
};

const UnsplashGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const UNSPLASH_API = import.meta.env.VITE_UNSPLASH_API;
  const CLIENT_ID = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

  const perPage = 15;

  // Internal state, no URL sync
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  const fetchImages = async (query, pageNum) => {
    try {
      setError("");
      const res = await axios.get(UNSPLASH_API, {
        params: {
          client_id: CLIENT_ID,
          query,
          page: pageNum,
          per_page: perPage,
        },
      });

      const results = res.data.results || [];
      setImages(results);

      if (results.length === 0) {
        setError("Images not found.");
      }

      setTotalPages(Math.ceil(res.data.total / perPage));
    } catch (err) {
      console.error("Unsplash fetch error:", err);
      setError("Failed to load images. Please try again later.");
      setImages([]);
      setTotalPages(0);
    }
  };

  // On component mount, pick random term and fetch
  useEffect(() => {
    const random = getRandomSearchTerm();
    setSearchTerm(random);
    setInputValue(random);
    setPage(1);
    fetchImages(random, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch images when searchTerm or page changes (after initial mount)
  useEffect(() => {
    if (searchTerm) {
      fetchImages(searchTerm, page);
    }
  }, [searchTerm, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchTerm(inputValue.trim());
      setPage(1);
    }
  };

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen p-6 max-w-screen-2xl mx-auto">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search images..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && images.length === 0 && (
        <div className="text-red-600 mb-4 text-sm">{error}</div>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition"
          >
            <a href={img.links.html} target="_blank" rel="noopener noreferrer">
              <img
                src={img.urls.small}
                alt={img.alt_description || "Unsplash image"}
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/50 text-white font-semibold">
                Use
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-1 font-medium">{`Page ${page} of ${totalPages}`}</span>
          <button
            disabled={page === totalPages}
            onClick={() => goToPage(page + 1)}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UnsplashGallery;
