import React from "react";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

export default function InputForm({ value, onChange, title, onSubmit }) {
  return (
    <form class="col s12" onSubmit={onSubmit}>
      <div class="row">
        <div class="input-field col s11">
          <TextInput value={value} onChange={onChange} className="validate" />
        </div>

        <div class="input-field col s1">
          <Button
            title={title}
            type="submit"
            className="btn-floating btn-small waves-effect waves-light"
          />
        </div>
      </div>
    </form>
  );
}
