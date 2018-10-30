import React from "react";

const Menu = props => {
  console.log(props);
  return (
    <div className="Categories">
      <h5 onClick={props.onAll} className={props.all ? "Fill react" : "react"}>
        All
      </h5>
      <h5
        onClick={props.onReact}
        className={props.react ? "Fill react" : "react"}
      >
        React
      </h5>
      <h5
        onClick={props.onRouter}
        className={props.reactr ? "Fill react" : "react"}
      >
        React-Router
      </h5>
      <h5
        onClick={props.onAxios}
        className={props.axios ? "Fill react" : "react"}
      >
        Axios
      </h5>
      <h5
        onClick={props.onFlexBox}
        className={props.flexbox ? "Fill react" : "react"}
      >
        Flexbox
      </h5>
      <h5
        onClick={props.onSass}
        className={props.sass ? "Fill react" : "react"}
      >
        Sass
      </h5>
      <h5
        onClick={props.onMern}
        className={props.mern ? "Fill react" : "react"}
      >
        MERN
      </h5>
      <h5
        onClick={props.onAngular}
        className={props.angular ? "NgFill angular" : "angular"}
        // style={{ border: "1px solid red" }}
      >
        Angular
      </h5>
    </div>
  );
};

export default Menu;
