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
  IonFooter,
  IonImg,
  IonModal,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import './Tab3.css';

const initialCartItems = [
  { id: 1, name: 'Adidas Lifestyle & Basketball Cushioned Crew Socks 3 Pairs Unisex Black IC1310', price: 760.99, image: 'https://tinyurl.com/52s3s6dw', quantity: 1 },
  { id: 2, name: 'Adidas Training Performance Light Low Socks 3 Pairs Unisex White HT3440', price: 860.99, image: 'https://tinyurl.com/5t4sjjan', quantity: 1 },
  { id: 3, name: '[NEW] PUMA Unisex Crew Socks 2 Pack', price: 610.99, image: 'https://tinyurl.com/yeyk8ksw', quantity: 1 },
];

const Tab1: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
          <IonTitle>Shopping Cart</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {cartItems.map(item => (
            <IonItem key={item.id} onClick={() => openModal(item)}>
              <IonImg src={item.image} slot="start" style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
              <IonLabel>
                <h2>{item.name}</h2>
                <p>₱{item.price.toFixed(2)}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IonButton fill="outline" onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1); }}> - </IonButton>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <IonButton fill="outline" onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1); }}> + </IonButton>
                </div>
              </IonLabel>
              <IonButton fill="outline" slot="end">Remove</IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Modal for product details */}
        <IonModal isOpen={modalOpen} onDidDismiss={closeModal} cssClass="modal-background" onClick={handleOverlayClick}>
          {selectedItem && (
            <IonCard className="modal-content" onClick={e => e.stopPropagation()}>
              <IonCardHeader>
                <IonCardTitle>{selectedItem.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg src={selectedItem.image} style={{ width: '100%', borderRadius: '5px' }} />
                <h2>Price: ₱{selectedItem.price.toFixed(2)}</h2>
                <p>Quantity: {selectedItem.quantity}</p>
                <IonButton onClick={closeModal}>Close</IonButton>
              </IonCardContent>
            </IonCard>
          )}
        </IonModal>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Total: ₱{totalPrice}</IonTitle>
          <IonButton id= 
          "check"expand="full">Checkout</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;