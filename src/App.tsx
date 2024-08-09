import {useCallback, useMemo, useState} from 'react';
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

    const [validationError, setValidationError] = useState<string | undefined>(undefined);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValidationError(validateInputData(event));

            setInputData({
                ...inputData,
                [event.target.name]: +event.target.value,
            });
        },
        [inputData]
    );

    const handleCalculate = useCallback(() => {
        const results = calculateMonthlyPayment(inputData);
        setOutputData(results);
    }, [inputData]);

    const totalPayment = useMemo(() => calculateTotalPayment(outputData), [outputData]);

    return (
        <>
            <h1>Кредитный калькулятор</h1>
            <Header validationError={validationError} onChange={handleChange} onCalculate={handleCalculate} />
            {validationError && <div className="validate">{validationError}</div>}
            {outputData.length > 0 && <div className="totalPayment">Всего выплат: {totalPayment}</div>}
            <Table outputData={outputData} />
        </>
    );
}

export default App;
