import { useRef, useEffect } from "react";
import { ArrowLeft, Search, MoreVertical, Phone, Video, CheckCircle, Eye } from "lucide-react";
import logoSrc from "@assets/file_00000000620072438d120d783eacc001_1781726536914.png";
import videoSrc from "@assets/YouCut_20260617_183725898_1781726520015.mp4";

interface Props {
  phone: string;
  onReset: () => void;
}

const AVATAR_COLORS = ["#25D366", "#128C7E", "#34B7F1", "#ECB22E", "#E74C3C"];

function hashPhone(phone: string) {
  let h = 0;
  for (const c of phone) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff;
  return Math.abs(h);
}

function getContactName(phone: string) {
  const names = ["Alex Morgan", "Jordan Kim", "Sam Rivera", "Taylor Chen", "Casey Patel"];
  return names[hashPhone(phone) % names.length];
}

export default function ChatPage({ phone, onReset }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contactName = getContactName(phone);
  const avatarColor = AVATAR_COLORS[hashPhone(phone) % AVATAR_COLORS.length];
  const initials = contactName.split(" ").map(n => n[0]).join("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#0b1014]">

      {/* Access Granted sticky banner */}
      <div
        className="flex-shrink-0 sticky top-0 z-20 flex items-center gap-3 px-5 py-3"
        style={{
          background: "linear-gradient(135deg, rgba(37,211,102,0.12) 0%, rgba(18,140,126,0.08) 100%)",
          borderBottom: "1px solid rgba(37,211,102,0.25)",
          animation: "slideDownBanner 0.5s cubic-bezier(0.34,1.2,0.64,1) forwards",
        }}
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-[#25D366]" />
        </div>
        <div className="flex-1 min-w-0 flex items-center gap-3">
          <span className="text-sm font-bold text-white">Access Granted</span>
          <span
            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
            style={{ color: "#25D366", borderColor: "rgba(37,211,102,0.3)", background: "rgba(37,211,102,0.08)" }}
          >
            Live
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline truncate">
            {phone}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
          <Eye className="w-3.5 h-3.5" />
          <span>Monitoring active · target unaware</span>
        </div>
      </div>

      {/* Dashboard topbar */}
      <div className="flex-shrink-0 border-b border-white/5 bg-[#111b21] px-4 py-3 flex items-center gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white text-xs font-mono cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          New Target
        </button>
        <div className="flex items-center gap-2 flex-1">
          <img src={logoSrc} alt="Whatstrack" className="w-5 h-5 rounded-md object-cover" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#25D366]/60">Whatstrack</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block" style={{ animation: "pulse-green 1.5s ease-in-out infinite" }}></span>
        </div>
        <span className="text-[10px] text-white/25 font-mono hidden sm:block">{phone}</span>
      </div>

      {/* WhatsApp-style chat layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar (desktop) */}
        <div className="hidden md:flex w-80 flex-col border-r border-white/5 bg-[#111b21]">
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: avatarColor }}>
                {initials}
              </div>
              <span className="font-semibold text-white text-sm">{contactName}</span>
            </div>
            <Search className="w-4 h-4 text-white/40 cursor-pointer" />
          </div>

          <div className="flex-1 overflow-y-auto">
            {[
              { name: contactName, last: "👀 Video captured", time: "Now", unread: 0, color: avatarColor },
              { name: "Mom", last: "Call me when you're free ❤️", time: "2:15 PM", unread: 2, color: "#E74C3C" },
              { name: "Work Group", last: "Meeting at 3pm confirmed", time: "Yesterday", unread: 0, color: "#34B7F1" },
              { name: "David", last: "👍", time: "Yesterday", unread: 0, color: "#ECB22E" },
              { name: "Sarah K.", last: "Thanks so much!", time: "Mon", unread: 0, color: "#9B59B6" },
            ].map((chat, i) => (
              <div
                key={chat.name}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${i === 0 ? "bg-white/8" : "hover:bg-white/5"}`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: chat.color }}>
                  {chat.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white truncate">{chat.name}</span>
                    <span className={`text-[11px] ${chat.unread > 0 ? "text-[#25D366]" : "text-white/30"}`}>{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 truncate">{chat.last}</span>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-[#25D366] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#202c33] flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: avatarColor }}>
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-white text-sm">{contactName}</div>
              <div className="text-[11px] text-[#25D366]">online</div>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <Video className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Phone className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <MoreVertical className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Video content area */}
          <div className="flex-1 overflow-y-auto chat-container flex flex-col">
            <div className="flex-1 flex items-center justify-center p-4">
              <div
                className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  animation: "videoReveal 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards",
                  border: "1px solid rgba(37,211,102,0.15)",
                }}
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-auto block"
                  style={{ maxHeight: "70vh", objectFit: "contain", background: "#0b1014" }}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
            </div>
          </div>

          {/* Fake input bar */}
          <div className="flex-shrink-0 px-3 py-3 bg-[#202c33] border-t border-white/5 flex items-center gap-3">
            <div className="flex-1 px-4 py-2.5 rounded-full bg-[#2a3942] text-white/25 text-sm select-none">
              Type a message...
            </div>
            <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center cursor-not-allowed opacity-60">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDownBanner {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes videoReveal {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
