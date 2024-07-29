import { createContext, useEffect, useState, useContext } from "react";

// Create context with a default value
const CurrencyContext = createContext({
  data: [],
  currency: "usd",
  setCurrency: () => {},
});

const CurrencyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData[currency]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ data, currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyContext, CurrencyContextProvider };
