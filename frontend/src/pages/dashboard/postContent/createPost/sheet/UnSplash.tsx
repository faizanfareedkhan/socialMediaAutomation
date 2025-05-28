import React, { FC, Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

// Initialize Unsplash API
const api = createApi({
  accessKey: "Wn4BFHpCACnGetrqC2qhH_34j-xKw9kotJF2meOWTkc",
});

// You don't need a custom Photo type, just use what the API returns
const PhotoComp: React.FC<{ photo: any }> = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <Fragment>
      <img
        className="img"
        src={urls?.regular}
        alt={`Photo by ${user.name}`}
        loading="lazy"
      />
      <a
        className="credit"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

const Body: FC = () => {
  const [photos, setPhotos] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "social", orientation: "squarish", perPage: 12 })
      .then((res) => {
        if (res.errors) {
          setError(res.errors[0]);
        } else {
          // Use the response as-is without casting
          const results = res.response?.results;
          setPhotos(results || []);
        }
      })
      .catch(() => {
        setError("Something went wrong fetching photos.");
      });
  }, []);

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <div>PS: Make sure your access token is valid!</div>
      </div>
    );
  }

  if (!photos) return <div>Loading...</div>;

  return (
    <div className="feed">
      <ul className="columnUl">
        {photos.map((photo) => (
          <li key={photo.id} className="li">
            <PhotoComp photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home: FC = () => {
  return (
    <main className="root">
      <Body />
    </main>
  );
};

export default Home;
