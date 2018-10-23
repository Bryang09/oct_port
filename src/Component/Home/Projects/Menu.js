import React from "react";

const Menu = props => {
  return (
    <div className="Categories">
      <h5 onClick={props.onAll} className={props.all ? "Fill" : null}>
        All
      </h5>
      <h5 onClick={props.onReact} className={props.react ? "Fill" : null}>
        React
      </h5>
      <h5 onClick={props.onRouter} className={props.reactr ? "Fill" : null}>
        React-Router
      </h5>
      <h5 onClick={props.onAxios} className={props.axios ? "Fill" : null}>
        Axios
      </h5>
      <h5 onClick={props.onFlexBox} className={props.flexbox ? "Fill" : null}>
        Flexbox
      </h5>
      <h5 onClick={props.onSass} className={props.sass ? "Fill" : null}>
        Sass
      </h5>
    </div>
  );
};

export default Menu;
