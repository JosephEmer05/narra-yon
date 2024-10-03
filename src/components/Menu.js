import React from 'react';

function Menu() {
  const foodItems = [
    { name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and basil.', price: '$12.99' },
    { name: 'Caesar Salad', description: 'Crispy romaine, parmesan, croutons, and Caesar dressing.', price: '$8.99' },
    { name: 'Grilled Chicken Sandwich', description: 'Grilled chicken breast with lettuce, tomato, and mayo.', price: '$10.99' },
    { name: 'Spaghetti Carbonara', description: 'Traditional pasta with pancetta, eggs, and parmesan.', price: '$14.99' },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            <h3>{item.name} - {item.price}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;