import React from 'react';
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
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Footer from '../components/Footer'; // Import the Footer component
import './Tab5.css';


const developers = [
  {
    name: ' Miguel Joshua Galope ',
    description: 'He brought the shopping experience to life by developing the Shopping Cart and Company History features. His work ensures a seamless and efficient shopping journey for users.',
    image: 'https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEW1Djt%2FQsEOcW%2Fq7rleSa71ld%2Bcc3yuOYQrCFiAluZIgU%2BPfbKPoT%2FxbZ11ow5brVbk6xPlVZcGE%2BauvlmyfxC4HtwNZ0jYTrJT08dHuihVU9vdeLn6vr9zipVt2aTOJvKJAkRzG8HygA04R5hYd60mi7YyKi7mGpdXyPU36TQ%2FfZji4glJnnZn0SHC5jTAB4Rm4lT3WT4gPV4CJAlYAkgxCOOLq2JnRIwR4H8gQtie32WvSW2rBlBTE9tpHCpfVkqSMJQjDvLoTuixAQvS3B7H8SwDIhH6yjy1Tb%2Fc6xR%2B5jjf2MBjd63mxVSpm6kSp4py5XLzxAkAzeB0CiKnvtqwgNTsu4bqxtmJ9lLk8W7ksjLGrfqgWhGiDjRaCSvAUNFMkYJvJbfmJiMEGi7u%2B6IVek8DJaRYt6gSUs5QGNCWI2tcjxPdKZTgtLhWAgvhrfHS7nbK8xZdB2vFePTU2I0R5YRimBrJ8vJc7VW%2Bb8KM8daoRAC8fAg4p3HzROfWnFlnSkc8OpsI8rzkqwq%2FmpWINMhALkMtZeGL16sDIhs3SZzcEJQwxiXd8GxscPhV&sz=w512', // Path to the image
  },
  {
    name: 'Jhon Lloyd Suarez',
    description: 'She developed our Developers Page and created the app’s distinct logo. Her blend of creative vision and technical skill give our app its unique identity and aesthetic.',
    image: 'https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEUVofHhGd72nldkB5jBeh2zRBndp4GquiI7WqHIGyUVBaFAR9SWEj4cyXkGxEp5zhzryJGtbhJAYR0znQPtiLpMYEcR5Pw3bD2h%2Bilaj98ajKakVGiqRlkuKQ%2B7Vxzmrbm10rup%2B5ff5aBQq1yUJDQaZF8AOKlUOab2eGgZIyIej%2Fw5VmKcd1bCgIEoJf3hymyaNwFG%2BOBVD2v%2BDs7dtnGRDLIeXbkUYMzH8aYfFLW%2BlqT3aEglk7K%2FiSkJ%2BMq%2BL8MpHTrXJDi%2B6mHS1H6XQwTWIjCaHI%2Bm8uilj3moLfP7J8mOYc%2BHZVtqb1lhqJX%2FN7uiepvPprWVFXXl3fUFJZoeNVVdhwDSDJguPSyHuyFT1VqbZOdgAzlVH33BpX56RUKJZ26mnUQqkUtEeVcs5Hs3QLT4RXn%2FzeCsN4OVN7OMxC7Xk7nK7pZebV2iu0%2Fc7KikZ%2B7Wu5%2Bd1RfS8YMpiXZ5Pj80bUkkejmEZrFWiedju0QP0GABjrLkQst6wm4ds8rucFCUZQu0uT5BmeYWVRhsx%2Bv8xx402wLBdExKKDczDR7EFJxXiWTfzi%2BxddE%3D&sz=w512',
  },
  {
    name: 'Matthew Estrella',
    description: 'She designed the Contact Page to help users connect with us easily. She also contributed to the logo design, adding her creative touch to our brand’s visual identity.',
    image: 'https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEWYvGpAH649CAmjnewxEDhJhI6g69Pmk7ZQOwtDs5ACf2EUoY5yVi%2FL9fKl2kXArnvtJXV6xxpiZR2R4ZOc2s2hNRNiGKTRLYG%2BZgswNSeEGMVkGdXAdrHe7GUQLTEAE5Ns%2BVS489cn5emkjNV9FO8d1Mt%2BNNIgmuPKvDrR5UOvhIkV6J5JYacoI%2F0rRtnJzJvCf%2BWacF2U31fWxzs%2FUCWKsLsleA1ZlD1FBTjBNhYgtLWuLO0BNsq4I2WqH2VUy6MEQOYNygWvxb60WFO78r%2Bd9%2Bu2TMcl49eZyg23Ddlz%2FNX80x81V8Eb9EOVsX%2BQBYhLraAnNDt6D%2BHGV4y9%2FRwgTKHwGrgu4cQrncPohJMFcps81jmFbsHB%2BY%2B192f3%2BaoyiPCO9CxIiHo8upo1zLmGc7xoPcJVrMwAt5BwH1Fg7N5TK6ZM7Zl13UZTlQzARb%2FIPKTHZCZoYkw5FZJTagM8ocQMUdoelknWJ1jiXXlhNEbSXFUfwmN%2F3n%2FpIxu8DBoxAZ0KIkaS2bvPBxydMzLBLvMRGAHO1PIFUIAq1FcWiPqkcrH8JnHgECJqG4J0&sz=w512',
  },
  {
    name: 'Jerome Angelo Alison',
    description: 'He shaped the About Us and Products pages, ensuring a comprehensive experience where users can learn about our values and explore our product offerings.',
    image: 'https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEX5E61GFAOmDmT2shvXecdRJiaJMM8S1qeqVqneLkscaHvfqLymLYwN%2BF8iPPRQTdO5gAM5YY1ObJxd%2FqEV2JYCXhZnX16zs5yNjZwbCvB11BYTPWoP1TeumxwJIXAzbf5yRrD38ZaDiCK7P1u%2Fx3%2Fs4Fj3nB9tTkHwSdZEfcWzQ3Sx5FlazFAWl3v3s94jyejuyCXQ3HfEznAqygf4ED04HuSbwVEPLAxBXksD2n3ucnhqDJToou35FeLJpoxwIC0e%2FXf%2F8brp9Pnn5gmstaOVjOPQHHbnN%2Fw8ZKEzIaazSKS0N209nkggxBIvudahed91Zq66qUiQdS5bTiP%2FTB03nDTbQjys1j5cJ0Tp2mLcUykWK4wxXb46zD5ZegBOKNpI4QG76LsMhsI5DMLFqkYFPiTtAaIdslwdWe%2FFfH%2FxKqrtal6I%2BOu7PnE2%2B3BJHCNSzAVFPWFNb48u49IWtIX3CZocRWfsCGZiBg3xqW%2FFjl7rOcImUvkhjFhtba%2FKug1rARc3iQF0TLYojVPsXuzSuQPgdSN4Rj9nSjc%2FuC7bZOpLGfmnEkC7Fk0BwQOe&sz=w512',
  },

];


const Tab1: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
         <center> <IonTitle>Developers</IonTitle> </center>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        {/* Logo at the top */}
        <div className="logo-container">
          <IonImg
            src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEUBF%2B2xswWAOGAurkYJRZoinlrMzr6C9kxuFiL7wCqtBpHi%2Bo1oA0MD1bSbwMI0ltHPCky14usGgw573isRUFI9%2Fa1fB71aO7hNsO3TJvlmiOUgUOXZMCF54VB2V7CpfqEKPviXFiFHIn13xFfNa1aPxER%2BgQXMRFLqdlVnUOkUx8UimO44GwsgR9hKIWESsDcXUVl8k47WS4iQTmTK2M%2FN9ySksYWelaszE3R3Q3zZagrcHlpo8hEhXkbR1ihM2a6snkj9per0gHKdIe5ng3jVnHpmKGCYolHkEPTyR4ZVFCUlUHIKtc1GC2EBvbMvGB685Y15HkTm65OmSV5mOBsR11qx%2F7Sw8SguzCBBKy3F2%2FI70oejFk2tISiFaADF6gRT9bq56jXCj0AHxsIdN5BNhWlM%2B5JaKLAX8PCxP5Sxq8fBDzq1M8WsdPJQOzp9OmG3n6Qyft41BcSmIBgreH5PI0rEIG1%2B9kzd9JuiRtEoqW5Ygi7gh1J%2Bj%2F4fOfIMiSIbyd%2Fq8pBx%2FVgrxrXhseIILYCxwkSJvMW0CmdZ2mKOXqHPjAQvCqaoK6gE1fQq8ZdNdn1s3xQVdL5VlcNZI2c%3D&sz=w512"
            alt="Logo"
            className="logo"
          />
        </div>


        {/* Title and Description */}
        <center><div className="developers-intro">
          <h1>Meet Our Developers</h1>
          <p>Our team of dedicated developers has crafted each part of this application with care and creativity, using the Ionic framework to deliver a smooth, user-friendly experience. Get to know the talents behind the app.</p>
        </div> </center>


        {/* Developers List */}
        <IonGrid>
          {developers.map((dev, index) => (
            <IonRow key={index} className="developer-row">
              <IonCol size="3" className="developer-image">
                <IonImg src={dev.image} alt={dev.name} />
              </IonCol>
              <IonCol size="9" className="developer-details">
                <h2>{dev.name}</h2>
                <p>{dev.description}</p>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;