import React from "react";

const componentName = () => {
  return (
    <div>
      <section id="create">
        <div className="container">
          <div className="create">
            <h2>EDITE PRODUCT</h2>
            <input type="text" placeholder="photo link URL" />
            <input type="text" placeholder="food name" />
            <input type="text" placeholder="price" />
            <button>save</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default componentName;
