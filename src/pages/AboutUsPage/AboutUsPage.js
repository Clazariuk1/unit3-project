import { useState, useEffect, useRef } from 'react'
import styles from './AboutUsPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Newsletter from '../../components/Newsletter/Newsletter';

const handleSubscribe = () => {
    return !subscriberEmail ? alert('invalid email') : alert('subscribed!')
}

export default function AboutUs() {
    const [subscriberEmail, setSubscriberEmail] = useState('')
    return(
        <main className={styles.AboutUsPage}>
        <h1>THIS IS THE COMPANY'S ABOUT PAGE.</h1>
        <div className={styles.stories}>
        <p className={styles.story}>more stories about our mission.</p>
        <p className={styles.story}>Tell me a story about how much I love </p>
        <aside>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqVr51Afo4NNcealtctOEp_flIYJCEpuFuA&usqp=CAU" />
        <p>More text about stuff you want to hear</p>
        <Newsletter
        subscriberEmail={subscriberEmail}
        setSubscriberEmail={setSubscriberEmail}
        />
        </aside>
        </div>
        </main>
    )
}
