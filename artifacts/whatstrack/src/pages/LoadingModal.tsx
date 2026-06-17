import { useEffect, useState, useRef } from "react";

interface Props {
  phone: string;
  onComplete: () => void;
}

const STEPS = [
  "Locating WhatsApp account...",
  "Verifying phone number...",
  "Bypassing end-to-end encryption...",
  "Extracting chat history...",
  "Loading messages & media...",
  "Access granted.",
];

const STEP_DURATIONS = [1400, 1200, 1700, 1500, 1300, 700];
const TOTAL_DURATION = STEP_DURATIONS.reduce((a, b) => a + b, 0);

export default function LoadingModal({ phone, onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef<number>(0);

  const displayPhone = phone.length > 20 ? phone.slice(0, 20) + "…" : phone;
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    startRef.current = performance.now();

    const stepTimers: ReturnType<typeof setTimeout>[] = [];
    let acc = 0;
    STEP_DURATIONS.forEach((dur, i) => {
      const t = setTimeout(() => setCurrentStep(i), acc);
      stepTimers.push(t);
      acc += dur;
    });

    const doneTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 650);
    }, TOTAL_DURATION);

    const interval = setInterval(() => {
      const elapsed = performance.now() - startRef.current;
      setProgress(Math.min((elapsed / TOTAL_DURATION) * 100, 100));
    }, 16);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(doneTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const isDone = currentStep === STEPS.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        background: "rgba(2, 8, 20, 0.88)",
        animation: exiting
          ? "overlayExit 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards"
          : "overlayEnter 0.4s ease-out forwards",
      }}
    >
      <div
        style={{
          animation: exiting
            ? "scannerExit 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "scannerEnter 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) forwards",
        }}
        className="flex flex-col items-center"
      >
        {/* Scanner rings */}
        <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>

          {/* Expanding pulse rings */}
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="absolute rounded-full border border-[#25D366]"
              style={{
                width: 200,
                height: 200,
                opacity: 0,
                animation: `ringExpand 2.4s ease-out ${i * 0.8}s infinite`,
              }}
            />
          ))}

          {/* Static outer ring — dashed, slowly rotating */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              border: "1px dashed rgba(37,211,102,0.3)",
              animation: "spinSlow 12s linear infinite",
            }}
          />

          {/* Mid ring — counter-rotate */}
          <div
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              border: "1px solid rgba(37,211,102,0.15)",
              animation: "spinSlow 8s linear infinite reverse",
            }}
          />

          {/* SVG progress ring */}
          <svg
            className="absolute"
            width="160"
            height="160"
            viewBox="0 0 120 120"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="rgba(37,211,102,0.08)"
              strokeWidth="2"
            />
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="#25D366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.3s ease-out", filter: "drop-shadow(0 0 4px rgba(37,211,102,0.8))" }}
            />
          </svg>

          {/* Radar sweep */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              width: 112,
              height: 112,
              animation: "radarSweep 2s linear infinite",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "conic-gradient(from 0deg, transparent 75%, rgba(37,211,102,0.18) 100%)",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Center glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 80,
              height: 80,
              background: "radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 70%)",
              animation: isDone ? "none" : "centerGlow 1.6s ease-in-out infinite",
            }}
          />

          {/* Center icon */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 56,
              height: 56,
              background: isDone
                ? "rgba(37,211,102,0.2)"
                : "rgba(37,211,102,0.1)",
              border: `1.5px solid ${isDone ? "rgba(37,211,102,0.6)" : "rgba(37,211,102,0.3)"}`,
              transition: "all 0.4s ease",
              boxShadow: isDone ? "0 0 20px rgba(37,211,102,0.4)" : "none",
            }}
          >
            {isDone ? (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366" style={{ animation: "centerGlow 1.6s ease-in-out infinite" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            )}
          </div>
        </div>

        {/* Target phone */}
        <p className="mt-5 text-xs font-mono text-slate-500 tracking-widest uppercase">
          Target: <span className="text-slate-300">{displayPhone}</span>
        </p>

        {/* Step text */}
        <div className="mt-3 h-7 flex items-center justify-center overflow-hidden" style={{ minWidth: 280 }}>
          {STEPS.map((step, i) => (
            <span
              key={i}
              className="absolute text-sm font-medium text-center transition-all duration-500"
              style={{
                color: isDone && i === STEPS.length - 1 ? "#25D366" : "rgba(255,255,255,0.75)",
                opacity: currentStep === i ? 1 : 0,
                transform: currentStep === i ? "translateY(0)" : currentStep > i ? "translateY(-10px)" : "translateY(10px)",
                fontWeight: isDone && i === STEPS.length - 1 ? 700 : 500,
                letterSpacing: isDone && i === STEPS.length - 1 ? "0.1em" : undefined,
              }}
            >
              {isDone && i === STEPS.length - 1 ? "ACCESS GRANTED" : step}
            </span>
          ))}
        </div>

        {/* Progress % */}
        <p
          className="mt-2 text-xs font-mono"
          style={{ color: isDone ? "#25D366" : "rgba(37,211,102,0.6)" }}
        >
          {Math.round(progress)}%
        </p>
      </div>

      <style>{`
        @keyframes overlayEnter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes overlayExit {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes scannerEnter {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scannerExit {
          0% { opacity: 1; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.06); }
          100% { opacity: 0; transform: scale(0.95); }
        }
        @keyframes ringExpand {
          0% { transform: scale(0.4); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes centerGlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
