import { useState, useEffect, useRef } from 'react'
import styles from './AboutUsPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Newsletter from '../../components/Newsletter/Newsletter';
import NavBar from '../../components/NavBar/NavBar'


const handleSubscribe = () => {
    return !subscriberEmail ? alert('invalid email') : alert('subscribed!')
}

export default function AboutUs() {
    const [subscriberEmail, setSubscriberEmail] = useState('')
    return (
        <main className={styles.AboutUsPage}>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.subHeader}>
                    <Logo />
                    <div className={styles.titles}>
                        <h1 className={styles.title}>More About Us</h1>
                        <h1 className={styles.title}>Humble Beginnings and Ambitious Futures</h1>
                    </div>
                </div>
                <div className={styles.stories}>
                    <h3 className={styles.subtitle}>Our Mission</h3>
                    <p className={styles.story}>To grant technologically averse people and businesses with the opportunity to realize their dreams, ideas, and big projects- by hiring someone qualified and eager for the job! We'll get that million dollar idea of yours off the ground in no time, no project too big or small!”</p>
                    <br></br>
                    <p className={styles.story}>Founded by a trio of bootcamp alumni in the early days of 2024, Dev Dependency found its humble beginnings with one goal in mind: to financially survive in these times of feast and famine. From building websites to walking your dog. We just need a paycheck and we'll do whatever it takes to feed our families. Oh yeah right and we love software and all that stuff, too.</p>
                    <div className={styles.column}>
                        <h3 className={styles.subtitle}>Our Creed</h3>
                        <p className={styles.creed}>To the moon!</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqVr51Afo4NNcealtctOEp_flIYJCEpuFuA&usqp=CAU" />
                        <Newsletter
                            subscriberEmail={subscriberEmail}
                            setSubscriberEmail={setSubscriberEmail}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
