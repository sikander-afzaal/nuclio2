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
    <div
      onClick={() => {
        openModal(true);
        setNameMem(name);
        // gsap.registerPlugin(ScrollTrigger);
        // ScrollTrigger.getAll().forEach((st) => st.kill());
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
    </div>
  );
};

export default TeamMember;
