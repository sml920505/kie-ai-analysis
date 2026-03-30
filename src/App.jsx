import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
import ProductAnalysis from './components/ProductAnalysis'
import PricingAnalysis from './components/PricingAnalysis'
import MarketAnalysis from './components/MarketAnalysis'
import GTMStrategy from './components/GTMStrategy'
import GrowthPath from './components/GrowthPath'
import Conclusion from './components/Conclusion'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />
      case 'product':
        return <ProductAnalysis />
      case 'pricing':
        return <PricingAnalysis />
      case 'market':
        return <MarketAnalysis />
      case 'gtm':
        return <GTMStrategy />
      case 'growth':
        return <GrowthPath />
      case 'conclusion':
        return <Conclusion />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-gray-900 dark:bg-black text-white text-center py-6 mt-12">
        <p className="text-sm">© 2026 Kie.ai 深度分析 | 由 Manus 创建</p>
      </footer>
    </div>
  )
}

export default App
