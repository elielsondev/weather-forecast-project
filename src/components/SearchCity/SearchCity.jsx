import React, { useRef } from "react";
import axios from "axios";

function SearchCity({ setWeather }) {
  const inputRef = useRef();
  const myKeyOpenWeather = "92564f37d0d12831e4d15b0704664c86";

  async function handleClick() {
    const city = inputRef.current.value;

    try {
      // Site da API e Key para utiliza-la: https://openweathermap.org/
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKeyOpenWeather}&lang=pt_br&units=metric`
      );
      const { name, main, weather, wind } = response.data;

      setWeather({ name, main, weather, wind });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={handleClick}>Buscar</button>
    </section>
  );
}

export default SearchCity;
