import React from "react";
import kaka from "../kaka.jpg";
import PropTypes from "prop-types";

export default function Profile(props) {
  const globalStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#009688",
    color: "white",
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
  };
  const headingStyle = {
    fontSize: "35px",
    textAlign: "center",
    letterSpacing: "2px",
    fontWeight: "800",
    color: "chartreuse",
  };
  return (
    <div className="Profile" style={globalStyle}>
      <h1 style={headingStyle}>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <p>{props.bio}</p>
      {props.children}
      {props.handleName(props.fullName)}
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Ricardo kaka",
  bio: 'Ricardo Izecson dos Santos Leite, plus connu sous le pseudonyme de Kaká, né le 22 avril 1982 à Gama, District Fédéral, au Brésil, est un footballeur international brésilien, qui évolue au poste de milieu offensif du début des années 2000 à la fin des années 2010.',
  profession: "un footballeur international brésilien",
  children: <img src={kaka} alt="Ricardo kaka" />,
  handleName: (name) => alert(`Welcome ${name}`),
};


Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.any,
};