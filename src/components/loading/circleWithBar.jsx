import React, { useContext } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import AppStateContext from "../../context/AppStateContext";

const CircleWithBarComponent = () => {
  const { loading } = useContext(AppStateContext);

  return loading ? (
    <div className="loading-container">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  ) : null;
};

export default CircleWithBarComponent;
