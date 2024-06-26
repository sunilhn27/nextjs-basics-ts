
"use client"
import React from "react";
import { ResponsiveNetwork } from "@nivo/network";
import { data } from "./_data";

function Network() {
  return (
    <section className="flex justify-center items-center">
      <div className=" border-2 border-red-500 w-[80%] h-[45rem]">
        <ResponsiveNetwork  
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          linkDistance={(e) => e.distance}
          centeringStrength={0.4}
          repulsivity={6}
          nodeSize={(n) => n.size}
          activeNodeSize={(n) => 1.7 * n.size}
          nodeColor={(e) => e.color}
          nodeBorderWidth={1}
          nodeBorderColor={{
            from: "color",
            modifiers: [["darker", 0.8]],
          }}
          linkThickness={(n) => 2 + 2 * n.target.data.height}
          linkBlendMode="multiply"
          motionConfig="wobbly"
        />
      </div>
    </section>
  );
}

export default Network;
