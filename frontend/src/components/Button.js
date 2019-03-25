import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, value, className, title, type }) {
  return (
    <div>
      <button type={type} onClick={onClick} value={value} className={className}>
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string
};

Button.defaultProps = {
  value: "press me",
  className: "btn waves-effect waves-light",
  title: "Dette er tittel",
  type: "submit"
};
