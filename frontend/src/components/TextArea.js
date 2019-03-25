import React from "react";
import PropTypes from "prop-types";

export default function TextArea({
  value,
  className,
  rows,
  onChange,
  name,
  id
}) {
  return (
    <div class="row">
      <div class="input-field col s12">
        <textarea
          data-length="120"
          id={id}
          class={className}
          rows={rows}
          onChange={onChange}
          name={name}
          value={value}
        />
        <label for="textarea2" />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};

TextArea.defaultProps = {
  value: "",
  className: "materialize-textarea",
  rows: "5",
  name: "textArea"
};
