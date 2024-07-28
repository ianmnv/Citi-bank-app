import React, { useContext, useEffect, useState } from "react";

import FullContext from "../FullContext";

function Money() {
  const { currentUser } = useContext(FullContext);
  const [dates, setDates] = useState([]);

  function formatDates(date) {
    const format = new Intl.DateTimeFormat(navigator.locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

    return format;
  }

  function createDates(count) {
    const dates = [];

    for (let i = 0; i < count; i++) {
      const day = Math.trunc(Math.random() * 31) + 1;
      const month = Math.floor(Math.random() * new Date().getMonth());
      const year = new Date().getFullYear();
      dates.push(new Date(year, month, day));
    }

    return dates;
  }

  function formatNumber(amount) {
    const formatNum = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return formatNum;
  }

  useEffect(() => {
    const datesArr = createDates(currentUser.movements.length).sort(
      (a, b) => b - a
    );
    setDates(datesArr);
  }, []);

  return (
    <>
      <section className="personal-h1-c">
        <h1 className="personal-h1">YOUR MONEY</h1>
      </section>

      <main className="personal-info-container">
        <div id="balance-c">
          <div className="balance-i total-b">
            <p className="balance-t">Total balance:</p>
            <p className="balance-t">
              <strong>
                {formatNumber(
                  currentUser.movements.reduce((acc, move) => acc + move, 0)
                )}
              </strong>
            </p>
          </div>

          <div className="balance-i move-in">
            <p className="balance-t">Deposits:</p>
            <p className="balance-t">
              <strong>
                {formatNumber(
                  currentUser.movements
                    .filter((move) => move > 0)
                    .reduce((acc, move) => acc + move, 0)
                )}
              </strong>
            </p>
          </div>

          <div className="balance-i move-out">
            <p className="balance-t">Withdrawals:</p>
            <p className="balance-t">
              <strong>
                {formatNumber(
                  currentUser.movements
                    .filter((move) => move < 0)
                    .reduce((acc, move) => acc + move, 0)
                )}
              </strong>
            </p>
          </div>
        </div>

        <div id="movement-titles-c">
          <p className="move-title ">Date</p>
          <p className="move-title move-in">IN</p>
          <p className="move-title move-out">OUT</p>
          <p className="move-title ">Concept</p>
        </div>

        {currentUser.movements.map((el, i) => {
          console.log(currentUser.descriptionMove);
          return (
            <div className="movement-c" key={i}>
              <span className="move-info">{formatDates(dates[i])}</span>
              <span
                className={`move-amount move-info ${
                  el > 0 ? "move-in" : "move-out"
                }`}
                style={
                  el > 0 ? { gridColumn: "2 / 3" } : { gridColumn: "3 / 4" }
                }
              >
                {el > 0
                  ? `${formatNumber(el)}`
                  : `-${formatNumber(Math.abs(el))}`}
              </span>
              <span className="move-info description">
                {currentUser.descriptionMove[i]}
              </span>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Money;
