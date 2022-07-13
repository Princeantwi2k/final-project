import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./Buy.css";

const Buycrypto = () => {
  const publicKey = process.env.REACT_APP_Pay_Stack_Key;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [walletAddress, setWalletAdress] = useState("");

  const componentProps = {
    email,
    amount,
    type,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Purchase crypto",
    onSuccess: () => {
      setEmail("");
      setName("");
      setPhone("");
      setAmount("");
      setType("");
      setWalletAdress("");
    },
    onClose: () => alert("Wait! Purchase some crypto, don't go!!!!"),
  };

  return (
    <div className="Buy">
      <div className="container">
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Preferred currency</label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Amount</label>
              <input
                type="text"
                id="amount"
                value={amount}
                GHS
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAdress(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buycrypto;
