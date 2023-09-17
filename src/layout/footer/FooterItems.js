function FooterItems({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <a
          key={index}
          as={item.href ? "a" : "div"}
          href={item.href || null}
          className="footer__element "
        >
          <img className="footer__icon" src={item.icon} />
          <p className="footer__text">{item.text}</p>
        </a>
      ))}
    </>
  );
}

export default FooterItems;
