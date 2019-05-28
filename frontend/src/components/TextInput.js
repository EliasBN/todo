import React from "react";
import PropTypes from "prop-types";

export default function TextInput({
  value,
  onChange,
  className,
  type,
  label,
  id
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        class={className}
        label={label}
        id={id}
      />
    </div>
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  class: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string
};

TextInput.defaultProps = {
  value: "",
  class: "",
  type: "text",
  label: "text"
};
