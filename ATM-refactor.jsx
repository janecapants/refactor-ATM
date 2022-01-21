

const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ['Deposit', 'Withdraw'];
return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width='200' onChange={onChange}></input>
      <input type="submit" width='200' value = "Submit" ></input>
      
    </label>
  );
};
 

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
const [totalState, setTotalState] = React.useState(0);
const [isDeposit, setIsDeposit] = React.useState(true);
const [atmMode, setAtmMode] = React.useState('');
const [validTransaction, setValidTransaction] = React.useState(false);


let status = `Account Balance $ ${totalState}`;
console.log(`Account Rendered ${isDeposit}`);
const handleChange = (event) => {
  console.log(`handleChange ${event.target.value}`);
  deposit = Number(event.target.value);
  if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
};
const handleSubmit = (event) => {
  let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
  setTotalState(newTotal);
  event.preventDefault();
};
  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id = 'total'>{status} </h2>

      <button onClick={() =>setIsDeposit(true)}>Deposit</button>
      <button onClick={() =>setIsDeposit(false)}>Withdraw</button>
       
<ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
