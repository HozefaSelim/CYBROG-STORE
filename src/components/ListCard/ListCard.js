import  Card  from "../Card/Card";
import "./ListCard.css";

const ListCard = ({ items }) => {
  return (
    <div className="list-card">
      {items.map(({ id, title, price, category, description, image }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default ListCard;
