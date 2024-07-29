const InputComponent = ({
  lableValue,
  onChangeHandler,
  selectValue,
  amount,
  optionChange,optionValue,
  isReadOnly
}) => {
  return (
    <div>
      <label htmlFor="">{lableValue}</label>
      <input type="text" value={amount} onChange={onChangeHandler} readOnly={isReadOnly} />
      <select value={selectValue}>
        {options.map((option, i) => (
          <option  onChange={optionChange} key={i}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default InputComponent;
