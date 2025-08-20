export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank you for sharing!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your message of support will be published immediately after payment confirmation.
          </p>
          <p className="text-sm text-gray-500">
            Someone will receive your encouraging words when they visit the site.
          </p>
          <a 
            href="/" 
            className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            Back to messages
          </a>
        </div>
      </div>
    </div>
  )
}