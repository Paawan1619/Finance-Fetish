
import Sidebar from '../../components/Sidebar';
import ChatbotIcon from '../../components/ChatbotIcon';
import Link from 'next/link';

const blogs = {
  '1': {
    id: 1,
    title: "10 Best Mutual Funds to Invest in 2024",
    author: "Paawan Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Mutual Funds",
    image: "https://readdy.ai/api/search-image?query=Modern%20mutual%20funds%20investment%20analysis%20with%20colorful%20charts%20and%20Indian%20market%20data%2C%20professional%20financial%20blog%20illustration&width=800&height=400&seq=blogdetail1&orientation=landscape",
    content: `
      <p>Mutual funds remain one of the most popular investment vehicles for Indian investors in 2024. With over 40 Asset Management Companies (AMCs) offering hundreds of schemes, choosing the right mutual fund can be overwhelming.</p>
      
      <h3>Our Top 10 Picks for 2024</h3>
      
      <h4>Large Cap Funds</h4>
      <p><strong>1. SBI Bluechip Fund:</strong> A consistent performer with a track record of over 15 years. This fund focuses on large-cap stocks and has delivered steady returns with lower volatility.</p>
      
      <p><strong>2. Axis Bluechip Fund:</strong> Known for its quality stock selection and strong fund management. It has consistently beaten its benchmark over the long term.</p>
      
      <h4>Mid Cap Funds</h4>
      <p><strong>3. DSP Midcap Fund:</strong> One of the oldest mid-cap funds with an excellent track record. It focuses on companies with strong fundamentals and growth potential.</p>
      
      <p><strong>4. Kotak Emerging Equity Fund:</strong> A multi-cap fund that invests across market capitalizations but has a significant allocation to mid-cap stocks.</p>
      
      <h4>Small Cap Funds</h4>
      <p><strong>5. SBI Small Cap Fund:</strong> For investors with high risk tolerance, this fund offers exposure to small-cap companies with high growth potential.</p>
      
      <h4>Index Funds</h4>
      <p><strong>6. HDFC Index Fund - Nifty 50:</strong> Low-cost index fund that tracks the Nifty 50 index. Perfect for passive investors who want market returns.</p>
      
      <p><strong>7. UTI Nifty Index Fund:</strong> Another excellent option for passive investing with very low expense ratios.</p>
      
      <h4>Debt Funds</h4>
      <p><strong>8. HDFC Short Term Debt Fund:</strong> Suitable for conservative investors looking for stable returns with lower interest rate risk.</p>
      
      <h4>Hybrid Funds</h4>
      <p><strong>9. ICICI Prudential Balanced Advantage Fund:</strong> A dynamic asset allocation fund that adjusts between equity and debt based on market conditions.</p>
      
      <p><strong>10. SBI Equity Hybrid Fund:</strong> Maintains a balanced approach with 65-80% in equity and the rest in debt instruments.</p>
      
      <h3>Key Factors to Consider</h3>
      <p>When selecting mutual funds, consider these important factors:</p>
      <ul>
        <li><strong>Investment Objective:</strong> Align with your financial goals</li>
        <li><strong>Risk Tolerance:</strong> Choose funds that match your risk appetite</li>
        <li><strong>Investment Horizon:</strong> Long-term goals suit equity funds, short-term goals suit debt funds</li>
        <li><strong>Expense Ratio:</strong> Lower is generally better for long-term wealth creation</li>
        <li><strong>Fund Manager Track Record:</strong> Consistent performance over market cycles</li>
      </ul>
      
      <h3>SIP Strategy for 2024</h3>
      <p>Start with a diversified portfolio:</p>
      <ul>
        <li>70% in equity funds (mix of large, mid, and small cap)</li>
        <li>20% in debt funds</li>
        <li>10% in gold or international funds</li>
      </ul>
      
      <p>Remember, mutual fund investments are subject to market risks. Always read the scheme documents carefully before investing.</p>
    `
  },
  '2': {
    id: 2,
    title: "Cryptocurrency Regulation in India: What Investors Need to Know",
    author: "Chhavi Soni",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Cryptocurrency",
    image: "https://readdy.ai/api/search-image?query=Cryptocurrency%20regulation%20in%20India%20with%20legal%20documents%20and%20Bitcoin%20symbols%2C%20professional%20regulatory%20analysis%20illustration&width=800&height=400&seq=blogdetail2&orientation=landscape",
    content: `
      <p>The cryptocurrency landscape in India has evolved significantly since 2024. Understanding the current regulatory framework is crucial for anyone looking to invest in digital assets.</p>
      
      <h3>Current Regulatory Status</h3>
      <p>As of 2024, cryptocurrencies are legal to hold and trade in India, but they're not recognized as legal tender. The government has implemented a comprehensive taxation framework for crypto transactions.</p>
      
      <h3>Taxation Rules</h3>
      <h4>30% Tax on Crypto Gains</h4>
      <p>All gains from cryptocurrency transactions are taxed at a flat rate of 30%, regardless of the holding period. This applies to both short-term and long-term gains.</p>
      
      <h4>1% TDS on Crypto Transactions</h4>
      <p>Exchanges deduct 1% TDS on all crypto transactions above ₹10,000 in a financial year. This TDS can be claimed as a credit against your total tax liability.</p>
      
      <h4>No Loss Set-off</h4>
      <p>Losses from cryptocurrency cannot be set off against other income or carried forward to future years.</p>
      
      <h3>Compliance Requirements</h3>
      <p>Crypto investors must:</p>
      <ul>
        <li>Report all crypto transactions in their ITR</li>
        <li>Maintain detailed records of all transactions</li>
        <li>Pay advance tax if gains exceed ₹10,000</li>
        <li>Use only registered exchanges</li>
      </ul>
      
      <h3>Registered Exchanges in India</h3>
      <p>Only use these government-registered exchanges:</p>
      <ul>
        <li>WazirX</li>
        <li>CoinDCX</li>
        <li>Zebpay</li>
        <li>Bitbns</li>
        <li>CoinSwitch</li>
      </ul>
      
      <h3>Investment Strategy for 2024</h3>
      <h4>Dollar Cost Averaging</h4>
      <p>Given the high volatility, consider systematic investment rather than lump sum investment.</p>
      
      <h4>Diversification</h4>
      <p>Don't put more than 5-10% of your portfolio in cryptocurrencies. Focus on established coins like Bitcoin and Ethereum.</p>
      
      <h4>Long-term Perspective</h4>
      <p>Despite the high tax rate, a long-term investment approach can still be profitable given the growth potential of the sector.</p>
      
      <h3>Future Outlook</h3>
      <p>The government is working on a comprehensive crypto bill that may provide more clarity on:</p>
      <ul>
        <li>Central Bank Digital Currency (CBDC) framework</li>
        <li>Stablecoin regulations</li>
        <li>DeFi protocol guidelines</li>
        <li>NFT taxation clarity</li>
      </ul>
      
      <p>Stay informed about regulatory changes and always consult with a tax advisor before making significant crypto investments.</p>
    `
  },
  '3': {
    id: 3,
    title: "SIP vs Lump Sum: Which Investment Strategy Works Best?",
    author: "Rishita Thakur",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Investment Strategy",
    image: "https://readdy.ai/api/search-image?query=SIP%20versus%20lump%20sum%20investment%20comparison%20with%20Indian%20rupees%20and%20investment%20charts%2C%20financial%20strategy%20illustration&width=800&height=400&seq=blogdetail3&orientation=landscape",
    content: `
      <p>One of the most debated topics in personal finance is whether to invest through SIP (Systematic Investment Plan) or make a lump sum investment. Both strategies have their merits, and the choice depends on various factors.</p>
      
      <h3>Understanding SIP</h3>
      <p>SIP allows you to invest a fixed amount regularly (monthly, quarterly) in mutual funds. It's based on the principle of rupee cost averaging and helps build disciplined investing habits.</p>
      
      <h3>Understanding Lump Sum</h3>
      <p>Lump sum investment involves investing a large amount at once. This strategy can be beneficial when markets are at low levels or when you have a significant amount to invest.</p>
      
      <h3>SIP Advantages</h3>
      <ul>
        <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when prices are high</li>
        <li><strong>Disciplined Investing:</strong> Regular investments help build wealth systematically</li>
        <li><strong>Lower Risk:</strong> Market timing risk is reduced</li>
        <li><strong>Flexibility:</strong> Can start with small amounts (₹500/month)</li>
      </ul>
      
      <h3>Lump Sum Advantages</h3>
      <ul>
        <li><strong>Market Timing:</strong> If invested at the right time, can generate higher returns</li>
        <li><strong>Compounding:</strong> Full amount starts compounding immediately</li>
        <li><strong>Lower Costs:</strong> Fewer transaction charges</li>
        <li><strong>Suitable for Windfalls:</strong> Bonus, inheritance, or other large sums</li>
      </ul>
      
      <h3>When to Choose SIP</h3>
      <p>SIP is ideal when:</p>
      <ul>
        <li>You're a salaried individual with regular income</li>
        <li>You want to build wealth gradually</li>
        <li>Market levels are high or uncertain</li>
        <li>You're new to investing</li>
      </ul>
      
      <h3>When to Choose Lump Sum</h3>
      <p>Lump sum works better when:</p>
      <ul>
        <li>Markets are at low levels</li>
        <li>You have a large windfall to invest</li>
        <li>You're nearing retirement and have limited time</li>
        <li>You have good market timing skills</li>
      </ul>
      
      <h3>The Hybrid Approach</h3>
      <p>Many successful investors use a combination:</p>
      <ul>
        <li>Continue regular SIPs for disciplined investing</li>
        <li>Invest lump sums during market corrections</li>
        <li>Use step-up SIPs to increase investment amounts annually</li>
      </ul>
      
      <p>Remember, time in the market is more important than timing the market. Start investing early and stay consistent for long-term wealth creation.</p>
    `
  },
  '4': {
    id: 4,
    title: "Building an Emergency Fund: Your Financial Safety Net",
    author: "Taniya Thakur",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Personal Finance",
    image: "https://readdy.ai/api/search-image?query=Emergency%20fund%20piggy%20bank%20with%20Indian%20rupees%20and%20safety%20net%20concept%2C%20financial%20planning%20illustration&width=800&height=400&seq=blogdetail4&orientation=landscape",
    content: `
      <p>An emergency fund is one of the most important financial tools you can have. It provides a buffer against unexpected expenses and helps you avoid debt during tough times.</p>
      
      <h3>What is an Emergency Fund?</h3>
      <p>An emergency fund is money set aside specifically for unexpected expenses like medical bills, job loss, home repairs, or other financial emergencies.</p>
      
      <h3>How Much Should You Save?</h3>
      <p>Financial experts recommend:</p>
      <ul>
        <li><strong>3-6 months of expenses:</strong> For stable job situations</li>
        <li><strong>6-12 months of expenses:</strong> For unstable income or self-employed</li>
        <li><strong>Start with ₹1,000:</strong> If you're just beginning</li>
      </ul>
      
      <h3>Where to Keep Your Emergency Fund</h3>
      <h4>Savings Account</h4>
      <p>Pros: Instant access, FDIC insured</p>
      <p>Cons: Low interest rates</p>
      
      <h4>Fixed Deposits</h4>
      <p>Pros: Higher interest rates, safe</p>
      <p>Cons: Lock-in period, penalty for early withdrawal</p>
      
      <h4>Liquid Mutual Funds</h4>
      <p>Pros: Higher returns than savings account, high liquidity</p>
      <p>Cons: Market risk, exit load</p>
      
      <h3>Building Your Emergency Fund</h3>
      <p>Follow these steps:</p>
      <ol>
        <li><strong>Calculate monthly expenses:</strong> Include rent, food, utilities, EMIs</li>
        <li><strong>Set a target:</strong> Multiply by 6 months</li>
        <li><strong>Automate savings:</strong> Set up automatic transfers</li>
        <li><strong>Start small:</strong> Even ₹1,000/month makes a difference</li>
        <li><strong>Use windfalls:</strong> Tax refunds, bonuses go to emergency fund</li>
      </ol>
      
      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Using emergency fund for non-emergencies</li>
        <li>Keeping too much in low-yielding accounts</li>
        <li>Not replenishing after use</li>
        <li>Mixing emergency fund with other savings</li>
      </ul>
      
      <h3>Emergency Fund Ladder Strategy</h3>
      <p>Split your emergency fund into tiers:</p>
      <ul>
        <li><strong>Tier 1:</strong> 1 month expenses in savings account (immediate access)</li>
        <li><strong>Tier 2:</strong> 2-3 months in liquid funds (1-2 days access)</li>
        <li><strong>Tier 3:</strong> 3-6 months in short-term FDs (higher returns)</li>
      </ul>
      
      <p>An emergency fund gives you peace of mind and financial security. Start building yours today!</p>
    `
  },
  '5': {
    id: 5,
    title: "Tax Saving Investments Under Section 80C: Complete Guide",
    author: "Devyansh Pawar",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Tax Planning",
    image: "https://readdy.ai/api/search-image?query=Section%2080C%20tax%20saving%20investments%20with%20Indian%20tax%20forms%20and%20calculator%2C%20financial%20planning%20illustration&width=800&height=400&seq=blogdetail5&orientation=landscape",
    content: `
      <p>Section 80C is one of the most popular tax-saving provisions in India, allowing deductions up to ₹1.5 lakh annually. Here's everything you need to know about maximizing your tax savings.</p>
      
      <h3>Section 80C Overview</h3>
      <p>Section 80C allows you to claim deductions from your taxable income for specified investments and expenses. The maximum limit is ₹1.5 lakh per financial year.</p>
      
      <h3>Top Tax-Saving Options</h3>
      
      <h4>1. Equity Linked Savings Scheme (ELSS)</h4>
      <p><strong>Lock-in:</strong> 3 years (shortest among 80C options)</p>
      <p><strong>Returns:</strong> Market-linked, potential for high returns</p>
      <p><strong>Best for:</strong> Young investors with long-term goals</p>
      
      <h4>2. Public Provident Fund (PPF)</h4>
      <p><strong>Lock-in:</strong> 15 years</p>
      <p><strong>Returns:</strong> 7.1% (current rate)</p>
      <p><strong>Best for:</strong> Conservative investors, retirement planning</p>
      
      <h4>3. Employee Provident Fund (EPF)</h4>
      <p><strong>Lock-in:</strong> Until retirement/job change</p>
      <p><strong>Returns:</strong> 8.15% (current rate)</p>
      <p><strong>Best for:</strong> Salaried employees (automatic deduction)</p>
      
      <h4>4. National Savings Certificate (NSC)</h4>
      <p><strong>Lock-in:</strong> 5 years</p>
      <p><strong>Returns:</strong> 6.8% (current rate)</p>
      <p><strong>Best for:</strong> Risk-averse investors</p>
      
      <h4>5. Tax-Saving Fixed Deposits</h4>
      <p><strong>Lock-in:</strong> 5 years</p>
      <p><strong>Returns:</strong> 5.5-7% depending on bank</p>
      <p><strong>Best for:</strong> Conservative investors</p>
      
      <h3>Other 80C Options</h3>
      <ul>
        <li><strong>Life Insurance Premiums:</strong> Term and traditional plans</li>
        <li><strong>Home Loan Principal:</strong> EMI principal component</li>
        <li><strong>Sukanya Samriddhi Yojana:</strong> For girl child</li>
        <li><strong>Tuition Fees:</strong> Children's education</li>
        <li><strong>NPS (National Pension System):</strong> Additional ₹50K under 80CCD(1B)</li>
      </ul>
      
      <h3>Smart Tax Planning Strategy</h3>
      
      <h4>Diversified Approach</h4>
      <p>Don't put all ₹1.5 lakh in one option:</p>
      <ul>
        <li>₹50K in ELSS (growth potential)</li>
        <li>₹50K in PPF (long-term security)</li>
        <li>₹25K in EPF (automatic)</li>
        <li>₹25K in NSC/FD (stability)</li>
      </ul>
      
      <h4>Based on Age</h4>
      <p><strong>20s-30s:</strong> Focus on ELSS (70%), PPF (30%)</p>
      <p><strong>40s:</strong> Balanced approach - ELSS (40%), PPF (40%), NSC (20%)</p>
      <p><strong>50s+:</strong> Conservative - PPF (50%), NSC (30%), FD (20%)</p>
      
      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Investing only for tax savings without considering returns</li>
        <li>Last-minute investments in March</li>
        <li>Ignoring lock-in periods</li>
        <li>Not considering inflation impact</li>
        <li>Over-investing in insurance for tax benefits</li>
      </ul>
      
      <h3>Beyond Section 80C</h3>
      <p>Additional tax-saving options:</p>
      <ul>
        <li><strong>Section 80D:</strong> Health insurance premiums</li>
        <li><strong>Section 24:</strong> Home loan interest</li>
        <li><strong>Section 80CCD(1B):</strong> Additional NPS investment</li>
        <li><strong>Section 80E:</strong> Education loan interest</li>
      </ul>
      
      <p>Plan your tax-saving investments early in the financial year for maximum benefit and better returns!</p>
    `
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ];
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = blogs[params.id];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Blog not found</h1>
          <Link href="/blogs" className="text-blue-600 hover:text-blue-500 mt-4 inline-block cursor-pointer">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <ChatbotIcon />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/blogs" className="text-blue-600 hover:text-blue-500 mb-8 inline-block cursor-pointer">
            ← Back to all blogs
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover object-top"
            />
            
            <div className="p-8 md:p-12">
              {/* Category */}
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center space-x-6 mb-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                    Twitter
                  </button>
                  <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    <i className="ri-facebook-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                    Facebook
                  </button>
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blogs/2" className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Financial%20planning%20illustration%20with%20charts%20and%20graphs%2C%20Indian%20investment%20strategy&width=400&height=200&seq=related1&orientation=landscape"
                  alt="Related Article"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Investment
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                    SIP vs Lump Sum: Which is Better?
                  </h3>
                  <p className="text-gray-600 text-sm">Learn the pros and cons of both investment strategies...</p>
                </div>
              </Link>

              <Link href="/blogs/3" className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Tax%20saving%20investment%20illustration%20with%20Indian%20tax%20forms%20and%20money%2C%20financial%20planning&width=400&height=200&seq=related2&orientation=landscape"
                  alt="Related Article"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Tax Planning
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                    Complete Guide to Section 80C
                  </h3>
                  <p className="text-gray-600 text-sm">Maximize your tax savings with these investment options...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
