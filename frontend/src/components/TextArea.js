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
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix" />
            <textarea
              id={id}
              class={className}
              rows={rows}
              onChange={onChange}
              name={name}
              value={value}
            />
            <label for="icon_prefix2" />
          </div>
        </div>
      </form>
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
