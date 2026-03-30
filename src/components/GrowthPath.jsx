export default function GrowthPath() {
  const flywheel = [
    { step: 1, title: '低价吸引', description: '利用官方 API 的高价痛点，吸引首批成本敏感型用户' },
    { step: 2, title: '社区传播', description: '用户在 Reddit/Discord 分享低成本实现案例，引发口碑传播' },
    { step: 3, title: '生态集成', description: '通过 n8n, Zapier 等自动化工具的集成，进入用户的生产工作流' },
    { step: 4, title: '规模效应', description: '用户量增加带动采购成本下降，进一步强化价格优势' }
  ]

  return (
    <div className="fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">增长路径与飞轮</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">增长飞轮 (Growth Flywheel)</h3>
          
          <div className="relative">
            {/* 飞轮可视化 */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {flywheel.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg border-2 border-purple-500">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-3">
                        {item.step}
                      </div>
                      <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100">{item.title}</h4>
                    </div>
                    <p className="text-purple-800 dark:text-purple-200">{item.description}</p>
                  </div>
                  
                  {/* 箭头 */}
                  {idx < flywheel.length - 1 && (
                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 循环箭头 */}
            <div className="text-center">
              <svg className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="text-purple-600 dark:text-purple-400 font-bold mt-2">持续循环强化</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">关键增长指标 (KPIs)</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">获客成本 (CAC)</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">通过社区和 SEO 驱动，CAC 相对较低</p>
              <p className="text-blue-900 dark:text-blue-100 font-bold">优势：有机增长为主</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">留存率 (Retention)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm mb-3">低价优势强，但稳定性风险可能影响长期留存</p>
              <p className="text-green-900 dark:text-green-100 font-bold">挑战：需提升稳定性</p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg border border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">生命周期价值 (LTV)</h4>
              <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">高频使用用户 LTV 高，但价格竞争可能压低利润</p>
              <p className="text-orange-900 dark:text-orange-100 font-bold">机会：增值服务</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">增长机会与挑战</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">📈 增长机会</h4>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>✓ 中小企业对低成本 AI API 的刚需</li>
                <li>✓ 视频生成市场的爆发式增长</li>
                <li>✓ 开发者对"一站式 API"的需求</li>
                <li>✓ 新兴市场对成本的敏感性</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg border border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">⚠️ 增长威胁</h4>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>✗ 官方 API 进一步降价</li>
                <li>✗ 监管政策对 API 代理的限制</li>
                <li>✗ 竞争对手进入低价市场</li>
                <li>✗ 稳定性问题影响品牌声誉</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500 p-6">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">长期增长战略建议</h3>
          <ul className="space-y-3 text-purple-800 dark:text-purple-200">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span><strong>提升稳定性</strong>：投入技术改进，缩小与官方的稳定性差距</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span><strong>增值服务</strong>：在低价基础上，提供高级功能（如优先级队列、专属支持）</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span><strong>生态建设</strong>：与 n8n, Zapier 等工具深度集成，增加用户粘性</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
              <span><strong>品牌建设</strong>：通过技术博客、开发者大会等方式提升品牌认知</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
