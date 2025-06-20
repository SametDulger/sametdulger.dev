export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-400 text-lg">Loading...</p>
        <div className="mt-4 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="loading-skeleton h-full rounded-full"></div>
        </div>
      </div>
    </div>
  )
} 