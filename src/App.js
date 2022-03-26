import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import kaka from "../src/kaka.jpg";

function App() {
  const handleName = (name) => alert(`Welcome ${name}`);
  return (
    <div>
      <Profile
        fullName="Ricardo kaka"
        bio="Ricardo Izecson dos Santos Leite, plus connu sous le pseudonyme de Kaká, né le 22 avril 1982 à Gama, District Fédéral, au Brésil, est un footballeur international brésilien, qui évolue au poste de milieu offensif du début des années 2000 à la fin des années 2010."
        profession={"un footballeur"}
        handleName={handleName}
      >
        <img src={kaka} alt="profile-pic" />
      </Profile>
      {/* Test Default props  */}   
      {/* <Profile /> */}
    </div>
  );
}

export default App;
