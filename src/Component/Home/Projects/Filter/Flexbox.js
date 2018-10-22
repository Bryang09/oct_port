import React from "react";

const Flex = props => {
  const list = props.list.filter(fil => fil.flexbox).map(res => {
    return (
      <div
        className="Project"
        key={res.id}
        style={{
          backgroundImage: `url(/Images/${res.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="Text">
          <h2>{res.title}</h2>
          <h3>{res.desc}</h3>
        </div>
      </div>
    );
  });

  return list;
};

export default Flex;
