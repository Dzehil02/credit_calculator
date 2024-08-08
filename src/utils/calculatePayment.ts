import { CreditInputData, CreditOutputData } from "../types/types";

export const calculateMonthlyPayment = (inputData: CreditInputData) => {
    const {amount, months, rate} = inputData;

    if (amount <= 0 || months <= 0 || rate <= 0) {
      return []
    }
    
    const results = [];
  
    let S = amount;
    const P = rate / 100 / 12;
    const monthlyPayment = Math.ceil(S * (P + P / ((1 + P) ** months - 1)));
  
    for (let i = 0; i < months; i++) {
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

    if (lastMonthRemain !== lastMonthDebt) {
      const lastMonthPayment = monthlyPayment + Math.abs(lastMonthRemain - lastMonthDebt)
      results[results.length - 1].debt = lastMonthRemain
      results[results.length - 1].payment = lastMonthPayment
    }

    return results;
  };

  export const calculateTotalPayment = (outputData: CreditOutputData[]) => {
    return outputData.reduce((acc, data) => acc + data.payment, 0);
  }