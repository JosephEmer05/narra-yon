import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menu.css'

import adoboPizzaImage from '../styles/Adobopizza.jpg';
import ensaladangTalongImage from '../styles/Ensaladangtalong.jpg';
import chickenArrozcaldoImage from '../styles/ChickenArrozCaldo.jpg';
import porkSinigangImage from '../styles/Porksinigang.jpg';
import lechonKawaliImage from '../styles/Crispylechonkawali.jpg';

import lecheFlanImage from '../styles/Lecheflan.jpg';
import haloHaloImage from '../styles/Halohalo.jpeg';
import ubeBibingkaImage from '../styles/Ubebibingka.jpg';
import bananaLumpiaImage from '../styles/bananaLumpia.jpg';

function Menu() {
  const foodItems = [
    {
      name: 'Adobo Chicken Pizza',
      description: 'Filipino-style adobo chicken pizza with hand-stretched crust, juicy chicken, sweet onion, spicy serrano, creamy mozzarella, Laguna cheese, adobo sauce with vinegar, soy, garlic, and tomato, topped with fresh scallions.',
      price: '₱249.99',
      image: adoboPizzaImage,
    },
    {
      name: 'Ensaladang Talong',
      description: 'Blanched or grilled eggplant served with tomatoes, salted egg, red onions, and cucumber.',
      price: '₱149.99',
      image: ensaladangTalongImage,
    },
    {
      name: 'Chicken Arroz Caldo',
      description: 'Made with chicken and rice, flavored with garlic, onions, ginger, fish sauce, and other seasonings.',
      price: '₱199.99',
      image: chickenArrozcaldoImage,
    },
    {
      name: 'Pork Sinigang',
      description: 'Filipino soup cooked with pork. Served with rice and soy sauce.',
      price: '₱169.99',
      image: porkSinigangImage,
    },
    {
      name: 'Crispy Lechon Kawali Lettuce Wraps',
      description: 'Deep-fried crunchy pork wrapped in fresh, crisp lettuce topped with tangy pickled vegetables and spicy gochujang sauce.',
      price: '₱229.99',
      image: lechonKawaliImage,
    },
  ];

  const dessertItems = [
    {
      name: 'Leche Flan',
      description: 'Leche Flan a dessert made-up of eggs and milk with a soft caramel on top.',
      price: '₱89.99',
      image: lecheFlanImage,
    },
    {
      name: 'Halo-Halo',
      description: 'Halo-halo is made with a mix of shaved ice, evaporated or condensed milk, sweetened beans, sago pearls, nata de coco, jackfruit, ube halaya, leche flan, coconut strips, sweetened banana, corn, and often topped with ube ice cream and pinipig.',
      price: '₱99.99',
      image: haloHaloImage,
    },
    {
      name: 'Ube Bibingka',
      description: 'Made with glutinous rice flour, coconut milk, sweetened condensed milk, ube halaya (purple yam jam), toped with diced fresh mango and shredded coconut or macapuno for added texture.',
      price: '₱79.99',
      image: ubeBibingkaImage,
    },
    {
      name: 'Banana lumpia',
      description: 'Traditional Filipino snack made of bananas in a spring roll wrapper and deep fried. Served with ice cream',
      price: '₱199.99',
      image: bananaLumpiaImage,
    },
  ];

  return (
    <div className="container">
      <div className="mains">
        <h2>Mains</h2>
        <p>"Filipino cuisine is a flavorful fusion of rich blend of indigenous, Spanish, Chinese, and American influences, known for their bold flavors, savory-sweet balance, and the use of ingredients like garlic, vinegar, soy sauce, coconut, and various meats and seafood."</p>
        <Carousel>
          {foodItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img src={item.image} alt={item.name} className="d-block w-100" />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="desserts">
        <h2>Desserts</h2>
        <p>"Indulge in a delightful delightful combination of tropical flavors, vibrant colors, and unique textures, often featuring ingredients like coconut, ube (purple yam), rice, and various fruits in forms such as puddings, jellies, and sweet pastries."</p>
        <Carousel>
          {dessertItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img src={item.image} alt={item.name} className="d-block w-100" />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Menu;
