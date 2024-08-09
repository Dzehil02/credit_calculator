interface InputBoxProps {
    label: string;
    placeholder: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({label, placeholder, name, onChange}: InputBoxProps) {
    return (
        <div className="inputBox">
            <label className="label">{label}</label>
            <input name={name} onChange={onChange} type="string" placeholder={placeholder} />
        </div>
    );
}

export default InputBox;
