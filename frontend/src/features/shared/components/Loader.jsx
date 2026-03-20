import React  from 'react'
export default function RedirectLoader() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes dotPulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40%            { transform: scale(1.1); opacity: 1; }
        }

        .rl-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #6C63FF;
          border-right-color: rgba(108,99,255,0.3);
          animation: spin 1s linear infinite;
        }
        .rl-ring-2 {
          inset: 8px;
          border-top-color: #3B82F6;
          border-right-color: rgba(59,130,246,0.2);
          animation: spin 1.5s linear infinite reverse;
        }
        .rl-dot   { animation: dotPulse 1.2s ease-in-out infinite; }
        .rl-dot-2 { animation: dotPulse 1.2s ease-in-out 0.2s infinite; }
        .rl-dot-3 { animation: dotPulse 1.2s ease-in-out 0.4s infinite; }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7"
        style={{ background: "#080810" }}
      >
        {/* Spinning rings + logo */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="rl-ring" style={{ position: "absolute", inset: 0 }} />
          <div className="rl-ring rl-ring-2" style={{ position: "absolute", inset: 8 }} />
          <div
            className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #6C63FF, #3B82F6)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2">
          <p
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.15rem",
              background: "linear-gradient(135deg, #fff 40%, #6C63FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            QueryNest
          </p>
          <p
            className="font-light text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569" }}
          >
            Setting up your workspace...
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5">
          <div className="rl-dot w-1.5 h-1.5 rounded-full" style={{ background: "#6C63FF" }} />
          <div className="rl-dot-2 w-1.5 h-1.5 rounded-full" style={{ background: "#8B78FF" }} />
          <div className="rl-dot-3 w-1.5 h-1.5 rounded-full" style={{ background: "#3B82F6" }} />
        </div>
      </div>
    </>
  );
}
