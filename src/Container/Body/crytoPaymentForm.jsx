import React, { useState } from "react";
import "./Wallet.css";
const CryptoPaymentsForm = (props) => {
  const [transferHash, setTransferHash] = useState();

  const transferHandler = async (e) => {
    e.preventDefault();
    let transferAmount = e.target.sendAmount.value;
    let recieverAddress = e.target.recieverAddress.value;

    let txt = await props.contract.transfer(recieverAddress, transferAmount);
    console.log(txt);
    setTransferHash("Transfer confirmation hash: " + txt.hash);
  };

  return (
    <div className="walletform card">
      <form onSubmit={transferHandler}>
        <h3> Transfer Coins </h3>
        <p> Reciever Address </p>
        <input type="text" id="recieverAddress" />

        <p> Send Amount </p>
        <input type="number" id="sendAmount" min="0" />
        <br />

        <button type="submit" className="btn btn-primary mt-2 mr-10">
          Send
        </button>
        <div>{transferHash}</div>
      </form>
    </div>
  );
};
export default CryptoPaymentsForm;
