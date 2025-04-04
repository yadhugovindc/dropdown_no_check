import React, { useRef, useState } from "react";

const NumberChecker = () => {
  const [number, setNumber] = useState("");
  const [selectedCheck, setSelectedCheck] = useState("palindrome");
  const [result, setResult] = useState("");
  const input=useRef(null)

  const isPalindrome = (num) => {
    const strNum = num.toString();
    return strNum === strNum.split("").reverse().join("");
  };

  const isArmstrong = (num) => {
    const digits = num.toString().split("").map(Number);
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
    return sum === num;
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    if(input.current.value != ''){
         
       if(selectedCheck === 'palindrome'){
        if(isPalindrome(number)){
          setResult(`${number} is a palindrome`);
        }
        else{
          setResult(`${number} is not a palindrome`);
        }
       }
       else if(selectedCheck === 'armstrong'){
        if(isArmstrong(number)){
          setResult(`${number} is an armstrong number`);
        }
        else{
         setResult(`${number} is not an armstrong number`);
        }
       }
       else if(selectedCheck === 'prime'){
        if(isPrime(number)){
          setResult(`${number} is a prime number`);
        }
        else{
         setResult(`${number} is not a prime number`);
        }
       }
       input.current.value = '';
    }
    else{
      alert('Please enter a number');
    }
}


  

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Number Checker</h2>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} ref={input}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedCheck}
            onChange={(e) => setSelectedCheck(e.target.value)}
          >
            <option value="select" disabled>select</option>
            <option value="palindrome">Palindrome</option>
            <option value="armstrong">Armstrong</option>
            <option value="prime">Prime</option>
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={handleCheck}>
          Check {selectedCheck}
        </button>
        {result && <div className="alert alert-info mt-3 text-center">{result}</div>}
      </div>
    </div>
  );
};

export default NumberChecker;
