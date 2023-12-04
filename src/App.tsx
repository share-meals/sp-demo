import {
    useRef
} from 'react';
import {
    Redirect,
    Route
} from 'react-router-dom';
import {
    IonApp,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonPage,
    IonRouterOutlet,
    IonRow,
    IonText,
    IonThumbnail,
    IonToolbar,    
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Home} from './pages/Home';
import {Complete} from './pages/Complete';
import logo from './assets/logo.svg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const Header: React.FC = () => <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src={logo} style={{height: '4rem', marginRight: '1rem'}}/>
    <IonText className='ion-text-center'
	     style={{display: 'inline-block'}}>
	<h1 style={{marginBottom: 0}}>
	    Smart Pantry
	</h1>
	<h2 style={{marginTop: 0}}>
	    anywhere, any time
	</h2>
    </IonText>
</div>;

const Footer: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    return <div className='ion-text-center' style={{marginBottom: '1rem'}}>
	<IonButton
	    fill='outline'
	    id="open-info">
            Explain more
	</IonButton>
	<IonModal ref={modal} trigger="open-info">
            <IonHeader className='ion-no-border'>
		<IonToolbar>
		    <IonButtons slot="end">
			<IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
		    </IonButtons>
		</IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
		<IonText>
		<p>
		    The <strong>Smart Pantry</strong> is a collaboration between the Hunter College Food Policy Center and nationally renowned non profit Share Meals. It is the result of 6 years of research and development, including interviews with major stakeholders in college food pantries: directors, workers, community partners, students who use them. We even talked with college admins who tried to start a food pantry and could not.
		</p>
		
		<p>
		    The <strong>Smart Pantry</strong> an upgrade about the size of a deck of playing cards; when plugged into to a standard vending machine, the machine turns into a fully automated food pantry. What an ATM is to a bank, the <strong>Smart Pantry</strong> is to a food pantry. It solves the major pain points that we have heard and continue to hear from college food pantry staff across the US:
		</p>

		<ul>
		    <li>not enough space</li>
		    <li>not enough staffing</li>
		    <li>students feel stigmatized to the point of not getting help when they need it</li>
		    <li>not enough opening hours to accommodate students with difficult schedules</li>
		    <li>no longitudinal or cross sectional data analytics</li>
		</ul>
		
		<p>
		The <strong>Smart Pantry</strong> addresses all of these in an easy, plug-and-play way. The food being stocked is healthy and approved by our nutrition graduate students. We are testing with specialty vending machines, such as refrigerated ones, that allow us to distribute fresh produce.
		</p>
		
		<p>
		The <strong>Smart Pantry</strong> is a revolutionary part of the solution to achieving a hunger free campus at Hunter and across the country.
		</p>
		</IonText>
            </IonContent>
	</IonModal>
    </div>
};

const Page: React.FC<{children: React.JSX.Element}> = ({children}) => <>
    <IonPage>
	<IonContent>
	    <Header />
	    <div style={{maxWidth: 1000, margin: 'auto', paddingLeft: '2rem', paddingRight: '2rem'}}>
		{children}
	    </div>
	    <Footer />
	</IonContent>
    </IonPage>
</>;

const App: React.FC = () => (
    <IonApp>
	<IonReactRouter>
	    <IonRouterOutlet>
		<Route exact path="/">
		    <Page>
			<Home />
		    </Page>
		</Route>
		<Route exact path="/complete">
		    <Page>
			<Complete />
		    </Page>
		</Route>
		<Route>
		    {/* catchall */}
		    <Redirect to="/" />
		</Route>
	    </IonRouterOutlet>
	</IonReactRouter>
    </IonApp>
);

export default App;
