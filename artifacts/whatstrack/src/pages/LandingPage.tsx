import { useState } from "react";
import { Shield, Eye, Lock, Wifi, AlertCircle, ChevronRight, Star, Users, Activity } from "lucide-react";

interface Props {
  onTrack: (phone: string) => void;
}

export default function LandingPage({ onTrack }: Props) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    if (!cleaned) return "Please enter a phone number.";
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
    <div className="min-h-screen whatsapp-bg flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center animate-glow-pulse">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">Whats<span className="text-[#25D366]">track</span></span>
              <div className="text-[10px] text-[#25D366]/70 font-mono uppercase tracking-widest -mt-0.5">Advanced Monitor v2.4</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-green inline-block"></span>System Online</span>
            <span>SSL Secured</span>
            <span>Demo Mode</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Demo disclaimer banner */}
        <div className="mb-8 px-4 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono flex items-center gap-2 animate-fade-in-up">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>DEMONSTRATION PURPOSES ONLY — No real data is collected or processed</span>
        </div>

        {/* Main card */}
        <div className="w-full max-w-md glass-card rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                <Lock className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-2">Access WhatsApp Account</h1>
          <p className="text-white/50 text-sm text-center mb-8 leading-relaxed">
            Enter the target phone number to begin remote monitoring session
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-[#25D366]/80 uppercase tracking-wider mb-2 block">
                Target Phone Number
              </label>
              <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-200 bg-white/5 ${
                error
                  ? "border-red-500/50 bg-red-500/5"
                  : "border-white/10 focus-within:border-[#25D366]/50 focus-within:bg-[#25D366]/5"
              }`}>
                <Wifi className="w-4 h-4 text-white/30 flex-shrink-0" />
                <input
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                  placeholder="+1 555 000 0000"
                  className="flex-1 bg-transparent text-white placeholder-white/25 text-base outline-none font-mono"
                  autoComplete="off"
                />
              </div>
              {error && (
                <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3" /> {error}
                </p>
              )}
              <p className="mt-1.5 text-xs text-white/30">Include country code (e.g. +44, +1, +91)</p>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 4px 24px hsla(142, 70%, 45%, 0.35)"
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 32px hsla(142, 70%, 45%, 0.55)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px hsla(142, 70%, 45%, 0.35)")}
            >
              <Eye className="w-5 h-5" />
              Track / Access Account
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          {/* Feature list */}
          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-3">
            {[
              { icon: Shield, label: "Encrypted" },
              { icon: Eye, label: "Live Data" },
              { icon: Lock, label: "Anonymous" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="w-4 h-4 text-[#25D366]/70" />
                <span className="text-[11px] text-white/40">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-6 flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {[
            { icon: Users, value: "2.4M+", label: "Accounts accessed" },
            { icon: Star, value: "4.9/5", label: "User rating" },
            { icon: Activity, value: "99.8%", label: "Uptime" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2 text-center">
              <Icon className="w-3.5 h-3.5 text-[#25D366]/60" />
              <div>
                <div className="text-sm font-bold text-white">{value}</div>
                <div className="text-[10px] text-white/30">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[11px] text-white/20 max-w-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          ⚠️ This is a demonstration web application created for educational purposes only.
          No actual data collection, hacking, or surveillance takes place. All data shown is fictional.
        </p>
      </main>
    </div>
  );
}
