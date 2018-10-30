import React from "react";

const Sass = props => {
  const list = props.list.filter(fil => fil.sass).map(res => {
    console.log(res);
    return (
      <div
        className="Project"
        key={res.id}
        style={{
          backgroundImage: `url(${res.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className={res.angular ? "AngText" : "Text"}>
          <h2>{res.title}</h2>
          <h3>{res.desc}</h3>
          <div className="options">
            <a href={res.demo} target="_blank" rel="noopener noreferrer">
              <h5 className="Demo">Demo</h5>
            </a>
            <a href={res.code} target="_blank" rel="noopener noreferrer">
              <h5 className="Code">Code</h5>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return list;
};

export default Sass;
