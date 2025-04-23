import { useState } from 'react';
import styles from '../styles/BMICalculator.module.css';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight values');
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(calculatedBmi * 10) / 10;

    setBmi(roundedBMI);
    determineCategory(roundedBMI);
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const getCategoryClass = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return styles.underweight;
    if (bmi >= 18.5 && bmi <= 24.9) return styles.normal;
    if (bmi >= 25 && bmi <= 29.9) return styles.overweight;
    return styles.obese;
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorHeader}>
        <h1><i className="fas fa-calculator"></i> BMI Calculator</h1>
        <p>Calculate your Body Mass Index</p>
      </div>
      
      <div className={styles.calculatorBody}>
        <div className={styles.inputGroup}>
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculateBMI()}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculateBMI()}
          />
        </div>
        
        <button className={styles.calculateBtn} onClick={calculateBMI}>
          Calculate BMI
        </button>
        
        {bmi && (
          <div className={`${styles.resultContainer} ${styles.show}`}>
            <div className={styles.bmiValue}>Your BMI: <span className={styles.bmiNumber}>{bmi}</span></div>
            <div className={`${styles.category} ${getCategoryClass()}`}>{category}</div>
            <div className={styles.bmiRange}>Healthy weight range: 18.5 - 24.9</div>
          </div>
        )}
      </div>
      
      <div className={styles.calculatorFooter}>
        <div className={styles.bmiInfo}>
          <h3>BMI Categories:</h3>
          <ul>
            <li><span className={styles.underweight}>Underweight</span>: BMI less than 18.5</li>
            <li><span className={styles.normal}>Normal weight</span>: BMI 18.5 - 24.9</li>
            <li><span className={styles.overweight}>Overweight</span>: BMI 25 - 29.9</li>
            <li><span className={styles.obese}>Obese</span>: BMI 30 or greater</li>
          </ul>
        </div>
        <p className={styles.disclaimer}>* This calculator is for informational purposes only. Consult a healthcare professional for medical advice.</p>
      </div>
    </div>
  );
}