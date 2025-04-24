import MediaCard from "@/components/mediaCard/MediaCard";

function MediaLibrary() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
}

export default MediaLibrary;
