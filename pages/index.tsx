import { useAuth0 } from '@auth0/auth0-react'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLoginButtonClicked = useCallback(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  const handleLogoutButtonClicked = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SPA Login Learning
        </h1>
        {isAuthenticated && <button className="bg-white shadow-md rounded-md p-1 bg-primary" onClick={handleLogoutButtonClicked}>ログアウト</button>}
        {!isAuthenticated && <button onClick={handleLoginButtonClicked}>ログイン</button>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
