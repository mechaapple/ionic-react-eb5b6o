import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonFooter,
  IonButton,
  IonText,
} from '@ionic/react';
import './Tab4.css'; 


const AboutCompany: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
          <IonTitle>About Happy Feet</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent className="about-content">
        <IonCard>
          <IonImg
            src="https://tinyurl.com/3vc2e968"
            alt="Company Image"
            className="about-image"
          />
          <IonCardHeader>
            <IonCardTitle>Who We Are</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>
              Happy Feet is an intuitive, user-friendly merchandising application designed to help sock retailers manage, showcase, and sell their unique sock collections with ease. Whether you’re a small business owner or a large retailer, Sockify offers a streamlined solution for inventory management, sales tracking, and visual merchandising. With Happy Feet, selling socks has never been simpler or more stylish. Transform your business and step into a world of possibilities with this all-in-one merchandising app!
              </p>
           
            </IonText>
          </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Our Values</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <ul>
                <li>Integrity</li>
                <li>Customer Satisfaction</li>
                <li>Innovation</li>
                <li>Teamwork</li>
                <li>Sustainability</li>
              </ul>
            </IonText>
          </IonCardContent>
        </IonCard>
        
        <IonButton expand="full" className="contact-button">
          Contact Us
        </IonButton>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Happy Feet</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};


export default AboutCompany;
