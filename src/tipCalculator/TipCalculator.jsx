import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentageF, setPercentageF] = useState(0);
  const tip = bill * ((percentage + percentageF) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage(0);
    setPercentageF(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage} onSetPercentage={setPercentage}>
        How much you like our services?
      </SelectPercentage>

      <SelectPercentage
        percentage={percentageF}
        onSetPercentage={setPercentageF}
      >
        How much your friend like our services?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onHandleReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
