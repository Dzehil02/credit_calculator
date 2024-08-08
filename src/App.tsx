import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import { CreditInputData, CreditOutputData } from './types/types'

function App() {

  const [inputData, setInputData] = useState<CreditInputData>({
    amount: 0,
    months: 0,
    rate: 0
  })

  const [outputData, setOutputData] = useState<CreditOutputData[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [event.target.name]: +event.target.value
    })
  }

  const handleCalculate = () => {
    const results = [];
  
    let S = inputData.amount;
    const P = inputData.rate / 100 / 12;
    const monthlyPayment = Math.ceil(S * (P + P / ((1 + P) ** inputData.months - 1)))
  
    for (let i = 0; i < inputData.months; i++) {
      const monthlyInterest = Math.ceil(S * P);
      const monthlyDebt = monthlyPayment - monthlyInterest;
  
      results.push({
        month: i + 1,
        debt: monthlyDebt,
        payment: monthlyPayment,
        interest: monthlyInterest,
        remaining: S
      });

      S -= monthlyDebt;
      
    }
    const lastMonthDebt = results[results.length - 1].debt;
    const lastMonthRemain = results[results.length - 1].remaining;

    if (lastMonthRemain - lastMonthDebt > 0) {
      const lastMonthPayment = monthlyPayment + lastMonthRemain - lastMonthDebt
      results[results.length - 1].debt = lastMonthRemain
      results[results.length - 1].payment = lastMonthPayment
    }
    setOutputData(results);
  };

  return (
    <>
      <h1>Кредитный калькулятор</h1>
      <div className="header">
        <InputBox inputName="amount" changeInput={handleChange} label="Сумма" placeholder="Сумма кредита"/>
        <InputBox inputName="months" changeInput={handleChange} label="Срок (в месяцах)" placeholder="Срок кредита"/>
        <InputBox inputName="rate" changeInput={handleChange} label="Процентная ставка" placeholder="Процентная ставка"/>
        <button onClick={handleCalculate}>Расчёт</button>
      </div>

      <div className="output">
        <table className="table">
          <thead>
            <tr>
              <th>Месяц</th>
              <th>Остаток</th>
              <th>Платеж</th>
              <th>Долговая часть</th>
              <th>Процентная часть</th>
            </tr>
          </thead>
          <tbody>
            {outputData.map((data) => (
              <tr key={data.month}>
                <td>{data.month}</td>
                <td>{data.remaining}</td>
                <td>{data.payment}</td>
                <td>{data.debt}</td>
                <td>{data.interest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
