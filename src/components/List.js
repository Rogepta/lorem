export default function List({ items, className }) {
  return (
    <ul className={`${className} main-list`}>
      {items.map((item, index) => (
        <li key={index} className="text-main">
          - {item}
        </li>
      ))}
    </ul>
  );
}
