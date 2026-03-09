
import React from 'react'

const VideoHome = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-gray-50">
      <div className="max-w-4xl w-full px-6">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video
            src="/videos/videoHome.mp4"
            className="w-full h-auto block"
            controls
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
          />
        </div>
      </div>
    </section>
  )
}

export default VideoHome