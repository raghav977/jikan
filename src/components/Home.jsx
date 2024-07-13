import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      // console.log(response);
      const data = await response.json();
      const usefulData = await data.data;
      console.log(usefulData);
      setData(usefulData);
      console.log(data.data);
    };
    getData();
  }, []);
  return (
    <>
      {data.length == 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="lg:grid grid-cols-3 gap-14 place-items-center bg-gray-900">
            {data.map((id) => (
              <div className="h-46 w-46 ">
                <div
                  key={id.mal_id}
                  className="text-center flex flex-col border-8 cursor-pointer m-10 round-3xl hover:-translate-y-8 duration-200"
                >
                  <p>{id.mal_id}</p>
                  <div className="h-38 w-full">
                  <img className="h-full w-full object-cover" src={id.images.jpg.image_url}></img>
                  </div>
                  <h2 className="text-white">{id.title}</h2>
                </div>
                <a href={`/page/${id.mal_id}`}> <h2 className="text-white hover:text-red-500 text-center border-8 m-2">Learn More</h2></a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
