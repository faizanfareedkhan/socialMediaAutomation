import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Pexels = () => {
  const sampleQueries = [
    "yellow flowers",
    "nature",
    "city",
    "ocean",
    "mountains",
    "cats",
    "dogs",
    "technology",
    "food",
    "travel",
  ];

  // Initially empty, will be set randomly on mount
  const [imageQuery, setImageQuery] = useState("");
  const [videoQuery, setVideoQuery] = useState("");

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const [imagePage, setImagePage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);

  const [imageTotal, setImageTotal] = useState(0);
  const [videoTotal, setVideoTotal] = useState(0);

  const perPage = 12;

  const IMAGE_API = import.meta.env.VITE_PEXELS_IMAGE_API;
  const VIDEO_API = import.meta.env.VITE_PEXELS_VIDEO_API;
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  // Helper: pick random query from list
  const getRandomQuery = () =>
    sampleQueries[Math.floor(Math.random() * sampleQueries.length)];

  // Fetch images when imageQuery or imagePage changes
  const fetchImages = async () => {
    if (!imageQuery) return;
    try {
      const res = await axios.get(
        `${IMAGE_API}?key=${API_KEY}&q=${encodeURIComponent(
          imageQuery
        )}&image_type=photo&page=${imagePage}&per_page=${perPage}`
      );
      setImages(res.data.hits);
      setImageTotal(res.data.totalHits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Fetch videos when videoQuery or videoPage changes
  const fetchVideos = async () => {
    if (!videoQuery) return;
    try {
      const res = await axios.get(
        `${VIDEO_API}?key=${API_KEY}&q=${encodeURIComponent(
          videoQuery
        )}&page=${videoPage}&per_page=${perPage}`
      );
      setVideos(res.data.hits);
      setVideoTotal(res.data.totalHits);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // On mount, set random queries
  useEffect(() => {
    const randomImageQuery = getRandomQuery();
    const randomVideoQuery = getRandomQuery();

    setImageQuery(randomImageQuery);
    setVideoQuery(randomVideoQuery);

    setImagePage(1);
    setVideoPage(1);
  }, []);

  // When imageQuery or imagePage changes, fetch images
  useEffect(() => {
    fetchImages();
  }, [imageQuery, imagePage]);

  // When videoQuery or videoPage changes, fetch videos
  useEffect(() => {
    fetchVideos();
  }, [videoQuery, videoPage]);

  const totalImagePages = Math.ceil(imageTotal / perPage);
  const totalVideoPages = Math.ceil(videoTotal / perPage);

  const handleUseImage = (img) => {
    alert(`Use image with ID: ${img.id}`);
    // Your logic here
  };

  const handleUseVideo = (video) => {
    alert(`Use video with ID: ${video.id}`);
    // Your logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Tabs defaultValue="images" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        {/* Images Tab */}
        <TabsContent value="images">
          <div className="flex gap-2 mb-4">
            <Input
              value={imageQuery}
              onChange={(e) => setImageQuery(e.target.value)}
              placeholder="Search images..."
              className="flex-1"
            />
            <Button
              onClick={() => {
                setImagePage(1);
                fetchImages();
              }}
            >
              Search
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden rounded-lg shadow group cursor-pointer"
              >
                <img
                  src={img.webformatURL}
                  alt={img.tags}
                  className="w-full h-48 object-cover"
                />
                {/* Use Button on hover */}
                <button
                  onClick={() => handleUseImage(img)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Use
                </button>
              </div>
            ))}
          </div>

          {totalImagePages > 1 && (
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="outline"
                disabled={imagePage === 1}
                onClick={() => setImagePage((prev) => prev - 1)}
              >
                Previous
              </Button>
              <span className="self-center">
                Page {imagePage} of {totalImagePages}
              </span>
              <Button
                variant="outline"
                disabled={imagePage === totalImagePages}
                onClick={() => setImagePage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos">
          <div className="flex gap-2 mb-4">
            <Input
              value={videoQuery}
              onChange={(e) => setVideoQuery(e.target.value)}
              placeholder="Search videos..."
              className="flex-1"
            />
            <Button
              onClick={() => {
                setVideoPage(1);
                fetchVideos();
              }}
            >
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative overflow-hidden rounded-lg shadow group cursor-pointer"
              >
                <video controls className="w-full h-64 object-cover">
                  <source src={video.videos.medium.url} type="video/mp4" />
                </video>
                {/* Use Button on hover */}
                <button
                  onClick={() => handleUseVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Use
                </button>
              </div>
            ))}
          </div>

          {totalVideoPages > 1 && (
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="outline"
                disabled={videoPage === 1}
                onClick={() => setVideoPage((prev) => prev - 1)}
              >
                Previous
              </Button>
              <span className="self-center">
                Page {videoPage} of {totalVideoPages}
              </span>
              <Button
                variant="outline"
                disabled={videoPage === totalVideoPages}
                onClick={() => setVideoPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pexels;
