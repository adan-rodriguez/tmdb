import { Card } from "./Card";

export function ListGrid({ children, data, pageTitle, linkCard }) {
  return (
    <div className="p-5">
      <h1 className="font-black text-4xl mb-3">{pageTitle}</h1>
      {children}
      <div className="grid grid-cols-custom">
        {data.map((elem) => (
          <Card key={elem.id} {...elem} linkCard={linkCard} />
        ))}
      </div>
    </div>
  );
}
