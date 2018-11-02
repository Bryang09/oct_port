import React from "react";

const Menu = props => {
  console.log(props);
  return (
    <div className="Categories">
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
        onClick={props.onMern}
        className={props.mern ? "Fill react" : "react"}
      >
        MERN
      </h5>

      <h5
        onClick={props.onAngular}
        className={props.angular ? "NgFill angular" : "angular"}
      >
        Angular
      </h5>
      <h5
        onClick={props.onAxios}
        className={props.axios ? "AxiosFill axios" : "axios"}
      >
        Axios
      </h5>

      <h5
        onClick={props.onSass}
        className={props.sass ? "SassFill sass" : "sass"}
      >
        Sass
      </h5>
    </div>
  );
};

export default Menu;
