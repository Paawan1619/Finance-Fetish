
'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ChatbotIcon from '../../components/ChatbotIcon';

export default function InflationCalculator() {
  const [amount, setAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('6');
  const [years, setYears] = useState('');
  const [returnRate, setReturnRate] = useState('12');
  const [showInflationAdjusted, setShowInflationAdjusted] = useState(true);
  const [result, setResult] = useState(null);

  const calculateInflation = () => {
    if (!amount || !years) return;

    const principal = parseFloat(amount);
    const inflation = parseFloat(inflationRate) / 100;
    const returns = parseFloat(returnRate) / 100;
    const time = parseInt(years);

    // Without inflation adjustment
    const futureValueNominal = principal * Math.pow(1 + returns, time);
    
    // With inflation adjustment
    const realReturnRate = ((1 + returns) / (1 + inflation)) - 1;
    const futureValueReal = principal * Math.pow(1 + realReturnRate, time);
    
    // Inflation impact
    const inflationImpact = principal * Math.pow(1 + inflation, time) - principal;
    const purchasingPower = principal / Math.pow(1 + inflation, time);

    setResult({
      futureValueNominal: futureValueNominal.toFixed(2),
      futureValueReal: futureValueReal.toFixed(2),
      inflationImpact: inflationImpact.toFixed(2),
      purchasingPower: purchasingPower.toFixed(2),
      totalInflationLoss: (futureValueNominal - futureValueReal).toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <Sidebar />
      <ChatbotIcon />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Inflation</span> Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Understand how inflation affects your investments and purchasing power
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Inflation Impact</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(e.target.value)}
                    step="0.1"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Equity funds average 12-15% returns</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Inflation Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(e.target.value)}
                    step="0.1"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">India's average inflation rate is around 6%</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="Enter number of years"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Show Inflation-Adjusted Returns</span>
                  <button
                    onClick={() => setShowInflationAdjusted(!showInflationAdjusted)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer ${
                      showInflationAdjusted ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showInflationAdjusted ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <button
                  onClick={calculateInflation}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 cursor-pointer"
                >
                  Calculate Impact
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {result && (
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Analysis</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Nominal Future Value:</span>
                      <span className="font-bold text-blue-600 text-lg">₹{result.futureValueNominal}</span>
                    </div>
                    
                    {showInflationAdjusted && (
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Real Future Value:</span>
                        <span className="font-bold text-green-600 text-lg">₹{result.futureValueReal}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Today's Purchasing Power:</span>
                      <span className="font-bold text-red-600 text-lg">₹{result.purchasingPower}</span>
                    </div>
                    
                    {showInflationAdjusted && (
                      <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Inflation Loss:</span>
                        <span className="font-bold text-orange-600 text-lg">₹{result.totalInflationLoss}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Analysis:</strong> Your ₹{amount} investment will grow to ₹{result.futureValueNominal} in {years} years. 
                      {showInflationAdjusted && ` However, after adjusting for ${inflationRate}% inflation, the real value will be ₹${result.futureValueReal}.`}
                    </p>
                  </div>
                </div>
              )}

              {/* Information */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Inflation</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong>Real Returns:</strong> Your actual purchasing power after accounting for inflation. This is what truly matters for wealth building.
                  </p>
                  <p>
                    <strong>Nominal Returns:</strong> The stated return without adjusting for inflation. Can be misleading if inflation is high.
                  </p>
                  <p>
                    <strong>Rule of 72:</strong> Divide 72 by inflation rate to see how quickly your money loses half its value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beat Inflation Strategy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-line-chart-line text-green-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Equity Investments</h4>
                <p className="text-gray-600 text-sm">Historically beat inflation with 12-15% long-term returns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-home-line text-blue-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Real Estate</h4>
                <p className="text-gray-600 text-sm">Property values typically rise with or above inflation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-coins-line text-yellow-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Gold & Commodities</h4>
                <p className="text-gray-600 text-sm">Traditional inflation hedge, allocate 5-10% of portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
