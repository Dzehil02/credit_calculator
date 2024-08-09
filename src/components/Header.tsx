import {memo} from 'react';
import InputBox from './InputBox';

interface HeaderProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCalculate: () => void;
    validationError?: string | undefined;
}

const Header = memo(({onChange, onCalculate, validationError}: HeaderProps) => {
    return (
        <div className="header">
            <InputBox name="amount" onChange={onChange} label="Сумма" placeholder="Сумма кредита" />
            <InputBox name="months" onChange={onChange} label="Срок (в месяцах)" placeholder="Срок кредита" />
            <InputBox name="rate" onChange={onChange} label="Процентная ставка" placeholder="Процентная ставка" />
            <button disabled={validationError ? true : false} onClick={onCalculate}>
                Расчёт
            </button>
        </div>
    );
});

export default Header;
