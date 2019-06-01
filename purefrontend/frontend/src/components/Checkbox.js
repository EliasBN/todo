import React from "react";
import PropTypes from "prop-types";

export default function Checkbox({ checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed ? "checked" : ""}
        onChange={onChange}
      />
    </div>
  );
}

Checkbox.PropTypes = {
  onChange: PropTypes.func
};
