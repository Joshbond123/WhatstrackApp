import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Search, MoreVertical, Phone, Video, Check, CheckCheck, Image, FileVideo, Info } from "lucide-react";

interface Props {
  phone: string;
  onReset: () => void;
}

type Msg = {
  id: number;
  type: "in" | "out";
  content: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  media?: "image" | "video";
  mediaLabel?: string;
};

const MESSAGES: Msg[] = [
  { id: 1, type: "in", content: "Hey! Are you coming tonight?", time: "6:02 PM" },
  { id: 2, type: "out", content: "Yeah, just finishing up some stuff at the office.", time: "6:04 PM", status: "read" },
  { id: 3, type: "in", content: "Okay cool, bring something to drink 🍻", time: "6:05 PM" },
  { id: 4, type: "out", content: "Sure! What time does it start?", time: "6:06 PM", status: "read" },
  { id: 5, type: "in", content: "8 PM. Don't be late like last time 😂", time: "6:07 PM" },
  { id: 6, type: "in", content: "", time: "6:08 PM", media: "image", mediaLabel: "IMG_20240616_180801.jpg" },
  { id: 7, type: "out", content: "Haha I won't. That looks great btw!", time: "6:09 PM", status: "read" },
  { id: 8, type: "in", content: "The place is really nice. You'll love it 😊", time: "6:10 PM" },
  { id: 9, type: "out", content: "Can't wait. Should I bring anything else?", time: "6:12 PM", status: "read" },
  { id: 10, type: "in", content: "Nah just yourself. Oh and maybe snacks lol", time: "6:13 PM" },
  { id: 11, type: "out", content: "Perfect. See you at 8 then!", time: "6:15 PM", status: "read" },
  { id: 12, type: "in", content: "", time: "6:18 PM", media: "video", mediaLabel: "VID_20240616_181700.mp4" },
  { id: 13, type: "in", content: "Quick preview haha", time: "6:18 PM" },
  { id: 14, type: "out", content: "😂😂 That's amazing. See you soon!", time: "6:20 PM", status: "delivered" },
  { id: 15, type: "in", content: "👋", time: "6:21 PM" },
];

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
  const [showInfo, setShowInfo] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const contactName = getContactName(phone);
  const avatarColor = AVATAR_COLORS[hashPhone(phone) % AVATAR_COLORS.length];
  const initials = contactName.split(" ").map(n => n[0]).join("");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#0b1014]">
      {/* Dashboard topbar */}
      <div className="flex-shrink-0 border-b border-white/5 bg-[#111b21] px-4 py-3 flex items-center gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white text-xs font-mono cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          New Target
        </button>
        <div className="flex-1 flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#25D366]/60">Monitor Active</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-green inline-block"></span>
        </div>
        <span className="text-[10px] text-white/25 font-mono hidden sm:block">{phone}</span>
      </div>

      {/* WhatsApp-style chat layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar (desktop) */}
        <div className="hidden md:flex w-80 flex-col border-r border-white/5 bg-[#111b21]">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: avatarColor }}>
                {initials}
              </div>
              <span className="font-semibold text-white text-sm">{contactName}</span>
            </div>
            <Search className="w-4 h-4 text-white/40 cursor-pointer" />
          </div>

          {/* Chat list */}
          <div className="flex-1 overflow-y-auto">
            {[
              { name: contactName, last: "See you at 8 then!", time: "6:20 PM", unread: 0, color: avatarColor },
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
        <div className="flex-1 flex flex-col">
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

          {/* Info banner */}
          {showInfo && (
            <div className="flex-shrink-0 mx-3 mt-3 px-4 py-2.5 rounded-xl bg-[#1f2c34] border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-400/80 animate-fade-in-up">
              <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed flex-1">
                <strong>Demo only.</strong> Messages shown below are fictional sample data for demonstration purposes. No real WhatsApp data has been accessed.
              </span>
              <button onClick={() => setShowInfo(false)} className="text-amber-400/50 hover:text-amber-400 cursor-pointer text-base leading-none -mt-0.5 flex-shrink-0">×</button>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 chat-container">
            {/* Date badge */}
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 rounded-full bg-[#182229] text-white/40 text-[11px] font-mono">TODAY</span>
            </div>

            {MESSAGES.map((msg, i) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === "out" ? "justify-end" : "justify-start"} mb-0.5`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className={`max-w-[75%] sm:max-w-[60%] px-3 pt-2 pb-1.5 rounded-xl relative ${
                    msg.type === "out"
                      ? "chat-bubble-out rounded-tr-sm"
                      : "chat-bubble-in rounded-tl-sm"
                  }`}
                  style={{
                    background: msg.type === "out" ? "#005c4b" : "#202c33",
                    boxShadow: msg.type === "out"
                      ? "0 1px 0.5px rgba(0,0,0,0.3)"
                      : "0 1px 0.5px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Media */}
                  {msg.media && (
                    <div className="mb-1.5 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center"
                      style={{ width: 200, height: 130 }}
                    >
                      {msg.media === "image" ? (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <div className="w-full h-full bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/30 flex flex-col items-center justify-center gap-2">
                            <Image className="w-8 h-8 text-[#25D366]/60" />
                            <span className="text-[10px] text-white/40 font-mono px-2 text-center truncate w-full text-center">{msg.mediaLabel}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d1117]/80 flex flex-col items-center justify-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <FileVideo className="w-6 h-6 text-white/50" />
                          </div>
                          <span className="text-[10px] text-white/40 font-mono px-2 text-center truncate w-full text-center">{msg.mediaLabel}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Text */}
                  {msg.content && (
                    <p className="text-[14px] text-white/90 leading-relaxed break-words">{msg.content}</p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    <span className="text-[11px] text-white/35">{msg.time}</span>
                    {msg.type === "out" && (
                      msg.status === "read" ? (
                        <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                      ) : msg.status === "delivered" ? (
                        <CheckCheck className="w-3.5 h-3.5 text-white/40" />
                      ) : (
                        <Check className="w-3.5 h-3.5 text-white/40" />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div className="flex justify-start mt-2">
              <div className="px-4 py-3 rounded-xl rounded-tl-sm bg-[#202c33] flex items-center gap-1.5">
                {[0, 1, 2].map(i => (
                  <span key={i} className="typing-dot w-2 h-2 rounded-full bg-white/40 inline-block" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>

            <div ref={chatEndRef} />
          </div>

          {/* Input bar (disabled/fake) */}
          <div className="flex-shrink-0 px-3 py-3 bg-[#202c33] border-t border-white/5 flex items-center gap-3">
            <div className="flex-1 px-4 py-2.5 rounded-full bg-[#2a3942] text-white/25 text-sm select-none">
              Type a message...
            </div>
            <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center cursor-not-allowed opacity-60">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
