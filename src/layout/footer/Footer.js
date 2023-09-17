import QiwiIcon from "../../assets/qiwi.svg";
import YandexIcon from "../../assets/yandex.svg";
import WebMoneyIcon from "../../assets/webmoney.svg";
import MailIcon from "../../assets/mailContacts.svg";
import VKIcon from "../../assets/vk.svg";
import FooterItems from "./FooterItems";
import "./Footer.scss";

const payItems = [
  {
    text: "Qiwi wallet",
    icon: QiwiIcon,
  },
  {
    text: "Yandex Money",
    icon: YandexIcon,
  },
  {
    text: "Web Money",
    icon: WebMoneyIcon,
  },
];

const links = [
  {
    text: "info@ipsum228.com",
    icon: MailIcon,
    href: "/",
  },
  {
    text: "Мы Вконтакте",
    icon: VKIcon,
    href: "/",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <small className="footer__text">
              © 2018 «LoremIpsum.net» Все права защищены.
            </small>
          </div>
          <div className="footer__item c-beige">
            <FooterItems items={payItems} />
          </div>
          <div className="footer__item">
            <FooterItems items={links} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
