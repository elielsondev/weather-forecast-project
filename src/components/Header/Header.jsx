import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <span>
        <img className="logo" src="../src/assets/sun-cloud-logo.png" alt="Logo" />
        <h1>Previsão do Tempo</h1>
      </span>
      
      <aside>
        
        <span>
          <p>PT-BR</p>
          <img className="flags" src="../src/assets/brazil.png" alt="Flag of the Brazil" />
        </span>
        
        <span>
          <p>EN</p>
          <img className="flags" src="../src/assets/united-states.png" alt="Flag of the United States" width={40} />
        </span>

      </aside>
    </header>
  );
}

export default Header;
