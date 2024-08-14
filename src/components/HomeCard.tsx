import Colors from "@/contants/Colors";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faUsersRays } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const HomeCard = () => {
  return (
    <div
      className="p-10 rounded-xl m-5 flex justify-between items-center"
      style={{ backgroundColor: Colors.primary }}
    >
      <div>
        <h1 className="text-2xl">Interesting</h1>
        <h1 className="text-2xl" style={styles.span}>
          Qualities
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-3 text-white font-bold">
          <li className="mx-4 gap-3 flex items-center">
            <FontAwesomeIcon icon={faBrain} />
            Growth Mindset
          </li>
          <li className="mx-4 gap-3 flex items-center">
            <FontAwesomeIcon icon={faUsersRays} />
            English Training
          </li>
          <li className="mx-4 gap-3 flex items-center">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            Aptitude Sessions
          </li>
          <li className="mx-4 gap-3 flex items-center">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            Interview Training
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeCard;

const styles = {
  span: {
    color: Colors.background,
  },
};
