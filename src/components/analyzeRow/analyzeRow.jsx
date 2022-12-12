import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

const AnalyzeRow = () => {
  const data = JSON.parse(window.localStorage.getItem("dt"));
  const analyze = data.analyze.download;
  return (
    <div>
      <Statistic.Group style={{ justifyContent: "space-between" }}>
        <Statistic>
          <Statistic.Value style={{ color: "white" }}>
            {analyze.files}
          </Statistic.Value>
          <Statistic.Label style={{ color: "orange" }}>Files</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value style={{ color: "white" }}>
            {analyze.speed}
          </Statistic.Value>
          <Statistic.Label style={{ color: "orange" }}>Speed</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value style={{ color: "white" }}>
            {analyze.space}
          </Statistic.Value>
          <Statistic.Label style={{ color: "orange" }}>Space</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value style={{ color: "white" }}>
            {/* <Image src="/images/avatar/small/joe.jpg" inline circular /> */}
            {analyze.time}
          </Statistic.Value>
          <Statistic.Label style={{ color: "orange" }}>Time</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  );
};

export default AnalyzeRow;
