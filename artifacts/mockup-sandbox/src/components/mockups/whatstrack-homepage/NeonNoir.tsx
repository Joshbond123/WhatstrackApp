import React, { useState, useEffect } from "react";
import { Eye, Shield, Activity, Zap, Lock, Terminal, Radio, Server, Check } from "lucide-react";

export default function NeonNoir() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden selection:bg-green-500 selection:text-black flex flex-col">
      {/* Scanlines Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
      <header className="relative z-20 border-b border-green-500/20 bg-black/80 backdrop-blur-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Eye className="w-8 h-8 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <div className="absolute inset-0 bg-green-400 opacity-20 blur-xl rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl tracking-tighter uppercase font-bold text-white">
                Whats<span className="text-green-500">track</span>
              </h1>
              <span className="text-[10px] tracking-widest text-green-500/70 uppercase">Advanced Monitor v2.4</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 border border-green-500/30 px-4 py-1.5 rounded-none bg-green-500/5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs uppercase tracking-wider text-green-400">System Online</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-20 flex flex-col items-center justify-center px-4 py-12 lg:py-20">
        
        {/* Abstract Background Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 border border-green-500 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
            <div className="absolute inset-8 border border-green-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ borderStyle: 'dotted' }}></div>
            <div className="absolute inset-16 border border-green-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-[48%] bg-green-500 blur-3xl opacity-50"></div>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto relative space-y-12">
          
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400 mb-4">
              <Terminal className="w-3 h-3" />
              <span>WHATSAPP INTERCEPT SYSTEM ONLINE</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] ${glitchActive ? 'translate-x-1 -translate-y-1' : ''}`}>
              Spy on <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">Any Number</span>
            </h2>
            <p className="text-green-400/80 text-sm md:text-base max-w-xl mx-auto tracking-wide leading-relaxed">
              Enter the WhatsApp number of your target. We breach their account and deliver every message, photo, video, and call log directly to you.
            </p>
          </div>

          {/* Target Input Card */}
          <div className="border border-green-500/30 bg-black/60 p-1 relative backdrop-blur-md group">
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-green-500"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-green-500"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-green-500"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-green-500"></div>

            <div className="border border-green-500/20 p-6 md:p-8 space-y-6 bg-gradient-to-b from-green-500/5 to-transparent">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-green-500/70 flex items-center gap-2">
                  <Radio className="w-3 h-3" />
                  Target WhatsApp Number (with country code)
                </label>
                <div className={`relative flex items-center border ${isFocused ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]' : 'border-green-500/30'} bg-black transition-all duration-300`}>
                  <div className="pl-4 pr-2 text-green-500/50 text-xl md:text-2xl font-light">
                    {'>'}
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 555 000 0000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent border-none outline-none py-4 text-xl md:text-2xl text-green-400 placeholder-green-500/20 tracking-wider font-mono"
                  />
                  <div className={`w-3 h-6 bg-green-500 mr-4 ${isFocused ? 'animate-pulse opacity-100' : 'opacity-0'} transition-opacity`}></div>
                </div>
              </div>

              <button className="w-full relative group overflow-hidden border border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-300 py-4 px-8 uppercase tracking-widest font-bold text-[#25D366] hover:text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Activity className="w-5 h-5" />
                  Access Their Messages Now
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent"></div>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-green-500/20 py-4 bg-green-500/5">
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">2.4M+</div>
              <div className="text-[10px] uppercase tracking-widest text-green-500/70">Nodes Active</div>
            </div>
            <div className="text-center border-l border-r border-green-500/20 space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">99.8%</div>
              <div className="text-[10px] uppercase tracking-widest text-green-500/70">Uptime</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">0ms</div>
              <div className="text-[10px] uppercase tracking-widest text-green-500/70">Latency</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Lock, title: "Read All Messages", desc: "Every text, photo, video and voice note from their WhatsApp — delivered to you." },
              { icon: Shield, title: "Zero Trace", desc: "The target gets no notification. No alerts. No sign you were ever there." },
              { icon: Server, title: "Full Chat History", desc: "Access months of past conversations. Deleted messages retrieved from backup." }
            ].map((f, i) => (
              <div key={i} className="border border-green-500/20 bg-black/40 p-4 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300">
                <f.icon className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{f.title}</h3>
                <p className="text-xs text-green-500/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="relative z-20 border-t border-green-500/20 bg-black py-4 px-4 text-center">
        <p className="text-[10px] text-green-500/40 max-w-4xl mx-auto uppercase tracking-wider leading-relaxed">
          WARNING: Unauthorized access to computer systems is prohibited by law. This tool is provided for demonstration and authorized security auditing purposes only. Operators are solely responsible for compliance with local and international regulations.
        </p>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}