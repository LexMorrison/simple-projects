import { useState, useEffect } from "react";
import getCurrency from "../api/currencyApi";
import CurrencyConverter from "../components/curencyConverter/CurrencyConverter";

const availableCurrencies = [
  "USD",
  "EUR",
  "NOK",
  "DKK",
  "JPY",
  "GBP",
  "PLN",
  "CAD",
  "KRW",
];

function CurrencyConverterPage() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [currency, setCurrency] = useState({});
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      setIsLoading(true);
      try {
        const data = await getCurrency(baseCurrency);
        setCurrency(data.data);
      } catch (error) {
        console.error("Error fetching currency");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();
  }, [baseCurrency]);

  const handleChangeCurrencyBase = (item) => {
    setBaseCurrency(item);
  };

  const handleChangeCurrencyTarget = (item) => {
    setTargetCurrency(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setAmount("");
    }
  };

  const clearInput = () => {
    setAmount("");
  };

  return (
    <section className="converterSection">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CurrencyConverter
          currency={currency}
          baseCurrency={baseCurrency}
          targetCurrency={targetCurrency}
          availableCurrencies={availableCurrencies}
          handleChangeCurrencyBase={handleChangeCurrencyBase}
          handleChangeCurrencyTarget={handleChangeCurrencyTarget}
          amount={amount}
          setAmount={setAmount}
          handleKeyDown={handleKeyDown}
          clearInput={clearInput}
        />
      )}
    </section>
  );
}

export default CurrencyConverterPage;
