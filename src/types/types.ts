export interface CreditInputData {
    amount: number
    months: number
    rate: number
}

export interface CreditOutputData {
    month: number
    remaining: number
    payment: number
    interest: number
    debt: number
}