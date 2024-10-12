import React from 'react';

function Menu() {
  const foodItems = [
    { name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and basil.', price: '$12.99' },
    { name: 'Caesar Salad', description: 'Crispy romaine, parmesan, croutons, and Caesar dressing.', price: '$8.99' },
    { name: 'Grilled Chicken Sandwich', description: 'Grilled chicken breast with lettuce, tomato, and mayo.', price: '$10.99' },
    { name: 'Spaghetti Carbonara', description: 'Traditional pasta with pancetta, eggs, and parmesan.', price: '$14.99' },
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