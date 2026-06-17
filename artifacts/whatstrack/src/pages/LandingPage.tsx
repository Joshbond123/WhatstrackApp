import { useState } from "react";
import { Shield, Zap, Lock, Search, ChevronRight, User, Activity, Phone, AlertCircle } from "lucide-react";
import logoSrc from "@assets/file_00000000620072438d120d783eacc001_1781726536914.png";

interface Props {
  onTrack: (phone: string) => void;
  isLoading?: boolean;
}

export default function LandingPage({ onTrack, isLoading }: Props) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    if (!cleaned) return "Please enter a WhatsApp number.";
    if (!/^\+?[1-9]\d{6,14}$/.test(cleaned)) return "Enter a valid number with country code (e.g. +1 555 000 0000).";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validatePhone(phone);
    if (err) { setError(err); return; }
    setError("");
    onTrack(phone.replace(/\s/g, ""));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (error) setError("");
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-[#25D366]/30 overflow-x-hidden relative transition-all duration-300 ${isLoading ? "pointer-events-none" : ""}`}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#25D366]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Whatstrack"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl tracking-tight font-semibold">Whats<span className="text-[#25D366]">track</span></span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500">Advanced Monitor v2.4</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">System Online</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Copy & Form */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium mb-7">
              <Zap className="w-4 h-4" />
              <span>Instant WhatsApp Access</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 leading-[1.08]">
              Read anyone's{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-emerald-300">
                WhatsApp messages.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Enter the WhatsApp number of the person you want to spy on. Get full access to their chats, photos, videos, voice notes, and call history — instantly.
            </p>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto lg:mx-0">
              <div className="p-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400 flex-shrink-0" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    disabled={isLoading}
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 pl-12 pr-4 h-14 text-base font-mono outline-none"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-14 px-7 bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-60 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer whitespace-nowrap"
                >
                  Access Messages
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              {error && (
                <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5 justify-center lg:justify-start">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </p>
              )}
              <p className="mt-3 text-xs text-slate-500 text-center lg:text-left">
                Include country code — e.g. +44, +1, +91, +234
              </p>
            </form>
          </div>

          {/* Right: Chat preview card */}
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/15 to-emerald-600/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6">
              {/* Contact header */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366]/30 to-emerald-700/30 border border-[#25D366]/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">+1 (555) 019-2834</div>
                    <div className="text-sm text-[#25D366] flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block"></span>
                      Online Now
                    </div>
                  </div>
                </div>
                <Activity className="w-5 h-5 text-slate-500" />
              </div>

              {/* Mock messages */}
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-slate-200 max-w-[78%]">
                    Can you meet me at 7pm tonight?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#005c4b] border border-[#25D366]/10 text-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[78%]">
                    Sure, where?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-slate-200 max-w-[78%]">
                    The usual place. Don't tell anyone 🔒
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-slate-200 max-w-[78%] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                    <span>Voice call · 14:23</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Last updated: just now</span>
                <span className="flex items-center gap-1 text-[#25D366]/70">
                  <Lock className="w-3 h-3" /> Encrypted
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -left-6 top-1/3 bg-slate-900 border border-white/10 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-xl"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Access Granted</div>
                  <div className="text-xs text-slate-400">Undetected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 border-t border-white/5 bg-slate-900/30">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Full Chat History",
                desc: "Read every message sent and received — including deleted ones — from any WhatsApp number you enter.",
              },
              {
                icon: Zap,
                title: "Photos, Videos & Calls",
                desc: "View every photo, video, and voice note they've shared. Full call logs with duration and timestamps.",
              },
              {
                icon: Shield,
                title: "They'll Never Know",
                desc: "Completely silent monitoring. No notification, no badge, no trace — the target has no idea you're watching.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#25D366] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-14">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-10 lg:gap-24">
          {[
            { value: "99.8%", label: "Success Rate" },
            { value: "2.4M+", label: "Accounts Read" },
            { value: "< 5s", label: "Time to Access" },
            { value: "100%", label: "Undetected" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center px-6 bg-slate-950">
        <p className="text-xs text-slate-600 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-slate-500">Disclaimer:</strong> Whatstrack is a demonstration application built for educational and conceptual purposes only. It does not possess actual surveillance capabilities and does not interface with WhatsApp's servers. All data shown is fictional.
        </p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
