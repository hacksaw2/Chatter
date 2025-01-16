import React from 'react'

const Logo = () => {
  return (
    <div>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-8 h-8"
>
  <defs>
    <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#6A5ACD", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#00FA9A", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    fill="url(#chatGradient)"
    d="M12 2C6.477 2 2 5.978 2 10.5c0 2.25.984 4.303 2.625 5.797C4.39 18.984 3.623 20.507 3.49 20.764a.75.75 0 00.906.992c1.433-.36 3.584-1.118 4.956-2.106 1.083.235 2.235.35 3.647.35 5.523 0 10-3.978 10-8.5S17.523 2 12 2zM8 9.5a1 1 0 112 0 1 1 0 01-2 0zm5 0a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z"
  />
</svg>

    </div>
  )
}

export default Logo
