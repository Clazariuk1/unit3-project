import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import MatrixBackground from '../../components/MatrixBackground';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <MatrixBackground />
      <h1 className={styles.heading}>Hire an Affordable Dev Team Today for All Your Software Needs!</h1>
      <div className={styles.logoButton}>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <a className={styles.portfolioLink} href="https://portfolio.christopherlazariuk.me">Portfolio Home</a>

    </main>
  );
}
