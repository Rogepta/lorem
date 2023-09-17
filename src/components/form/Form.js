import React, { useState } from "react";
import FormRange from "../Range";
import IconFile from "../../assets/file.svg";
import Dropdown from "../dropDown/Dropdown";
import "./Form.scss";

export default function Form() {
  const [value, setValue] = useState([50]);
  const [selected, setSelected] = useState("");

  return (
    <form className="form">
      <div className="form__three-col">
        <Dropdown selected={selected} setSelected={setSelected} />
        <input
          type="email"
          placeholder="Ваш email"
          className="form__input"
          name="email"
        />
        <input
          type="text"
          placeholder="Ваше имя"
          className="form__input"
          name="name"
        />
      </div>
      <div className="form__two-col">
        <div>
          <div className="form__value">
            <span className="form__value-text">
              Sed ut perspiciatis, unde omnis iste natus
            </span>
            <span className="form__value-text">{value[0]}%</span>
          </div>
          <FormRange value={value} setValue={setValue} />
        </div>
        <div className="form__button-submit">
          <label className="button button--second ">
            <img src={IconFile} alt="Прикрепить файл" />
            Прикрепить файл
            <input type="file" className="input-add-file " name="file" />
          </label>
        </div>
      </div>
      <div className="form__button-submit1">
        <button className="button button--border-mini button--form">
          Отправить
        </button>
      </div>
    </form>
  );
}
