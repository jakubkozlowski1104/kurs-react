/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";

export const UserListItem = ({
  userData: { average, name, attendence = "No data" },
}) => {
  return (
    <li>
      <div>average: {average}</div>
      <div>
        <p>Name: {name}</p>
        <p>Attendence: {attendence}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UserListItem.PropTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
};
