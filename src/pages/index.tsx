import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RentaAmigos | Home</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to</h1>
      </main>
    </div>
  )
}
export default Home
