import InputBox from "./InputBox"

interface HeaderProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleCalculate: () => void
    validate?: string | undefined
}
  
function Header({handleChange, handleCalculate, validate}: HeaderProps) {

return (
    <div className="header">
    <InputBox inputName="amount" changeInput={handleChange} label="Сумма" placeholder="Сумма кредита"/>
    <InputBox inputName="months" changeInput={handleChange} label="Срок (в месяцах)" placeholder="Срок кредита"/>
    <InputBox inputName="rate" changeInput={handleChange} label="Процентная ставка" placeholder="Процентная ставка"/>
    <button disabled={validate ? true : false} onClick={handleCalculate}>Расчёт</button>
  </div>
)}

export default Header