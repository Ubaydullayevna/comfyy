import React from "react";

function SectionTitle({ text }) {
  return (
    <div className="border-b border-base-300 pb-5">
      <h1 className="text-3xl font-medium capitalize tracking-wider">
        {text}
      </h1>
    </div>
  );
}

export default SectionTitle;
