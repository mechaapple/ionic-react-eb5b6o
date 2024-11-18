import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab1.css';


const CompanyHistory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center>
          <IonTitle>Most Popular This Week</IonTitle>
          </center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">asdasd</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="history-timeline">
  <IonCard className="timeline-event">
    <IonCardHeader>
      <img 
        src="https://example.com/your-image.jpg" 
        alt="Genshin Impact" 
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <IonCardTitle>Genshin Impact</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      Buy Genesis Crystals for Genshin Impact in seconds! Just enter your Genshin Impact UID, select your server, choose the recharge amount, complete the payment and the Genesis Crystals will immediately reflect on your Genshin Impact account.
    </IonCardContent>
  </IonCard>

          <IonCard className="timeline-event">
            <IonCardHeader>
              <IonCardTitle>Zenless Zone Zero</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            Monochromes can be used to purchase bundles and can be traded for Polychromes.
Polychromes can be traded for Encrypted Master Tape, Master Tape, Ether Battery, etc. Encrypted Master Tape and Master Tape can be used in Signal Search for a chance to obtain rare Agents and W-Engines.
            </IonCardContent>
          </IonCard>


          <IonCard className="timeline-event">
            <IonCardHeader>
              <IonCardTitle>Valorant</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            Buy VALORANT Points in seconds! Simply enter your Riot ID, select the value of VP you wish to purchase, complete the payment, and the VP will be instantly delivered to your VALORANT account.
            </IonCardContent>
          </IonCard>


          <IonCard className="timeline-event">
            <IonCardHeader>
              <IonCardTitle>League of Legends</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            Simply enter your Riot ID, select your purchase, complete the payment, and enjoy instant delivery of your purchase to your League of Legends account.            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default CompanyHistory;
