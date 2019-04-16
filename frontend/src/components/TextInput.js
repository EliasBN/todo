import React from "react";
import PropTypes from "prop-types";

export default function TextInput({ value, onChange, className, type }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
};

TextInput.defaultProps = {
  value: "",
  className: "",
  type: "text"
};
