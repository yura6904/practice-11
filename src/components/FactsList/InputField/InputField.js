
function InputField(props) {
    return (
      <div className="InputField">
        <p>Введите количество фактов</p>
        <input type='number' min='0' max={props.maxNumberOfFacts} value={props.maxNumber}
          step='1' onChange={(e) => props.onChangeHandler(e.target.value)} />
      </div>
    );
  }
  
  export default InputField;
  