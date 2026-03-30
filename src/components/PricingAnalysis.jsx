export default function PricingAnalysis() {
  const pricingData = [
    {
      model: '视频 (10s 720p)',
      kiePrice: '$0.15',
      competitorPrice: '$0.20-$0.50',
      discount: '25%-70%'
    },
    {
      model: '图像 (Seedream 4.5)',
      kiePrice: '$0.0325',
      competitorPrice: '$0.04',
      discount: '18.8%'
    },
    {
      model: 'LLM (Claude-Haiku)',
      kiePrice: '$0.35 (Input)',
      competitorPrice: '官方定价',
      discount: '35%'
    },
    {
      model: 'LLM (Claude-Opus)',
      kiePrice: '$8.75 (Output)',
      competitorPrice: '官方定价',
      discount: '35%'
    }
  ]

  return (
    <div className="fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">定价与商业模式</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">价格竞争力</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Kie.ai 的定价策略极具攻击性，其官网明确标注价格通常比官方 API 或 Fal.ai 等竞争对手低 <strong>30%-80%</strong>。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold text-gray-900 dark:text-white">模型类型</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold text-gray-900 dark:text-white">Kie.ai 价格</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold text-gray-900 dark:text-white">市场参考价</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold text-gray-900 dark:text-white">优惠幅度</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-900 dark:text-white font-medium">{row.model}</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-bold">{row.kiePrice}</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">{row.competitorPrice}</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-bold">↓ {row.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">商业模式推测</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">大宗采购与转售</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">通过企业级折扣或区域性定价差异获取低价资源</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">资源池化</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">优化 GPU 利用率，降低闲置成本</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg border border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">牺牲稳定性换价格</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">平台坦诚稳定性可能略低，以换取价格优势</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-6">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">定价策略评估</h3>
          <p className="text-green-800 dark:text-green-200 mb-3">
            Kie.ai 的定价是其最强竞争力。对于高频使用生成式 AI 的项目，能节省数千美元的开支。这种"平替"定位特别适合：
          </p>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>初创企业和个人开发者</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>原型开发和实验项目</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>对成本极其敏感的业务</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
