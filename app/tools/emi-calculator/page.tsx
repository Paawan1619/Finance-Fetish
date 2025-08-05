
'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatbotIcon from '../../components/ChatbotIcon';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTenure, setLoanTenure] = useState('20');
  const [inflationRate, setInflationRate] = useState('6');
  const [showInflationImpact, setShowInflationImpact] = useState(true);
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / (12 * 100);
    const numberOfPayments = parseInt(loanTenure) * 12;
    const inflation = parseFloat(inflationRate) / 100;

    if (monthlyRate === 0) {
      const emi = principal / numberOfPayments;
      const totalAmount = emi * numberOfPayments;
      const totalInterest = totalAmount - principal;
      
      setResult({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        realEMI: (emi / Math.pow(1 + inflation, parseInt(loanTenure))).toFixed(2),
        inflationSavings: (emi - (emi / Math.pow(1 + inflation, parseInt(loanTenure)))).toFixed(2)
      });
      return;
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - principal;
    
    // Inflation impact calculations
    const realEMI = emi / Math.pow(1 + inflation, parseInt(loanTenure));
    const inflationSavings = emi - realEMI;

    setResult({
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      realEMI: realEMI.toFixed(2),
      inflationSavings: inflationSavings.toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Sidebar />
      <ChatbotIcon />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">EMI</span> Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your loan EMI with inflation impact analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Principal loan amount</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    step="0.1"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Home loans: 7-9%, Personal loans: 10-15%</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Home loans: up to 30 years</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Inflation Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(e.target.value)}
                    step="0.1"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">India's average inflation: ~6%</p>
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Show Inflation Impact</span>
                  <button
                    onClick={() => setShowInflationImpact(!showInflationImpact)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer ${
                      showInflationImpact ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showInflationImpact ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <button
                  onClick={calculateEMI}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 cursor-pointer"
                >
                  Calculate EMI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {result && (
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Breakdown</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Monthly EMI:</span>
                      <span className="font-bold text-purple-600 text-lg">₹{result.emi}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Total Amount Payable:</span>
                      <span className="font-bold text-blue-600 text-lg">₹{result.totalAmount}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Total Interest:</span>
                      <span className="font-bold text-red-600 text-lg">₹{result.totalInterest}</span>
                    </div>

                    {showInflationImpact && (
                      <>
                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                          <span className="font-semibold text-gray-700">Real EMI Value (Today's Power):</span>
                          <span className="font-bold text-green-600 text-lg">₹{result.realEMI}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                          <span className="font-semibold text-gray-700">Inflation Advantage:</span>
                          <span className="font-bold text-yellow-600 text-lg">₹{result.inflationSavings}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Analysis:</strong> Your monthly EMI of ₹{result.emi} includes ₹{result.totalInterest} total interest over {loanTenure} years.
                      {showInflationImpact && ` Due to inflation, the real burden reduces to ₹${result.realEMI} in today's purchasing power.`}
                    </p>
                  </div>
                </div>
              )}

              {/* EMI Tips */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart EMI Tips</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start">
                    <i className="ri-lightbulb-fill text-yellow-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Prepayment Benefits:</strong> Reduce principal early to save massive interest amounts
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-lightbulb-fill text-yellow-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Inflation Hedge:</strong> Fixed EMIs become cheaper over time due to inflation
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-lightbulb-fill text-yellow-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>EMI to Income Ratio:</strong> Keep total EMIs under 40% of your monthly income
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-lightbulb-fill text-yellow-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Interest Rate Shopping:</strong> Even 0.5% difference saves lakhs over loan tenure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Comparison */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Loan Types & Rates</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Home Loans</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest Rate: 7-9%</li>
                  <li>• Tenure: Up to 30 years</li>
                  <li>• Tax Benefits: 80C + 24B</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">Lowest Interest • Tax Benefits</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Personal Loans</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest Rate: 10-15%</li>
                  <li>• Tenure: 1-5 years</li>
                  <li>• No Collateral Required</li>
                </ul>
                <p className="text-xs text-orange-600 mt-2">Quick Approval • Higher Rates</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Car Loans</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest Rate: 7-12%</li>
                  <li>• Tenure: 3-7 years</li>
                  <li>• Car as Collateral</li>
                </ul>
                <p className="text-xs text-blue-600 mt-2">Moderate Rates • Asset-backed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
