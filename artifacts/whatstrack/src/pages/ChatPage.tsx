import { useRef, useEffect } from "react";
import { ArrowLeft, CheckCircle, Eye, Shield } from "lucide-react";
import logoSrc from "@assets/file_00000000620072438d120d783eacc001_1781726536914.png";
import videoSrc from "@assets/YouCut_20260617_183725898_1781726520015.mp4";

interface Props {
  phone: string;
  onReset: () => void;
}

export default function ChatPage({ phone, onReset }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {
      const handler = () => { vid.play().catch(() => {}); };
      document.addEventListener("click", handler, { once: true });
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-slate-950"
      style={{ animation: "pageReveal 0.5s ease-out forwards" }}
    >
      {/* ── Access Granted sticky banner ── */}
      <div
        className="sticky top-0 z-30 flex items-center gap-3 px-5 py-2.5"
        style={{
          background: "linear-gradient(90deg, rgba(37,211,102,0.13) 0%, rgba(18,140,126,0.07) 100%)",
          borderBottom: "1px solid rgba(37,211,102,0.22)",
          animation: "bannerDrop 0.55s cubic-bezier(0.34,1.4,0.64,1) forwards",
        }}
      >
        <div className="w-6 h-6 rounded-full bg-[#25D366]/15 border border-[#25D366]/35 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
        </div>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm font-bold text-white tracking-tight">Access Granted</span>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/08 text-[#25D366]">
            Live
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline truncate">{phone}</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-slate-500 flex-shrink-0">
          <Eye className="w-3.5 h-3.5" />
          <span>Monitoring active · target unaware</span>
        </div>
      </div>

      {/* ── Top bar ── */}
      <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border-b border-white/5">
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white text-xs font-mono cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          New Target
        </button>

        <div className="flex items-center gap-2 flex-1 min-w-0 justify-center">
          <img src={logoSrc} alt="Whatstrack" className="w-5 h-5 rounded-md object-cover flex-shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#25D366]/50">Whatstrack</span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#25D366] flex-shrink-0"
            style={{ animation: "blip 1.6s ease-in-out infinite" }}
          />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/08 border border-[#25D366]/15">
          <Shield className="w-3 h-3 text-[#25D366]" />
          <span className="text-[10px] font-mono text-[#25D366]/70 uppercase tracking-wider">Undetected</span>
        </div>
      </div>

      {/* ── Video — primary content ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-8"
        style={{ animation: "contentReveal 0.6s 0.1s ease-out both" }}
      >
        {/* Label above */}
        <div className="mb-4 flex items-center gap-2">
          <span
            className="text-[11px] font-mono text-slate-500 uppercase tracking-widest"
          >
            Intercepted messages for
          </span>
          <span className="text-[11px] font-mono text-slate-300">{phone}</span>
        </div>

        {/* Video container */}
        <div
          className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(37,211,102,0.06)]"
          style={{
            border: "1px solid rgba(37,211,102,0.12)",
            background: "#000",
          }}
        >
          {/* Fake status bar above video */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" style={{ animation: "blip 1.6s ease-in-out infinite" }} />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Live feed · intercepted · end-to-end decrypted</span>
            <span className="ml-auto text-[10px] font-mono text-slate-600">{phone}</span>
          </div>

          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full block"
            style={{
              maxHeight: "65vh",
              objectFit: "contain",
              background: "#0b1014",
              display: "block",
            }}
            onContextMenu={e => e.preventDefault()}
          />
        </div>

        {/* Label below */}
        <p className="mt-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest text-center">
          Content is live · all data encrypted in transit · target unaware
        </p>
      </div>

      <style>{`
        @keyframes pageReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bannerDrop {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentReveal {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blip {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
