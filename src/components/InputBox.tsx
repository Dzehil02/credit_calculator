interface InputBoxProps {
    label: string
    placeholder: string
    inputName: string
    changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function InputBox({label, placeholder, inputName, changeInput}: InputBoxProps) {

    return (
      <div className="inputBox">
        <label className="label">{label}</label>
        <input name={inputName} onChange={changeInput} type="number" placeholder={placeholder} min={0} />
      </div>
    )
  }
  
  export default InputBox