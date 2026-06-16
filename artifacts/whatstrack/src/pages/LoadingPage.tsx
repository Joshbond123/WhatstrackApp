import { useEffect, useState, useRef } from "react";
import { Shield, Wifi, Lock, Database, CheckCircle } from "lucide-react";

interface Props {
  phone: string;
  onComplete: () => void;
}

const STEPS = [
  { message: "Connecting to WhatsApp servers...", duration: 1400, icon: Wifi },
  { message: "Verifying phone number...", duration: 1200, icon: Shield },
  { message: "Decrypting end-to-end encryption...", duration: 1800, icon: Lock },
  { message: "Fetching chat history...", duration: 1600, icon: Database },
  { message: "Loading messages and media...", duration: 1400, icon: Database },
  { message: "Access granted!", duration: 700, icon: CheckCircle },
];

const TOTAL_DURATION = STEPS.reduce((a, s) => a + s.duration, 0);

export default function LoadingPage({ phone, onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const progressRef = useRef(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();
    let elapsed = 0;
    let stepIdx = 0;

    // Animate step timings
    const stepTimers: ReturnType<typeof setTimeout>[] = [];
    let acc = 0;
    STEPS.forEach((step, i) => {
      const t = setTimeout(() => {
        setCurrentStep(i);
        if (i > 0) setCompletedSteps(prev => [...prev, i - 1]);
      }, acc);
      stepTimers.push(t);
      acc += step.duration;
    });

    // Mark all complete
    const doneTimer = setTimeout(() => {
      setCompletedSteps([0, 1, 2, 3, 4, 5]);
      setDone(true);
      setTimeout(onComplete, 900);
    }, TOTAL_DURATION);

    // Smooth progress bar
    const interval = setInterval(() => {
      const now = performance.now();
      const elapsed = now - startRef.current;
      const p = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 30);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(doneTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const displayPhone = phone.length > 16 ? phone.slice(0, 16) + "…" : phone;

  return (
    <div className="min-h-screen whatsapp-bg flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse-green inline-block"></span>
            <span className="text-[#25D366] text-xs font-mono uppercase tracking-widest">Session Active</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Accessing Account</h2>
          <p className="text-white/40 text-sm font-mono">{displayPhone}</p>
        </div>

        {/* Main card */}
        <div className="glass-card rounded-2xl p-6 mb-5">
          {/* Radar animation */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              {/* Rings */}
              {[1, 0.65, 0.35].map((scale, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[#25D366]/20"
                  style={{
                    transform: `scale(${scale})`,
                    top: `${(1 - scale) * 50}%`,
                    left: `${(1 - scale) * 50}%`,
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                  }}
                />
              ))}
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#25D366]/40"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
                  {done ? (
                    <CheckCircle className="w-6 h-6 text-[#25D366]" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366] animate-pulse-green">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/50 font-mono">Progress</span>
              <span className="text-xs text-[#25D366] font-mono font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full progress-bar-animated"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #25D366, #128C7E, #25D366)",
                  backgroundSize: "200% 100%",
                  animation: progress < 100 ? "progressFill 0s, shimmer 2s linear infinite" : undefined,
                  boxShadow: "0 0 12px hsla(142,70%,45%,0.6)",
                }}
              />
            </div>
          </div>

          {/* Steps list */}
          <div className="space-y-2.5">
            {STEPS.map((step, i) => {
              const isCompleted = completedSteps.includes(i);
              const isActive = currentStep === i && !isCompleted;
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#25D366]/10 border border-[#25D366]/25"
                      : isCompleted
                      ? "opacity-60"
                      : "opacity-25"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isCompleted ? "bg-[#25D366]/20" : isActive ? "bg-[#25D366]/15" : "bg-white/5"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    ) : (
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#25D366] animate-pulse-green" : "text-white/30"}`} />
                    )}
                  </div>
                  <span className={`text-sm font-mono ${isActive ? "text-white" : isCompleted ? "text-white/60" : "text-white/30"}`}>
                    {step.message}
                  </span>
                  {isActive && (
                    <div className="ml-auto flex gap-1">
                      {[0, 1, 2].map(d => (
                        <span key={d} className="typing-dot w-1.5 h-1.5 rounded-full bg-[#25D366]" style={{ animationDelay: `${d * 0.2}s` }} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Success notification */}
        {done && (
          <div className="success-notification glass-card rounded-xl p-4 border border-[#25D366]/40 bg-[#25D366]/10 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-[#25D366] flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Access Granted!</div>
              <div className="text-xs text-[#25D366]/80 font-mono">Loading conversation data...</div>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-[11px] text-white/20">
          Demo only — no real surveillance is taking place
        </p>
      </div>
    </div>
  );
}
