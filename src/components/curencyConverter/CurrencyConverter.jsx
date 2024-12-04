import Button from "../../helpers/Button";

function CurrencyConverter({
  currency,
  baseCurrency,
  targetCurrency,
  availableCurrencies,
  handleChangeCurrencyBase,
  handleChangeCurrencyTarget,
  amount,
  setAmount,
  handleKeyDown,
  clearInput,
}) {
  const convertedAmount =
    currency[targetCurrency] && amount
      ? (amount * currency[targetCurrency]).toFixed(2)
      : "";

  return (
    <div className="currencyConverter">
      <div className="converterBlocksContainer">
        <div className="converterBlock">
          <h2 className="converterHeader">From currency</h2>
          <ul className="currencyTabs">
            {availableCurrencies.map((item) => (
              <li
                key={item}
                className={`currencyTab ${
                  baseCurrency === item ? "activeTab" : ""
                }`}
                onClick={() => handleChangeCurrencyBase(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="inputWrapperConverter">
            <input
              type="number"
              className="amountInput"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === "" ? "" : Number(e.target.value))
              }
              onKeyDown={handleKeyDown}
              placeholder="Enter amount"
            />
            {amount && (
              <Button
                className="clearButtonInput"
                PressMe={clearInput}
                text={"x"}
              />
            )}
          </div>
        </div>
        <div className="exchangeArrow">↔</div>
        <div className="converterBlock">
          <h2 className="converterHeader">To currency</h2>
          <ul className="currencyTabs">
            {availableCurrencies.map((item) => (
              <li
                key={item}
                className={`currencyTab ${
                  targetCurrency === item ? "activeTab" : ""
                }`}
                onClick={() => handleChangeCurrencyTarget(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="amountInput"
            value={convertedAmount}
            readOnly
          />
        </div>
      </div>
      <div className="exchangeRate">
        <h2>Exchange Rate:</h2>
        <p>
          {currency[targetCurrency]
            ? `${baseCurrency} -> ${targetCurrency}: ${currency[targetCurrency]}`
            : "No data available"}
        </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
