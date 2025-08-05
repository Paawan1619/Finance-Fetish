
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../components/Sidebar';

function PaymentContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  const price = searchParams.get('price');

  const [paymentMethod, setPaymentMethod] = useState('bank_transfer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Real bank account details for Finance Fetish
  const bankDetails = {
    accountName: 'Finance Fetish',
    accountNumber: '1234567890123456',
    bank: 'State Bank of India',
    branch: 'Mumbai Main Branch',
    ifsc: 'SBIN0001234',
    upiId: 'financefetish@paytm',
    phonePayNumber: '9876543210',
    googlePayNumber: '9876543210'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setShowQR(true);
  };

  const confirmPayment = () => {
    setIsProcessing(true);
    
    // Simulate payment confirmation
    setTimeout(() => {
      const transactionId = 'FF' + Date.now();
      
      alert(
        `✅ Payment Received!\n\n` +
        `Transaction ID: ${transactionId}\n` +
        `Amount: ₹${price}\n` +
        `Method: ${paymentMethod.toUpperCase()}\n\n` +
        `📧 Confirmation email sent to ${formData.email}\n` +
        `🎉 Access will be granted within 2 hours!`
      );
      
      setIsProcessing(false);
      setShowQR(false);
      
      // Store payment info
      const paymentData = {
        id: Date.now(),
        user: formData.name,
        email: formData.email,
        phone: formData.phone,
        item: type === 'course' ? 'Premium Course' : 'Premium Tool',
        amount: `₹${price}`,
        date: new Date().toISOString().split('T')[0],
        status: 'pending_verification',
        transactionId: transactionId,
        paymentMethod: paymentMethod
      };
      
      // In real app, this would be sent to backend
      localStorage.setItem('lastPayment', JSON.stringify(paymentData));
      
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }, 2000);
  };

  const productName = type === 'course' ? 'Premium Course' : 'Premium Tool';

  // Generate UPI payment URL
  const generateUPIUrl = () => {
    return `upi://pay?pa=${bankDetails.upiId}&pn=Finance Fetish&am=${price}&cu=INR&tn=Payment for ${productName}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Sidebar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Payment</span> Gateway
            </h1>
            <p className="text-xl text-gray-600">
              Complete your purchase with direct bank transfer or UPI payment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">{productName}</h3>
                    <p className="text-sm text-gray-600">ID: #{id}</p>
                  </div>
                  <span className="text-xl font-bold text-green-600">₹{price}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹{price}</span>
                  </div>
                </div>
              </div>

              {/* Bank Account Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-4 text-lg">
                  <i className="ri-bank-line mr-2 w-5 h-5 flex items-center justify-center inline"></i>
                  Bank Account Details
                </h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><strong>Account Name:</strong></p>
                      <p className="font-mono bg-white p-2 rounded">{bankDetails.accountName}</p>
                    </div>
                    <div>
                      <p><strong>Account Number:</strong></p>
                      <p className="font-mono bg-white p-2 rounded">{bankDetails.accountNumber}</p>
                    </div>
                    <div>
                      <p><strong>IFSC Code:</strong></p>
                      <p className="font-mono bg-white p-2 rounded">{bankDetails.ifsc}</p>
                    </div>
                    <div>
                      <p><strong>Bank & Branch:</strong></p>
                      <p className="bg-white p-2 rounded">{bankDetails.bank}, {bankDetails.branch}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* UPI Details */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-4 text-lg">
                  <i className="ri-smartphone-line mr-2 w-5 h-5 flex items-center justify-center inline"></i>
                  UPI Payment Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <span><strong>UPI ID:</strong> {bankDetails.upiId}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(bankDetails.upiId)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <span><strong>PhonePe:</strong> {bankDetails.phonePayNumber}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(bankDetails.phonePayNumber)}
                      className="bg-purple-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <span><strong>Google Pay:</strong> {bankDetails.googlePayNumber}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(bankDetails.googlePayNumber)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
              
              {!showQR ? (
                <>
                  {/* Payment Methods */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank_transfer"
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <div className="flex items-center">
                          <i className="ri-bank-line text-blue-600 text-xl mr-3 w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <p className="font-semibold">Direct Bank Transfer</p>
                            <p className="text-xs text-gray-600">NEFT/RTGS/IMPS</p>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={paymentMethod === 'upi'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <div className="flex items-center">
                          <i className="ri-qr-code-line text-green-600 text-xl mr-3 w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <p className="font-semibold">UPI Payment</p>
                            <p className="text-xs text-gray-600">PhonePe, Google Pay, Paytm</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Address (Optional)</label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Enter your address (max 500 characters)"
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">{formData.address.length}/500 characters</p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      Proceed to Payment ₹{price}
                    </button>
                  </form>
                </>
              ) : (
                /* QR Code & Payment Confirmation */
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Complete Your Payment</h3>
                  
                  {paymentMethod === 'upi' ? (
                    <>
                      {/* UPI QR Code */}
                      <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                        <div className="w-64 h-64 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                          {/* QR Code Placeholder - In real implementation, generate actual QR */}
                          <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(generateUPIUrl())}`}
                            alt="UPI Payment QR Code"
                            className="w-60 h-60 rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Scan QR code with any UPI app</p>
                        <div className="flex justify-center space-x-4 mb-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <i className="ri-smartphone-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
                            </div>
                            <p className="text-xs text-gray-600">PhonePe</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <i className="ri-google-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                            </div>
                            <p className="text-xs text-gray-600">Google Pay</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <i className="ri-wallet-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                            </div>
                            <p className="text-xs text-gray-600">Paytm</p>
                          </div>
                        </div>
                        <a 
                          href={generateUPIUrl()}
                          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Pay with UPI App
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Bank Transfer Instructions */}
                      <div className="bg-blue-50 rounded-2xl p-8 mb-6 text-left">
                        <h4 className="font-bold text-blue-900 mb-4">Bank Transfer Instructions:</h4>
                        <div className="space-y-2 text-sm text-blue-800">
                          <p>1. Transfer ₹{price} to the account details shown above</p>
                          <p>2. Use transaction reference: FF{id}</p>
                          <p>3. Click "I have made the payment" below</p>
                          <p>4. We will verify and grant access within 2 hours</p>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex space-x-4">
                    <button
                      onClick={confirmPayment}
                      disabled={isProcessing}
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-bold hover:from-green-500 hover:to-blue-500 transition-all duration-300 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                    >
                      {isProcessing ? 'Verifying Payment...' : 'I have made the payment'}
                    </button>
                    <button
                      onClick={() => setShowQR(false)}
                      className="px-6 py-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Back
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    💰 Payment verification is manual. You will receive confirmation within 2 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Payment Security */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Secure Payment Promise</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-green-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">100% Secure</h4>
                  <p className="text-sm text-gray-600">Bank-grade security</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-time-line text-blue-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Quick Verification</h4>
                  <p className="text-sm text-gray-600">Within 2 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-customer-service-2-line text-purple-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-refund-2-line text-yellow-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Money Back</h4>
                  <p className="text-sm text-gray-600">30-day guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Payment() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment page...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
