import {CreditInputData, CreditOutputData} from '../types/types';

export const calculateMonthlyPayment = (inputData: CreditInputData): CreditOutputData[] => {
    const {amount, months, rate} = inputData;

    if (amount <= 0 || months <= 0 || rate <= 0) {
        return [];
    }

    const results: CreditOutputData[] = [];

    let remainingAmount = amount;
    const interestRate = rate / 100 / 12;
    const monthlyPayment = Math.ceil(
        remainingAmount * (interestRate + interestRate / ((1 + interestRate) ** months - 1))
    );

    for (let month = 0; month < months; month++) {
        const monthlyInterest = Math.ceil(remainingAmount * interestRate);
        const monthlyDebt = monthlyPayment - monthlyInterest;

        results.push({
            month: month + 1,
            debt: monthlyDebt,
            payment: monthlyPayment,
            interest: monthlyInterest,
            remaining: remainingAmount,
        });

        remainingAmount -= monthlyDebt;
    }

    const lastMonthDebt = results[results.length - 1].debt;
    const lastMonthRemain = results[results.length - 1].remaining;

    if (lastMonthRemain !== lastMonthDebt) {
        const lastMonthPayment = monthlyPayment + Math.abs(lastMonthRemain - lastMonthDebt);
        results[results.length - 1].debt = lastMonthRemain;
        results[results.length - 1].payment = lastMonthPayment;
    }

    return results;
};

export const calculateTotalPayment = (outputData: CreditOutputData[]): number => {
    return outputData.reduce((acc, data) => acc + data.payment, 0);
};
