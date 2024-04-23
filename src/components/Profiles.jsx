import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Profiles = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between">
      <Header title={"Profiles"} />
      <div className="flex-grow">
        <h1>Profile</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Profiles;
