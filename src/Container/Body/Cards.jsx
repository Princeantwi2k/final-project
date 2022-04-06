import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import pic from "../../images/pic.jpg";
import pic1 from "../../images/coin.jpg";
import pic2 from "../../images/tether.jpg";
import pic3 from "../../images/btc.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1> THE ALL-IN-ONE MOBILE BANKING EXPERIENCE</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pic1}
              text="TBitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
              label="Bitcon"
              path="/crypto"
            />
            <CardItem
              src={pic2}
              text="Tether is a cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains, among others. Its tokens are issued by the Hong Kong company Tether Limited, which in turn is controlled by the owners of Bitfinex"
              label="Tether"
              path="/crypto"
            />

            <CardItem
              src={pic3}
              text="Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform"
              label="Etherem"
              path="/crypto"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
