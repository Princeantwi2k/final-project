import React, { useState, useEffect } from "react";
import Buycrypto from "./BuyCrypto";
import { ethers } from "ethers";
import simple_token_abi from "../Contracts/simple_token_abi.json";

const Buy = () => {
  let contractAddress = "0xf26b7a6fae931c44b6fc7378c9a38d9b4ba347e6";

  const [tokenName, setTokenName] = useState("Token");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  const updateBalance = async () => {
    let balanceBigN = await contract.balanceOf(defaultAccount);
    let balanceNumber = balanceBigN.toNumber();

    let tokenDecimals = await contract.decimals();

    let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);

    setBalance(toFixed(tokenBalance));
  };

  function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return x;
  }

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      simple_token_abi,
      tempSigner
    );
    setContract(tempContract);
  };

  useEffect(() => {
    if (contract != null) {
      updateBalance();
      updateTokenName();
    }
  }, [contract]);

  const updateTokenName = async () => {
    setTokenName(await contract.name());
  };

  return (
    <div className="wallet ">
      <div className="mainwallets">
        <h2 className="walletname"> {tokenName + "  Wallet"} </h2>
        <button
          onClick={connectWalletHandler}
          className="btn btn-primary walletbutton"
        >
          {connButtonText}
        </button>
        <p>Address: {defaultAccount}</p>

        {errorMessage}
        <p style={{ color: "red" }}> ***please install metamask</p>
      </div>
      <Buycrypto contract={contract} />
    </div>
  );
};

export default Buy;
