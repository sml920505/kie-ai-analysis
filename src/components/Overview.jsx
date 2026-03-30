export default function Overview() {
  return (
    <div className="fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">平台概述</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">250+ 模型</h3>
            <p className="text-blue-700 dark:text-blue-300">视频、图像、音频、LLM 全覆盖</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">30-80% 低价</h3>
            <p className="text-green-700 dark:text-green-300">比官方或竞品更便宜</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">99.9% 可用性</h3>
            <p className="text-purple-700 dark:text-purple-300">24/7 开发者支持</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">核心价值主张</h3>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
            Kie.ai 是一个新兴的 AI API 聚合与代理平台，通过单一 API 接口整合了超过 250 种顶级 AI 模型。其核心价值在于提供"全网最低价"和"极致的集成便利性"，特别适合对成本敏感的开发者和初创企业。
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">关键指标</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">平均响应时间</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">24.7 秒</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">系统可用性</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">支持模型数</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">250+</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">价格优势</p>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">-30-80%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
