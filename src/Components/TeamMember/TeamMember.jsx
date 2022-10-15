import { Link } from "react-router-dom";
import "./TeamMember.css";

const TeamMember = ({ name, img, linkedin, openModal, setNameMem }) => {
  return linkedin ? (
    <a href={linkedin} target={"blank"} className="team-box">
      <img src={img} alt="" />
      <p>
        {name.split(" ").length > 1 ? (
          <span>
            {name.split(" ").length > 1 && name.split(" ").length <= 2
              ? name.split(" ")[0]
              : `${name.split(" ")[0]} ${name.split(" ")[1]}`}
          </span>
        ) : (
          ""
        )}
        {name.split(" ").length > 1 && name.split(" ").length <= 2
          ? name.split(" ")[1]
          : name.split(" ")[2]}
      </p>
    </a>
  ) : (
    <Link
      to="/#team4"
      onClick={() => {
        openModal(true);
        setNameMem(name);
      }}
      className="team-box"
    >
      <img src={img} alt="" />
      <p>
        {name.split(" ").length > 1 ? (
          <span>{name.split(" ").length > 1 ? name.split(" ")[0] : ""}</span>
        ) : (
          ""
        )}
        {name.split(" ").length > 1 ? name.split(" ")[1] : name}
      </p>
    </Link>
  );
};

export default TeamMember;
