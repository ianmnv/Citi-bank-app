import React from "react";

function Money() {
  return (
    <>
      <div className="personal-h1-c">
        <h1 className="personal-h1">YOUR MONEY</h1>
      </div>

      <div className="personal-info-container">
        <div id="balance-c">
          <div className="balance-i total-b">
            <p className="balance-t">Total balance:</p>
            <p className="balance-t">
              $ <strong>3000.00</strong>
            </p>
          </div>

          <div className="balance-i move-in">
            <p className="balance-t">Deposits:</p>
            <p className="balance-t">
              $ <strong>3000.00</strong>
            </p>
          </div>

          <div className="balance-i move-out">
            <p className="balance-t">Withdrawals:</p>
            <p className="balance-t">
              $ <strong>3000.00</strong>
            </p>
          </div>
        </div>

        <div id="movement-titles-c">
          <p className="move-title ">Date</p>
          <p className="move-title move-in">IN</p>
          <p className="move-title move-out">OUT</p>
          <p className="move-title ">Description</p>
        </div>

        <div className="movement-c">
          <span className="move-info">June 20th, 2024</span>
          <span className="move-amount move-info">$500.00</span>
          <span className="move-info description">Costco</span>
        </div>
        <div className="movement-c">
          <span className="move-info">June 22th, 2024</span>
          <span className="move-amount move-info">$120.00</span>
          <span className="move-info description">KFC</span>
        </div>
        <div className="movement-c">
          <span className="move-info">June 29th, 2024</span>
          <span className="move-amount move-info">$49.00</span>
          <span className="move-info description">Shoppers</span>
        </div>
      </div>
    </>
  );
}

export default Money;
