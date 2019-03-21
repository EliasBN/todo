import React from "react";
import PropTypes from "prop-types";

export default function Button({ onClick, content, className }) {
  return (
    <button className={className} onClick={() => onClick()}>
      {content}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.anyOf(PropTypes.string, objectOf(PropTypes.any)),
  className: PropTypes.string
};

Button.defaultValues = {
  content: "",
  className: "button-component"
};
