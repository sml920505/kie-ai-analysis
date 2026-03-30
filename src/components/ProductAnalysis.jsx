export default function ProductAnalysis() {
  const products = [
    {
      title: '视频生成 APIs',
      items: ['Google Veo 3.1', 'Runway Aleph', 'Sora 2', 'Kling 2.5 Turbo', 'Wan 2.5'],
      color: 'from-red-50 to-red-100 dark:from-red-900 dark:to-red-800'
    },
    {
      title: '图像生成 APIs',
      items: ['OpenAI GPT-4o Image', 'Flux Kontext', 'Nano Banana', 'Seedream 4.5', 'Qwen Image'],
      color: 'from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800'
    },
    {
      title: '音频生成 APIs',
      items: ['Suno V3.5', 'Suno V4', 'Suno V4.5', 'Suno V4.5 Plus', 'ElevenLabs V3'],
      color: 'from-green-50 to-green-100 dark:from-green-900 dark:to-green-800'
    },
    {
      title: 'LLM & Chat APIs',
      items: ['Claude 4.5/4.6 系列', 'GPT-5.4 系列', 'Qwen', 'Grok', 'DeepSeek'],
      color: 'from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800'
    }
  ]

  return (
    <div className="fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">产品与技术分析</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">核心产品线</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${product.color} p-6 rounded-lg border border-gray-200 dark:border-gray-700`}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{product.title}</h4>
                <ul className="space-y-2">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">技术架构特点</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">异步任务模型</h4>
              <p className="text-gray-700 dark:text-gray-300">所有生成任务采用异步处理，通过 Webhook 回调或主动轮询获取结果</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">高并发支持</h4>
              <p className="text-gray-700 dark:text-gray-300">默认支持每 10 秒 20 个新任务请求，足以应对中小型生产环境</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">数据留存政策</h4>
              <p className="text-gray-700 dark:text-gray-300">生成媒体文件保留 14 天，日志保留 2 个月</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">安全机制</h4>
              <p className="text-gray-700 dark:text-gray-300">提供 API 密钥管理、IP 白名单及按 Key 设置的速率限制</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-6">
          <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">稳定性声明</h3>
          <p className="text-yellow-800 dark:text-yellow-200">
            Kie.ai 坦诚其稳定性可能略低于官方渠道，这是为了换取极低的价格。平台认为其稳定性足以支持生产工作负载和长期业务增长。
          </p>
        </div>
      </div>
    </div>
  )
}
