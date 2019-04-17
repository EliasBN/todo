import React from "react";
import PropTypes from "prop-types";

export default function TextInput({ value, onChange, className, type, label }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        label={label}
      />
    </div>
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
};

TextInput.defaultProps = {
  value: "",
  className: "",
  type: "text",
  label: "text"
};
