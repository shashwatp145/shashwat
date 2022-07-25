import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonMenuButton, IonModal, IonPage, IonRoute, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';
import { useState } from 'react';
import './dashboard.css';
import { Device } from '@awesome-cordova-plugins/device'
const Dashboard: React.FC = () => {

    //create state with searchText
    const [searchText, setSearchText] = useState('hello');

    //create state with setText
    const [text, setText] = useState('hi');

    const clickEventOnButton = () => {
        console.log(text);
    }

    //create state with modal
    const [showModal, setShowModal] = useState(false);

    const showDeviceUUID = () => {
        setSearchText(Device.uuid);
        console.log(Device.uuid);
        console.log(Device.platform);
        console.log(Device.isVirtual);
        console.log(Device.manufacturer);

    }

    return (

        // <div>
        // <IonButton color="secondary" shape='round' onClick={clickEventOnButton}> Hello-world </IonButton>
        // <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

        // <IonItem>
        //     <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
        //   </IonItem>
        // </div>  
        
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton color='success' />
                    </IonButtons>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar></IonSearchbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size='6'>
                            <IonButton expand='block' onClick={() => setShowModal(true)}>Click</IonButton>
                        </IonCol>
                        <IonCol size='6'>
                            <IonButton expand='block' onClick={showDeviceUUID}>UUID</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* <IonModal isOpen={showModal}>
                    <IonContent>Modal content</IonContent>
                </IonModal>  */}

                
            </IonContent>
        </IonPage>
        
    );
}
export default Dashboard;



