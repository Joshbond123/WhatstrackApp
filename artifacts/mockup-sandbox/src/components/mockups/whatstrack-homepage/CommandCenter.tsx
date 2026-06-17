import React, { useState } from 'react';
import { Eye, Shield, Lock, Activity, Server, Search, Globe, ChevronRight, Terminal, Smartphone } from 'lucide-react';

export default function CommandCenter() {
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 8) {
      setIsError(true);
    } else {
      setIsError(false);
      // Simulate submission in mockup
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#25D366]/30 overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, #0a1f10 0%, #050505 100%)',
        backgroundSize: '100% 100%' 
      }} />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#25D366 1px, transparent 1px), linear-gradient(90deg, #25D366 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-10 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#112a18] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Eye className="w-6 h-6 text-[#25D366]" />
            <span className="text-xl tracking-tight">Whats<strong className="font-bold">track</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#0a1f10] border border-[#112a18]">
            <Terminal className="w-3 h-3 text-[#25D366]" />
            <span className="text-xs font-mono text-[#25D366]/80 tracking-wider">Advanced Monitor v2.4</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1f10]/50 border border-[#25D366]/20">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-mono text-[#25D366] uppercase tracking-widest">System Online</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column - Copy & Input */}
        <div className="flex-1 max-w-2xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded border border-[#25D366]/30 bg-[#25D366]/5">
            <Globe className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs font-mono text-[#25D366] tracking-widest uppercase">Global Surveillance Network</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
            <span className="block text-gray-500">Monitor.</span>
            <span className="block text-gray-300">Analyze.</span>
            <span className="block font-medium">Extract.</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Deploy advanced OSINT tools to securely interface with the target network. Gain immediate read access to communications, media, and metadata.
          </p>
          
          {/* Action Area */}
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 rounded-lg shadow-[0_0_40px_rgba(37,211,102,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#25D366]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-xs font-mono text-gray-500 tracking-wider uppercase block mb-1">Target Identification</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className={`w-4 h-4 ${isError ? 'text-red-500' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 000 0000"
                    className={`w-full bg-[#050505] border ${isError ? 'border-red-500/50 text-red-500' : 'border-[#1a1a1a] text-white focus:border-[#25D366]/50'} rounded px-4 py-4 pl-11 outline-none font-mono text-sm transition-colors`}
                  />
                  {isError && (
                    <span className="absolute -bottom-6 left-0 text-xs font-mono text-red-500">Error: Invalid format. Include country code.</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-[#050505] font-semibold px-8 py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98] disabled:opacity-50"
                >
                  <Activity className="w-5 h-5" />
                  <span>Initiate Tracking</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Trust Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#111]">
            <div>
              <div className="text-2xl font-light text-white mb-1">2.4M<span className="text-[#25D366]">+</span></div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Targets Tracked</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">99.8<span className="text-[#25D366]">%</span></div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">System Uptime</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-light text-white mb-1">AES<span className="text-[#25D366]">-256</span></div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Encryption</div>
            </div>
          </div>
        </div>

        {/* Right Column - Visualizer */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-1000">
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl flex flex-col transform rotate-y-[-5deg] rotate-x-[5deg]">
            {/* Window Header */}
            <div className="bg-[#111] border-b border-[#222] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-xs font-mono text-gray-500">Live_Intercept_Viewer.exe</div>
            </div>
            
            {/* Visualizer Content */}
            <div className="flex-1 p-6 relative font-mono flex flex-col justify-end">
              <div className="absolute inset-0 bg-[#050505]" />
              
              {/* Radar / Grid */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-[#25D366]/10 rounded-full flex items-center justify-center">
                <div className="w-[70%] aspect-square border border-[#25D366]/10 rounded-full flex items-center justify-center">
                  <div className="w-[40%] aspect-square border border-[#25D366]/20 rounded-full relative">
                    {/* Sweep */}
                    <div className="absolute inset-0 origin-center animate-[spin_4s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(37, 211, 102, 0.2) 100%)' }} />
                  </div>
                </div>
                {/* Crosshairs */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#25D366]/10" />
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#25D366]/10" />
              </div>

              {/* Data Stream */}
              <div className="relative z-10 flex flex-col gap-2 opacity-80 h-full overflow-hidden mask-image:linear-gradient(to_bottom,transparent,black_20%)">
                <div className="text-[#25D366] text-xs">Waiting for target input...</div>
                <div className="text-gray-600 text-[10px]">{"<SYS> Loading node configurations..."}</div>
                <div className="text-gray-600 text-[10px]">{"<SYS> Establishing secure tunnel [PORT 443]"}</div>
                <div className="text-gray-600 text-[10px]">{"<SYS> Bypassing initial handshakes..."}</div>
                <div className="mt-auto pt-4 border-t border-[#111]">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[#25D366]/50 text-xs mb-1">NETWORK STATUS</div>
                      <div className="text-white text-sm">AWAITING CONNECTION</div>
                    </div>
                    <Smartphone className="w-8 h-8 text-[#25D366]/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 border-t border-[#111] bg-[#050505]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a]">
              <Lock className="w-6 h-6 text-[#25D366] mb-4" />
              <h3 className="text-white font-medium mb-2">Total Anonymity</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Your connection is routed through encrypted proxies. The target is never alerted to monitoring activities.</p>
            </div>
            <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a]">
              <Activity className="w-6 h-6 text-[#25D366] mb-4" />
              <h3 className="text-white font-medium mb-2">Real-Time Sync</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Access live messages, media, and location data instantly as it transverses the network.</p>
            </div>
            <div className="p-6 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a]">
              <Server className="w-6 h-6 text-[#25D366] mb-4" />
              <h3 className="text-white font-medium mb-2">Cloud Extraction</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Historical data is silently pulled from cloud backups and cached on our secure offshore servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="relative z-10 border-t border-[#111] py-6 text-center px-6">
        <p className="text-[10px] text-gray-600 font-mono max-w-3xl mx-auto uppercase tracking-wider leading-relaxed">
          Disclaimer: This system is provided strictly for authorized surveillance and demonstration purposes. 
          Unauthorized use on accounts you do not own is prohibited. By initiating a trace, you confirm compliance with local regulations.
        </p>
      </footer>
    </div>
  );
}
