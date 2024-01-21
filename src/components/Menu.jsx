import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ redProduct, data, deleteProduct, editeInput }) => {
  useEffect(() => {
    redProduct();
  }, []);
  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          {data.map((el, index) => (
            <div className="card">
              <img src={el.image} alt="image" />
              <div className="card_text">
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
              <div className="card_action">
                <button onClick={() => deleteProduct(el.id)}>Delete</button>
                <Link to={`/edite/${el.id}`}>
                  <button onClick={() => editeInput(index)}>Edite</button>
                </Link>
                <button>Orders</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;
