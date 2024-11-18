import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from '@ionic/react';
import './Tab2.css';

const ProductShop: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  const products = [
    {
      id: 1,
      name: 'Cozy Cotton Socks',
      price: 760.99,
      description: 'Adidas Lifestyle & Basketball Cushioned Crew Socks 3 Pairs Unisex Black IC1310',
      image: 'https://tinyurl.com/52s3s6dw',
    },
    {
      id: 2,
      name: 'Sporty Athletic Socks',
      price: 860.99,
      description: 'Adidas Training Performance Light Low Socks 3 Pairs Unisex White HT3440',
      image: 'https://tinyurl.com/5t4sjjan',
    },
    {
      id: 3,
      name: 'Fun Patterned Socks',
      price: 610.99,
      description: '[NEW] PUMA Unisex Crew Socks 2 Pack',
      image: 'https://tinyurl.com/yeyk8ksw',
    },
    {
      id: 4,
      name: 'Warm Winter Socks',
      price: 20,
      description: 'Keep your feet warm with our thick winter socks.',
      image: 'https://via.placeholder.com/150?text=Warm+Winter+Socks',
    },
    {
      id: 5,
      name: 'Luxury Wool Socks',
      price: 25,
      description: 'Indulge in comfort with these premium wool socks.',
      image: 'https://via.placeholder.com/150?text=Luxury+Wool+Socks',
    },
    {
      id: 6,
      name: 'Funky Novelty Socks',
      price: 18,
      description: 'Express your personality with these unique and quirky designs.',
      image: 'https://via.placeholder.com/150?text=Funky+Novelty+Socks',
    },
    {
      id: 7,
      name: 'Compression Socks',
      price: 22,
      description: 'Ideal for athletes and long flights, providing support and comfort.',
      image: 'https://via.placeholder.com/150?text=Compression+Socks',
    },
    {
      id: 8,
      name: 'Ankle Socks',
      price: 8,
      description: 'Perfect for a casual look or workouts, offering a low-cut style.',
      image: 'https://via.placeholder.com/150?text=Ankle+Socks',
    },
    {
      id: 9,
      name: 'Dress Socks',
      price: 16,
      description: 'Elevate your formal attire with our stylish dress socks.',
      image: 'https://via.placeholder.com/150?text=Dress+Socks',
    },
    {
      id: 10,
      name: 'Eco-Friendly Bamboo Socks',
      price: 14,
      description: 'Sustainable and soft, made from organic bamboo materials.',
      image: 'https://via.placeholder.com/150?text=Eco-Friendly+Bamboo+Socks',
    },
  ];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart([...cart, product]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center><IonTitle>MegaShop</IonTitle> </center>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {products.map((product) => (
            <IonCard key={product.id} className="product-card">
              <IonImg src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <IonCardHeader>
                <IonCardTitle>{product.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonLabel>{product.description}</IonLabel>
                <div className="product-details">
                  <IonLabel>Price: ₱{product.price}</IonLabel>
                  <IonButton expand="full" onClick={() => addToCart(product)}>Add to Cart</IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Cart Summary</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {cart.length === 0 ? (
              <IonLabel>Your cart is empty.</IonLabel>
            ) : (
              <IonList>
                {cart.map(item => (
                  <IonItem key={item.id}>
                    <IonLabel>{item.name} - ₱{item.price}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ProductShop;
