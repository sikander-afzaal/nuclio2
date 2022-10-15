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
    <a
      href="#team"
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
    </a>
  );
};

export default TeamMember;
