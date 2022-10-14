import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import TeamMember from "../../Components/TeamMember/TeamMember";
import "./styles/Team.css";

const Team = () => {
  return (
    <div className="team-page">
      <Link to="/">
        <HiOutlineArrowNarrowLeft className="back-arrow" />
      </Link>
      <Link to={"/"}>
        <img src="/logo-black.png" alt="" className="logo" />
      </Link>

      <h1 className="thet">
        <span className="thet">The</span> Nuclio Team
      </h1>
      <div className="team-grid">
        <TeamMember
          linkedin="https://es.linkedin.com/in/carlosblanco"
          img={"/team/team (4).png"}
          name="Carlos Blanco"
        />
        <TeamMember
          linkedin="https://www.linkedin.com/in/ernest-sanchez/"
          img={"/team/team (3).png"}
          name="Ernest Sanchez"
        />
        <TeamMember
          linkedin="https://es.linkedin.com/in/elisabethmtzguardiola"
          img={"/team/team (5).png"}
          name="Elisabeth Martinez"
        />
        <TeamMember
          linkedin=" https://www.linkedin.com/in/mrosaardanuy/"
          img={"/team/team (6).png"}
          name="Maria Rosa Ardanuy "
        />
        <TeamMember
          linkedin="https://www.linkedin.com/in/joaquimescurasoria/"
          img={"/team/team (7).png"}
          name="Joaquim Escura"
        />
      </div>
    </div>
  );
};

export default Team;
