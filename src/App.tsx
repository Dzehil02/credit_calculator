import {useState} from 'react';
import './App.css';
import {CreditInputData, CreditOutputData} from './types/types';
import {calculateMonthlyPayment, calculateTotalPayment} from './utils/calculatePayment';
import Table from './components/Table';
import Header from './components/Header';
import {validateInputData} from './utils/validateInputData';

function App() {
    const [inputData, setInputData] = useState<CreditInputData>({
        amount: 0,
        months: 0,
        rate: 0,
    });

    const [outputData, setOutputData] = useState<CreditOutputData[]>([]);

    const [validate, setValidate] = useState<string | undefined>(undefined);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidate(validateInputData(event));

        setInputData({
            ...inputData,
            [event.target.name]: +event.target.value,
        });
    };

    const handleCalculate = () => {
        const results = calculateMonthlyPayment(inputData);
        setOutputData(results);
    };

    const totalPayment = calculateTotalPayment(outputData);

    return (
        <>
            <h1>Кредитный калькулятор</h1>
            <Header validate={validate} handleChange={handleChange} handleCalculate={handleCalculate} />
            {validate && <div className="validate">{validate}</div>}
            {outputData.length > 0 && <div className="totalPayment">Всего выплат: {totalPayment}</div>}
            <Table outputData={outputData} />
        </>
    );
}

export default App;
