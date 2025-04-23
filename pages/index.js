import Head from 'next/head';
import BMICalculator from '../components/BMICalculator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional BMI Calculator</title>
        <meta name="description" content="Calculate your Body Mass Index" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      
      <main style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <BMICalculator />
      </main>
    </>
  )
}