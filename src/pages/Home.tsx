import {
    Input,
    Radio
} from '@share-meals/frg-ui';
import type {RadioOption} from '@share-meals/frg-ui';
import {
    IonButton,
    IonText,
    useIonLoading
} from '@ionic/react';
import {
    useForm
} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { useHistory } from 'react-router-dom';

const options: RadioOption[] = [
    {
	name: 'Often True',
	value: 'often',
    },
    {
	name: 'Sometimes True',
	value: 'sometimes',
    },
    {
	name: 'Never True',
	value: 'never',
    },
    {
	name: `Don't Know`,
	value: 'unknown',
    }
]

export const Home: React.FC = () => {
    const [startLoading, stopLoading] = useIonLoading();
    const history = useHistory();
    
    const schema = z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
	q1: z.string().optional(),
	q2: z.string().optional()
    });

    const {
	control,
	handleSubmit,
	formState: { errors, isValid},
    } = useForm<z.infer<typeof schema>>({
        mode: 'onChange',
        resolver: zodResolver(schema)
    });

    const onSubmit = handleSubmit((response) => {
	//startLoading();
	fetch('https://vendrequest-dr7r4rzeoa-uc.a.run.app', {
	    method: 'GET',
	    /*
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(response)
	    */
	}).then(() => {
	    //stopLoading();
	    history.push('/complete');
	}).catch((error) => {
	    // todo: toast error
	    //stopLoading();
	    history.push('/complete');
	});
    });

    return <>
	<IonText>
	    <p>
		Congratulations! You have are one of the <strong>first</strong> people to try the Smart Pantry, a scaleable, cost efficient solution to food security. Here is a sample, <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6419517' target='_new'>research backed</a> survey that users would fill out before receiving nutritious food for free:
	    </p>
	</IonText>
	<form onSubmit={onSubmit}>
	    <IonText>
		<p>
		    1. We worried whether our food would run out before we got money to buy more.
		    <br />
		    In the last 12 months, this statement was:
		</p>
	    </IonText>
	    <Radio
		control={control}
		mode='md'
		name='q1'
		options={options}
	    />
	    <IonText>
		<p>
		    2. The food we bought just didn't last and we didn't have money to get more.
		    <br />
		    In the last 12 months, this statement was:
		</p>
	    </IonText>
	    <Radio
		control={control}
		labelPlacement='end'
		mode='md'
		name='q2'
		options={options}
	    />

	    <IonText>
		<h2 style={{fontSize: '1.2rem', marginBottom: 0}} className='ion-text-center'>
		    Want to learn more?
		</h2>
		<p style={{marginTop: 0}}>
		    Leave your name and email address; we will <strong>only</strong> email you (sparingly!) about Smart Pantry updates.
		</p>
	    </IonText>
	    <Input
		control={control}
		fill='outline'
		label='name'
		mode='md'
		name='name'
		type='text'
	    />
	    <Input
		className='ion-margin-top'
		control={control}
		fill='outline'
		label='email'
		mode='md'
		name='email'
		type='email'
	    />

	    <div className='ion-text-center'>
		<IonButton
		    className='ion-margin-top'
		    shape='round'
		    size='large'
		    type='submit'
		>
		    Get Food!
		</IonButton>
	    </div>
	</form>
    </>;
};
