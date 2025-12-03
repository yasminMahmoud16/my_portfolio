import { useState } from "react";

export const useSymbols = () => {
  const [symbolsData, setSymbolsData] = useState(() => {
    // Generate once on initial mount using an initializer function
    return generateSymbols();
  });

  // If you ever need to regenerate (e.g. on window resize or manually), do it in useEffect
  // useEffect(() => {
  //   setSymbolsData(generateSymbols());
  // }, []); // only once, or add dependencies if needed

  return symbolsData;
};

// Pure helper function - can be called safely
function generateSymbols() {
  const symbolsArray = ["{ }", "</>", "()", "<>"];

  return Array.from({ length: 20 }, () => ({
    symbol: symbolsArray[Math.floor(Math.random() * symbolsArray.length)],
    top: Math.random() * 100,
    left: Math.random() * 100,
    rotate: Math.random() * 360,
    fontSize: 20 + Math.random() * 15,
    opacity: 0.2 + Math.random() * 0.5,
  }));
}