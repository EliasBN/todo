import React from "react";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

export default function InputForm({
  value,
  onChange,
  title,
  onSubmit,
  onClick
}) {
  return (
    <form className="col s12" onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s11">
          <TextInput
            value={value}
            onChange={onChange}
            className="validate"
            place
            label={label}
          />
        </div>

        <div className="input-field col s1">
          <Button
            title={title}
            onClick={onClick}
            type="submit"
            className="btn-floating btn-small waves-effect waves-light"
          />
        </div>
      </div>
    </form>
  );
}
