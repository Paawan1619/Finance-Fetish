'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('5000');
  const [annualReturn, setAnnualReturn] = useState('12');
  const [investmentPeriod, setInvestmentPeriod] = useState('10');
  const [inflationRate, setInflationRate] = useState('6');
  const [showInflationAdjusted, setShowInflationAdjusted] = useState(true);
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyAmount = parseFloat(monthlyInvestment);
    const annualRate = parseFloat(annualReturn) / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = parseInt(investmentPeriod) * 12;
    const inflation = parseFloat(inflationRate) / 100;

    if (monthlyRate === 0) {
      const maturityAmount = monthlyAmount * totalMonths;
      setResult({
        maturityAmount: maturityAmount.toFixed(2),
        investedAmount: maturityAmount.toFixed(2),
        wealthGain: '0.00',
        realValue: (maturityAmount / Math.pow(1 + inflation, parseInt(investmentPeriod))).toFixed(2),
        inflationImpact: (maturityAmount - (maturityAmount / Math.pow(1 + inflation, parseInt(investmentPeriod)))).toFixed(2)
      });
      return;
    }

    const maturityAmount = monthlyAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    const investedAmount = monthlyAmount * totalMonths;
    const wealthGain = maturityAmount - investedAmount;

    // Inflation adjusted calculations
    const realValue = maturityAmount / Math.pow(1 + inflation, parseInt(investmentPeriod));
    const inflationImpact = maturityAmount - realValue;

    setResult({
      maturityAmount: maturityAmount.toFixed(2),
      investedAmount: investedAmount.toFixed(2),
      wealthGain: wealthGain.toFixed(2),
      realValue: realValue.toFixed(2),
      inflationImpact: inflationImpact.toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Sidebar />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">SIP</span> Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate the future value of your Systematic Investment Plan with inflation impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SIP Calculator</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum ₹500 recommended</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                    step="0.1"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Historical equity returns: 12-15%</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Longer periods benefit from compounding</p>
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">India's average inflation: ~6%</p>
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Show Inflation Impact</span>
                  <button
                    onClick={() => setShowInflationAdjusted(!showInflationAdjusted)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer ${
                      showInflationAdjusted ? 'bg-blue-600' : 'bg-gray-300'
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
                  onClick={calculateSIP}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300 cursor-pointer"
                >
                  Calculate Returns
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {result && (
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Results</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Total Investment:</span>
                      <span className="font-bold text-blue-600 text-lg">₹{result.investedAmount}</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Maturity Amount:</span>
                      <span className="font-bold text-green-600 text-lg">₹{result.maturityAmount}</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Wealth Gained:</span>
                      <span className="font-bold text-yellow-600 text-lg">₹{result.wealthGain}</span>
                    </div>

                    {showInflationAdjusted && (
                      <>
                        <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                          <span className="font-semibold text-gray-700">Real Value (Today's Power):</span>
                          <span className="font-bold text-orange-600 text-lg">₹{result.realValue}</span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                          <span className="font-semibold text-gray-700">Inflation Impact:</span>
                          <span className="font-bold text-red-600 text-lg">₹{result.inflationImpact}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Analysis:</strong> Your ₹{monthlyInvestment} monthly SIP will grow to ₹{result.maturityAmount} in {investmentPeriod} years.
                      {showInflationAdjusted && ` After adjusting for ${inflationRate}% inflation, the real purchasing power will be ₹${result.realValue}.`}
                    </p>
                  </div>
                </div>
              )}

              {/* SIP Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose SIP?</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start">
                    <i className="ri-check-circle-fill text-green-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Rupee Cost Averaging:</strong> Buy more units when prices are low, fewer when high
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-circle-fill text-green-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Disciplined Investing:</strong> Automate your investments for consistent wealth building
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-circle-fill text-green-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Power of Compounding:</strong> Earn returns on your returns over time
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-check-circle-fill text-green-500 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
                    <div>
                      <strong>Inflation Protection:</strong> Equity SIPs historically beat inflation rates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best SIP Funds */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top SIP Fund Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Large Cap Funds</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SBI Bluechip Fund</li>
                  <li>• HDFC Top 100 Fund</li>
                  <li>• ICICI Pru Bluechip Fund</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">Lower Risk • Stable Returns</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Mid Cap Funds</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Axis Midcap Fund</li>
                  <li>• DSP Midcap Fund</li>
                  <li>• HDFC Mid-Cap Opportunities</li>
                </ul>
                <p className="text-xs text-orange-600 mt-2">Moderate Risk • Higher Returns</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Index Funds</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UTI Nifty Fund</li>
                  <li>• SBI Nifty Index Fund</li>
                  <li>• HDFC Index Fund Sensex</li>
                </ul>
                <p className="text-xs text-blue-600 mt-2">Low Cost • Market Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
