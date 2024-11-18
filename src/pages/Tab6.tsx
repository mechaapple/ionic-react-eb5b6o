import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonInput,
  IonTextarea,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonIcon,
} from '@ionic/react';
import { logoFacebook, logoInstagram, mailOutline } from 'ionicons/icons';
import './Tab6.css';


const Tab1: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, message });
    // You can add your form submission logic here
  };


  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> {/* Add the menu button */}
          </IonButtons>
          <center><IonTitle>Contact Us</IonTitle></center>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Us</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonGrid>
          <IonRow>
            <IonCol>
              {/* Image Above Fields */}
              <img
                src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEUQ%2F5EX%2BBPyk0F4RNGMVrMkAFWjIyKKnxjED9HLp6v%2Fetkku64%2BA1ZqFgTTmAbSypIf37aI5tXNcih9sNfKY8xY1QbMwLGhUDf8pmQn26fNG7sOgpiTbQE%2FC%2FpUaSw%2FoCe44mismNfO4vBJm3L5IzowjhHPvN83bwez8ibDihVPP5xRcklv3Ew3FZoy91K1rnzO9axG0BvhQ9Ce5B96DabIl2ZIJE%2FGp5Fx3iTFPflliIIqbXfBR%2F3Yf5KatZNUnCp66m1oz9gNM67oYJ1qTQaNaUCLYZKXSzh1JnB2SKBOrh6iprgHqMyXdXqWMp%2FVv3MXdmEyCa%2FrZnAKYZNZoxoWdi6hBuHz%2BGPqf%2Bp7d5x2NAuLUPTPl2OMdKwRe1RtkqlYzHlGl3o92JaKHrl3SPozaQNtIVMOZmy6v9cXJ%2Bw9UOIC%2BSuy11LEsKoTUs2P3vz8jqrCwjByUde7pb2T6p0oz1IuvHCEDE8YCXk19%2Bz%2FTV%2F0klSA%2FhHmA6VrpaU%2FVRXpTL2L8UHXlbs7iu%2BNPtW76dPyhlDCMk44rmDFmIrok3g9EtQWjp3TO1cpMgTcgYmcb2rb4avVU6K5DJm2I%2Fs%3D&sz=w512"
                alt="Contact Us"
                style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
              />


              {/* Form Box */}
              <div className="form-box">
                {/* Name Field */}
                <IonItem>
                  <IonLabel>Name</IonLabel>
                </IonItem>
                <IonItem>
                  <IonInput
                    value={name}
                    onIonChange={(e) => setName(e.detail.value!)}
                    placeholder="Enter your name"
                  />
                </IonItem>


                {/* Space between fields */}
                <div style={{ marginBottom: '20px' }} />


                {/* Email Field */}
                <IonItem>
                  <IonLabel>Email</IonLabel>
                </IonItem>
                <IonItem>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    placeholder="Enter your email"
                  />
                </IonItem>


                {/* Space between fields */}
                <div style={{ marginBottom: '20px' }} />


                {/* Message Field */}
                <IonItem>
                  <IonLabel>Message</IonLabel>
                </IonItem>
                <IonItem>
                  <IonTextarea
                    value={message}
                    onIonChange={(e) => setMessage(e.detail.value!)}
                    placeholder="Enter your message"
                  />
                </IonItem>


                {/* Space before submit button */}
                <div style={{ marginBottom: '20px' }} />


                <IonButton expand="full" onClick={handleSubmit}>
                  Submit
                </IonButton>
              </div>
              {/* End of Form Box */}


              {/* Space before footer */}
              <div style={{ marginBottom: '20px' }} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>


      {/* New Footer with Space Above */}
      <IonFooter>
        <div style={{ marginBottom: '20px' }} /> {/* Space above footer */}
        <IonToolbar>
          <IonRow style={{ width: '100%', justifyContent: 'center' }}>
            <IonCol size="auto" className="footer-icon">
              <IonButton
                onClick={() =>
                  window.open('https://www.facebook.com/your-page', '_blank')
                }
              >
                <IonIcon icon={logoFacebook} />
                <IonLabel style={{ marginLeft: '5px' }}>
                  HappyFeet@facebook.com
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="auto" className="footer-icon">
              <IonButton
                onClick={() =>
                  window.open('https://www.instagram.com/your-page', '_blank')
                }
              >
                <IonIcon icon={logoInstagram} />
                <IonLabel style={{ marginLeft: '5px' }}>
                  HappyFeet@instagram.com
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="auto" className="footer-icon">
              <IonButton
                onClick={() => window.open('mailto:your-email@example.com')}
              >
                <IonIcon icon={mailOutline} />
                <IonLabel style={{ marginLeft: '5px' }}>
                  HappyFeet@email.com
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};


export default Tab1;
