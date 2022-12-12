import React, { useContext } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import AppStateContext from "../../context/AppStateContext";

const CircleWithBarComponent = () => {
  const { loading } = useContext(AppStateContext);

  return loading ? (
    <div>
      <CirclesWithBar
        height="40"
        width="40"
        color="black"
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
