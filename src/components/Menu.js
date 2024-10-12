import React from 'react';

function Menu() {
  const foodItems = [
    { name: 'Adobo Pizza', description: 'Classic pizza infused with adobo chicken and sauce.', price: '₱249.99' },
    { name: 'Rizal Salad', description: 'Crispy kangkong, parmesan, croutons, and Bonifacio dressing.', price: '₱149.99' },
    { name: 'Crispy Mang Inasal', description: 'Grilled chicken breast in Mang Inasal style with lettuce, tomato, and mayo.', price: '₱199.99' },
    { name: 'Filipino Spaghetti', description: 'Traditional Filipino pasta with hotdog, sweet tomato sauce, and marshmallow.', price: '₱169.99' },
  ];

  return (
    <div className="container">
      <div className="mains">
        <h2>Mains</h2>
        <p>"Filipino cuisine is a flavorful fusion of indigenous, Spanish, Chinese, and American influences, with popular dishes like adobo, sinigang, and lechon showcasing the country's rich culinary heritage."</p>
        <div className="food-items">
          {foodItems.map((item, index) => (
            <div key={index} className="food-item">
              <div className="food-image">
                {/* Add images here */}
              </div>
              <div className="food-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;