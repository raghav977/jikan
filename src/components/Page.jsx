import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  console.log(id);
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const getAnimeData = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const data = await response.json();
      const usefulData = await data.data;    
      setAnimeData(usefulData);
      console.log(usefulData);
    };
    getAnimeData();
  }, []);
  return (
    <div>
      {animeData.length !== 0 ? (
        <div className="flex flex-col justify-center items-center ">
          <h1>{animeData.title}</h1>
          <img src={animeData.images.jpg.image_url}></img>
      <p className="max-w-3xl border-8 rounded-xl m-10">{animeData?.synopsis}</p>
      <h2>Episodes: {animeData.episodes}</h2>
      <h4>Producers: {animeData.producers[0].name}</h4>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Page;
