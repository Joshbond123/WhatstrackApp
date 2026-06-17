import React from "react";
import { Eye, Shield, Zap, Globe, Lock, Search, Activity, ChevronRight, User } from "lucide-react";

export default function SleekSocial() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-[#25D366]/30 overflow-x-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#25D366]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
            <Eye className="w-5 h-5 text-[#25D366]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-tight">Whats<strong className="font-semibold">track</strong></span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Advanced Monitor v2.4</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/50 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">System Online</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-24 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Copy & Form */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Lightning Fast Analytics</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
              Insights that <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">empower you.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Enter any authorized number to instantly access activity analytics, status timelines, and interaction patterns in a beautiful dashboard.
            </p>

            <div className="p-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-lg mx-auto lg:mx-0">
              <div className="relative flex-1 flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 pl-12 pr-4 h-14 text-lg font-mono outline-none"
                />
              </div>
              <button className="h-14 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer">
                Track Number
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center"><User className="w-3 h-3 text-slate-400" /></div>
                <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center"><User className="w-3 h-3 text-slate-300" /></div>
                <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-950 flex items-center justify-center"><User className="w-3 h-3 text-slate-200" /></div>
              </div>
              <span>Join 2.4M+ users today</span>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex-1 relative w-full max-w-lg mx-auto lg:mx-0 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/20 to-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Main Mockup Card */}
            <div className="absolute inset-4 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">+1 (555) 019-2834</div>
                    <div className="text-sm text-[#25D366] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]"></span> Online Now
                    </div>
                  </div>
                </div>
                <Activity className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="space-y-4 flex-1">
                {/* Chat bubbles */}
                <div className="flex items-end gap-2">
                  <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm p-3 text-sm text-slate-300 max-w-[80%]">
                    Meeting confirmed for 3 PM?
                  </div>
                </div>
                <div className="flex items-end justify-end gap-2">
                  <div className="bg-[#25D366]/10 border border-[#25D366]/20 text-slate-200 rounded-2xl rounded-br-sm p-3 text-sm max-w-[80%]">
                    Yes, see you then!
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm p-3 text-sm text-slate-300 max-w-[80%] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" /> Voice call (14:23)
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Last updated: Just now</span>
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> E2E Encrypted</span>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -left-8 top-1/4 bg-slate-900 border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Location Ping</div>
                  <div className="text-xs text-slate-400">New York, US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="border-t border-white/5 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#25D366] mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">100% Anonymous</h3>
              <p className="text-slate-400 leading-relaxed">
                Zero footprint monitoring. The target account never receives notifications, alerts, or any indication of your activity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#25D366] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Live Real-time Data</h3>
              <p className="text-slate-400 leading-relaxed">
                Updates flow in real-time. See online status, typing indicators, and message events exactly as they happen.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:bg-slate-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#25D366] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Military-grade Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Your identity and session data are protected with AES-256 encryption. We don't store logs of your activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-16 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">99.8%</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">2.4M+</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Accounts Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">0.4s</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Avg Latency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Discreet</div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="border-t border-white/5 py-8 text-center px-6 relative z-10 bg-slate-950">
        <p className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> Whatstrack is a demonstration application built for educational and conceptual purposes only. It does not possess actual surveillance capabilities and does not interface with WhatsApp's servers. Unauthorized tracking or monitoring of individuals without their explicit consent is illegal in most jurisdictions. By using this platform, you agree to our Terms of Service and acknowledge that this is a simulated environment.
        </p>
      </footer>
    </div>
  );
}
