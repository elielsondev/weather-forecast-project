import React from "react";

import Header from "../../components/Header/Header";
import SearchCity from "../../components/SearchCity/SearchCity";
import Footer from "../../components/Footer/Footer";

function Home({setWeather}) {
  return (
    <main>
      <Header />
      <SearchCity 
        setWeather={setWeather}
      />
      <Footer />
    </main>
  );
}

export default Home;
