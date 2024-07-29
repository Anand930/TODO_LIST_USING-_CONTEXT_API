import InputComponent from "./InputComponent";
import { useContext, useState } from "react";
import { CurrencyContext } from "./Context";

export default function App() {
  const { data,currency, setCurrency } = useContext(CurrencyContext);
  const [from, setFrom] = useState(currency);
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [readStatus, setReadStatus] = useState(false)
  const [convertedAmount, setConvertedAmount] = useState(0);

  const setAmountHandler = (e)=>{
    setAmount(e.target.value)
  }
 
  
  const options = Object.keys(data);
  return (
    <div className="App">
      <InputComponent amount={amount} onChangeHandler={setAmountHandler} lableValue={"From"} isReadOnly={readStatus} optionChange={(e)=>setFrom(e.target.value)} options={options} selectValue={from}/>
      <InputComponent lableValue={"To"} isReadOnly={readStatus} optionChange={(e)=>setTo(e.target.value)} options={options} selectValue={to}/>
    </div>
  );
}
