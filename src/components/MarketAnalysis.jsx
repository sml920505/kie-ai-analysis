export default function MarketAnalysis() {
  return (
    <div className="fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">市场定位与竞争分析</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">主要竞争对手</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg border border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Fal.ai</h4>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>✓ 技术底蕴深厚</li>
                <li>✓ 社区生态丰富</li>
                <li>✗ 价格相对较高</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Replicate</h4>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>✓ 开源模型支持好</li>
                <li>✓ 文档完善</li>
                <li>✗ 商业模型集成不足</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg border border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Hugging Face</h4>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                <li>✓ 开源社区领导者</li>
                <li>✓ 模型库丰富</li>
                <li>✗ 闭源模型覆盖有限</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">差异化优势</h3>
          <div className="bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500 p-6 mb-6">
            <p className="text-purple-900 dark:text-purple-100 font-bold text-lg mb-3">
              Kie.ai 定位于"AI 界的折扣店"
            </p>
            <p className="text-purple-800 dark:text-purple-200">
              对于初创企业、个人开发者或需要大规模低成本生成的项目，Kie.ai 提供了极高的性价比。其核心竞争力不在技术创新，而在于通过聚合和优化成本结构，为用户提供"最便宜的 API 访问方式"。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Kie.ai 优势</h4>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>• 极致的价格优势</li>
                <li>• 模型覆盖极广（250+）</li>
                <li>• 单一 API Key 访问</li>
                <li>• 追新速度快</li>
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg border border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">Kie.ai 劣势</h4>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• 品牌知名度较低</li>
                <li>• 稳定性略逊于官方</li>
                <li>• 客户支持渠道单一</li>
                <li>• 部分用户反馈支持响应慢</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">用户评价与平台信誉</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✓ 正面反馈</h4>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>集成速度快，单一 API Key 即可调用数百个模型</li>
                <li>成本削减显著，能节省数千美元</li>
                <li>Playground 体验良好，易于测试</li>
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg border border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">✗ 负面争议</h4>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>支持响应较慢，充值问题处理不及时</li>
                <li>稳定性波动，高峰期可能出现失败</li>
                <li>部分模型命名具有误导性</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-6">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">市场机会</h3>
          <p className="text-blue-800 dark:text-blue-200 mb-3">
            Kie.ai 的出现填补了市场空白：
          </p>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>中小企业对低成本 AI API 的刚需</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>视频生成市场的爆发式增长</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span>开发者对"一站式 API"的需求</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
