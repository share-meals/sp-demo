import {
    Input,
    Radio
} from '@share-meals/frg-ui';
import type {RadioOption} from '@share-meals/frg-ui';
import {
    IonText,
} from '@ionic/react';
import veggies from '../assets/veggies.svg';

export const Complete: React.FC = () => {
    return <>
	<IonText className='ion-text-center'>
	    <h1>
		Thanks!
	    </h1>
	    <p>
		<a href='/'>
		    Go back
		</a>
	    </p>
	</IonText>
	<div className='ion-text-center'>
	    <img src={veggies} style={{width: '80%'}} />
	</div>
    </>;
};
