export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'overview', label: '概览' },
    { id: 'product', label: '产品分析' },
    { id: 'pricing', label: '定价策略' },
    { id: 'market', label: '市场定位' },
    { id: 'gtm', label: 'GTM 策略' },
    { id: 'growth', label: '增长路径' },
    { id: 'conclusion', label: '总结' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
