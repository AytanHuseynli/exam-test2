import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BannerSection from "../../Banner/BannerSection";


function HomePage() {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setCard(data))
      .catch((error) => console.error(error));
  }, []);

  // searchi burada yaz 
  return (
    <>
    <BannerSection />
    <input type="text"
     value={search} 
     onChange={(e)=>setSearch(e.target.value)}/>
    <i class="fa-solid fa-magnifying-glass"></i>
    <div className="container">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="card-container">
        {card
        .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
        .map((x)=>(
          <div key={x.id} className="cards">
            <img src={x.img}  className="card-image"/>
            <div className="card-body">
              <h3 className="card-name">{x.name}</h3>
              <p className="card-price">{x.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* <><FirstSection></FirstSection></> */}
    </>
  );
}

export default HomePage;
