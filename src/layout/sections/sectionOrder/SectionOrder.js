import React from "react";
import Form from "../../../components/form/Form";
import searchIcon from "../../../assets/search.svg";
import percentIcon from "../../../assets/percent.svg";
import substractIcon from "../../../assets/substract.svg";
import mailIcon from "../../../assets/mail.svg";
import moneyIcon from "../../../assets/money.svg";
import "./SectionOrder.scss";
import "../../../styles/App.scss";
import "../../../styles/Typography.scss";

export default function SectionOrder() {
  return (
    <section className="order">
      <div className="container">
        <div className="order__title">
          <h2 className="order__title-heading">
            Оформление <span className="order__title-accent">Заказа</span>
          </h2>
          <p className="order__title-text">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
        </div>
        <div className="widget-steps">
          <StepItem icon={searchIcon} text="Lorem ipsum dolor sit amet" />
          <CirclesSvg />
          <StepItem icon={percentIcon} text="Сonsectetura elit" />
          <CirclesSvg />
          <StepItem icon={substractIcon} text="Sed do eiusmod tempor" />
          <CirclesSvg />
          <StepItem icon={mailIcon} text="Esse cillum dolore eu fugiat" />
          <CirclesSvg />
          <StepItem
            icon={moneyIcon}
            text="Excepteur sint occaecat cupidatat non proident"
          />
        </div>
        <Form />
      </div>
    </section>
  );
}

const StepItem = ({ icon, text }) => (
  <div className="widget-steps__item">
    <img src={icon} alt={`Icon ${text}`} className="widget-steps__item-icon" />
    <p className="widget-steps__item-text">{text}</p>
  </div>
);

const CirclesSvg = () => (
  <svg
    width="111"
    viewBox="0 0 111 6"
    fill="none"
    className="widget-steps__circles"
  >
    <circle cx="81.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="107.011" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="55.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="29.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="3.01111" cy="3" r="3" fill="#C4C4C4" />
  </svg>
);
