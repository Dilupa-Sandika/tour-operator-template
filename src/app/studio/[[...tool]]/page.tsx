// src/app/studio/[[...tool]]/page.tsx

'use client'

export default function StudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-4">🎛️ Sanity Studio</h1>
        <p className="text-gray-600 mb-6">
          Content Management Studio will be available here once dependencies are fully installed.
        </p>
        <div className="bg-gray-100 p-4 rounded text-sm text-left mb-4">
          <p className="font-mono">npm install --legacy-peer-deps</p>
        </div>
        <p className="text-sm text-gray-500">
          The main website is running properly. Studio setup is in progress.
        </p>
      </div>
    </div>
  )
}
