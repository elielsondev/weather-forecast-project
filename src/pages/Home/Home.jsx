import React from "react";

import Header from "../../components/Header/Header";
import SearchCity from "../../components/SearchCity/SearchCity";

function Home({setWeather}) {
  return (
    <main>
      <Header />
      <SearchCity 
        setWeather={setWeather}
      />
    </main>
  );
}

export default Home;
