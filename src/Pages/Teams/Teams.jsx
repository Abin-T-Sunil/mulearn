import { useState } from "react";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Teams.module.css";
import TeamCard from "../../Components/TeamCard/TeamCard";

import yipteam from "./data/yip-team";
import techTeam from "./data/tech-contributors.js";

const Teams = () => {
  const [teamName, setTeamfilter] = useState("all");

  let execom = require("./teamdata/execom.json");
  let core = require("./teamdata/core.json");
  let zonal = require("./teamdata/zonal.json");
  let district = require("./teamdata/district.json");
  let ca = require("./teamdata/ca.json");

  const handleFilterChange = (e) => {
    setTeamfilter(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className={styles.firstviewmain_container}>
        <div className={styles.firstview_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                The <span>Gears</span> Behind The Machine.
              </p>
              <p className={styles.fv_tagline}>
                The 'µLearn' community's growth to this moment would not have
                been possible without the team's soul and heart. Our team has a
                big impact on how well we do our work. Here is the team to which
                we are addressing.
              </p>
            </div>
            <div className={styles.fv_illustration}>
              <img
                className={styles.fv_image}
                src="assets/team/illustration.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.select_wrapper}>
        <select
          className={styles.select}
          value={teamName}
          onChange={handleFilterChange}
        >
          <option value="all" selected>
            All
          </option>
          <option value="execom">Execom</option>
          <option value="yip">YIP Team</option>
          <option value="community">Community Team</option>
          <option value="tech">Tech Team</option>
        </select>
      </div>

      {(teamName === "all" || teamName === "execom") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>Executive Committee</p>
          <p className={styles.team_desc}>
            The Executive Members are those who serve as the community's
            skeleton and propel it forward from the rear.
          </p>
          <div className={styles.members_list}>
            {execom.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "yip") && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>YIP Organization Team</p>
          <p className={styles.team_desc}>
            Here are the members of the crew and interns who helped to make the
            YIP a big success.
          </p>
          <div className={styles.members_list}>
            {yipteam.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "community") && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>Community Team</p>
          <p className={styles.team_desc}>
            The Community Team was the one who brought the achievements at the
            most; it links industry and academia and forges connections between
            students, faculty, mentors, and others.
          </p>
          <p className={styles.sub_team_title}>Core Team</p>
          <div className={styles.members_list}>
            {core.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>Zonal Heads</p>
          <div className={styles.members_list}>
            {zonal.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>District Heads</p>
          <div className={styles.members_list}>
            {district.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>Campus Ambassadors</p>
          <div className={styles.members_list}>
            {ca.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "tech") && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>Tech Team</p>
          <p className={styles.team_desc}>
            Here are the members of the crew who contributed to developing the
            website and bot, collected resources and gave suggestions about UX.
          </p>
          <div className={styles.members_list}>
            {techTeam.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  image={member.image}
                  designation={member.team ? member.team : ""}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Teams;
