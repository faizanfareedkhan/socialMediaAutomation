import React, { useState, useEffect } from "react";

const PER_PAGE = 15; // changed per page to 15
const searchOptions = ["funny", "cat", "dog", "meme", "dance", "happy", "sad", "party", "excited", "wow"];

export default function GiphySearch() {
  const API_URL = import.meta.env.VITE_GIPHY_API;
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * searchOptions.length);
    const randomTerm = searchOptions[randomIndex];
    setSearchTerm(randomTerm);
    setQuery(randomTerm);
    setPage(0);
  }, []);

  async function fetchGifs(searchQuery, pageNumber) {
    setLoading(true);
    try {
      const offset = pageNumber * PER_PAGE;
      const url = new URL(API_URL);
      url.searchParams.set("api_key", API_KEY);
      url.searchParams.set("q", searchQuery);
      url.searchParams.set("limit", PER_PAGE);
      url.searchParams.set("offset", offset);
      url.searchParams.set("rating", "g");
      url.searchParams.set("lang", "en");

      const res = await fetch(url.toString());
      const data = await res.json();

      setGifs(data.data || []);
      setTotalCount(data.pagination?.total_count || 0);
    } catch (error) {
      console.error("Failed to fetch gifs:", error);
      setGifs([]);
      setTotalCount(0);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchGifs(searchTerm, page);
    } else {
      setGifs([]);
      setTotalCount(0);
    }
  }, [searchTerm, page]);

  function onSearchClick() {
    setPage(0);
    setSearchTerm(query);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      onSearchClick();
    }
  }

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <div className="bg-white text-black min-h-screen p-6 max-w-full mx-auto"> {/* max-w-full for wider container */}
      {/* Search Bar */}
      <div className="flex items-center mb-6 max-w-screen-xl mx-auto"> {/* keep search bar centered and limited */}
        <input
          type="text"
          placeholder="Search GIFs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearchClick}
          className="bg-black text-white px-4 py-2 rounded-r-md border border-gray-300 ml-2 hover:bg-gray-800 transition"
          aria-label="Search Giphy"
        >
          Search
        </button>
      </div>

      {loading && <div className="text-center text-gray-500 mb-4">Loading...</div>}

      {!loading && gifs.length === 0 && (
        <div className="text-center text-gray-500">No results found</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto"> {/* grid centered and limited */}
        {gifs.map((gif) => (
          <div
            key={gif.id}
            className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            style={{ height: "180px" }} // reduced height from 256px to 180px
          >
            <img
              src={gif.images.fixed_width.webp}
              alt={gif.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <button
              onClick={() => alert(`You used: ${gif.title || "GIF"}`)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/50 text-white font-semibold text-lg"
              type="button"
            >
              Use
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2 max-w-screen-xl mx-auto">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-1 font-medium">{`Page ${page + 1} of ${totalPages}`}</span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page + 1 === totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
