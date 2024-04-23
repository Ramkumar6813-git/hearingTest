import React, { useState } from "react";
import { createContext, Provider } from "react";
import PropTypes from "prop-types";

export const ProfilesContext = createContext();

const UserContextProvider = ({ children }) => {
  const [Profiles, setProfiles] = useState([]);
  return (
    <ProfilesContext.Provider value={(Profiles, setProfiles)}>
      {children}
    </ProfilesContext.Provider>
  );
};

UserContextProvider.prototype = {
  children: PropTypes.any.isRequired,
};

export default UserContextProvider;
