export default function MessageBoard({ messages }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Messages of support from the community</h2>
      {messages.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Be the first to share a message of encouragement!</p>
        </div>
      )}
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <p className="text-gray-700 text-lg mb-2">"{msg.text}"</p>
            <p className="text-sm text-gray-500">— {msg.name || 'Anonymous'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}