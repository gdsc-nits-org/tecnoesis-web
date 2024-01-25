import React from "react";
import Card from "./Card"; // Adjust the path accordingly
import teamMembersData from "../../../public/teamdata/tecno_team.json"; // Adjust the path accordingly

const TeamData = () => {
  return (
    <div>
      {teamMembersData.map((member) => (
        <Card key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamData;
