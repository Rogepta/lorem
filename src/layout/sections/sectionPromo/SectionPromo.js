import List from "../../../components/List";

export default function SectionPromo() {
  const itemsList = [
    "Totam rem aperiam eaque ipsa",
    "Sit voluptatem accusantium doloremque laudantium",
    "Sed ut perspiciatis, unde omnis iste natus error",
  ];
  return (
    <section className="section-promo">
      <div className="container">
        <div className="section-promo__content">
          <h1 className="heading-1 pb-80">
            <span className="c-accent">Lorem ipsum</span> dolor sit
            <br /> amet consectetur <span className="c-accent">adipiscing</span>
          </h1>

          <h2 className="heading-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h2>
          <List items={itemsList} className="pt-10" />
        </div>
        <div className="button-group">
          <button className="button button--fix">Заказать</button>
          <button className="button button--second button--fix">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
