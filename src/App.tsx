import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, Bell, Eye, EyeOff, RefreshCw, Wallet, 
  ArrowUp, ArrowDown, ArrowLeftRight, FileText,
  ChevronRight, Play, QrCode, GraduationCap, User, Star, Plus, Shield, Search, X,
  Copy, Check, Share, ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('accueil');

  return (
    <div className="max-w-[400px] w-full mx-auto bg-[#fafafa] min-h-screen relative font-sans shadow-xl overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between sticky top-0 z-20 bg-[#fafafa]">
        <button className="p-2 -ml-2 text-gray-800 hover:bg-gray-200/50 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setActiveTab('accueil')}>
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-900 border-l-[2.5px] border-r-[2.5px] border-t-[2.5px] border-b-[2.5px]">
                   <div className="w-1.5 h-3 bg-[#36a655] mr-1 mt-1 rounded-[1px]"></div>
                   <div className="w-1.5 h-4.5 bg-[#36a655] rounded-[1px] transform translate-y-0.5"></div>
                   <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#fafafa] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#36a655]" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-0.5">
                    <div className="text-gray-900 font-black text-[16px] tracking-tighter leading-none mb-1">
                        <span>GOAL</span> <span className="text-[#36a655]">FINANCE</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="text-[7.5px] font-black tracking-widest text-gray-900 leading-none">AFRICA</span>
                       <span className="text-[7.5px] text-gray-500 font-medium leading-none whitespace-nowrap">Gère ton avenir. Vis ton rêve.</span>
                    </div>
                </div>
            </div>
        </div>

        <button className="relative p-2 -mr-2 text-gray-800 hover:bg-gray-200/50 rounded-full">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#fafafa] shadow-sm">3</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-28">
        {activeTab === 'accueil' && <AccueilTab setActiveTab={setActiveTab} />}
        {activeTab === 'analyse' && <AnalyseTab />}
        {activeTab === 'formation' && <FormationTab />}
        {activeTab === 'profil' && <ProfilTab />}
        {activeTab === 'payer' && <PayerTab />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-[400px] mx-auto bg-white border-t border-gray-100 flex justify-between items-end px-5 pb-8 pt-3 z-50 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
          <NavItem icon={<HomeIcon />} label="Accueil" active={activeTab === 'accueil'} onClick={() => setActiveTab('accueil')} />
          <NavItem icon={<ChartIcon />} label="Analyse" active={activeTab === 'analyse'} onClick={() => setActiveTab('analyse')} />
          
          <div className="relative -top-3 flex flex-col items-center group cursor-pointer px-2" onClick={() => setActiveTab('payer')}>
              <div className="w-[52px] h-[52px] bg-[#4dc46e] rounded-[18px] flex items-center justify-center text-white mb-1.5 transform transition-transform group-active:scale-95 shadow-lg shadow-[#4dc46e]/30">
                  <QrCode className="w-7 h-7" />
              </div>
              <span className={`text-[10px] font-bold ${activeTab === 'payer' ? 'text-[#36a655]' : 'text-gray-500'}`}>Payer</span>
          </div>
          
          <NavItem icon={<GraduationCap className="w-6 h-6" strokeWidth={2.5} />} label="Formation" active={activeTab === 'formation'} onClick={() => setActiveTab('formation')} />
          <NavItem icon={<User className="w-6 h-6" strokeWidth={2.5} />} label="Profil" active={activeTab === 'profil'} onClick={() => setActiveTab('profil')} />
      </nav>
    </div>
  );
}

function AccueilTab({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [showBalances, setShowBalances] = useState(true);

  const toggleBalances = async () => {
      if (typeof (DeviceMotionEvent as any) !== 'undefined' && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
          try {
              await (DeviceMotionEvent as any).requestPermission();
          } catch(e) {
              console.warn("Permission for devicemotion not granted", e);
          }
      }
      setShowBalances(!showBalances);
  };

  useEffect(() => {
    let lastX = 0, lastY = 0, lastZ = 0;
    let lastUpdate = 0;
    const SHAKE_THRESHOLD = 800;

    const handleDeviceMotion = (event: DeviceMotionEvent) => {
        const current = event.accelerationIncludingGravity;
        if (!current || current.x === null || current.y === null || current.z === null) return;

        const currentTime = new Date().getTime();
        const diffTime = currentTime - lastUpdate;
        
        if (diffTime > 100) {
            lastUpdate = currentTime;
            const speed = Math.abs(current.x + current.y + current.z - lastX - lastY - lastZ) / diffTime * 10000;
            
            if (speed > SHAKE_THRESHOLD) {
                setShowBalances((prev) => !prev);
            }
            
            lastX = current.x;
            lastY = current.y;
            lastZ = current.z;
        }
    };

    window.addEventListener('devicemotion', handleDeviceMotion, false);
    return () => {
        window.removeEventListener('devicemotion', handleDeviceMotion, false);
    };
  }, []);

  return (
    <main className="px-5 space-y-6 mt-2">
      {/* Profile Section */}
      <div className="flex items-start justify-between">
          <div className="flex gap-3">
              <div className="relative">
                  {/* African footballer image matching the reference loosely */}
                  <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-[56px] h-[56px] rounded-full object-cover border-[3px] border-white shadow-sm" />
                  <div className="absolute -bottom-1 -right-2 bg-[#36a655] text-white text-[9px] font-bold px-2 py-0.5 rounded-full border-[1.5px] border-white tracking-wide shadow-sm">
                      PRO
                  </div>
              </div>
              <div className="pt-0.5 max-w-[150px]">
                  <div className="text-gray-900 font-extrabold text-[16px] flex items-center gap-1.5 leading-none mb-1.5">
                      <span>Bonjour, Souraka</span> <span>👋</span>
                  </div>
                  <p className="text-gray-600 text-[11px] font-medium flex items-center mb-2 leading-none">
                      Niveau PRO • Série de 12 jours <span className="text-orange-500 text-xs shadow-none ml-1">🔥</span>
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-green-50 text-[#36a655] px-2 py-1 rounded-full text-[9px] font-bold border border-green-100 shadow-sm">
                      <div className="w-[12px] h-[12px] rounded-full bg-[#36a655] flex items-center justify-center text-white">
                         <Plus className="w-2.5 h-2.5" strokeWidth={4} />
                      </div>
                      <AnimatedAmount show={showBalances} amount="+15 000" currency="FCFA" hiddenText="••••" /> cette semaine
                  </div>
              </div>
          </div>
          
          <div className="bg-white rounded-[14px] p-2.5 w-[105px] shadow-sm shadow-gray-200/50 border border-gray-100/50">
              <div className="flex justify-between items-start mb-2">
                  <div className="text-[9px] text-gray-400 font-medium tracking-tight leading-[1.2]">Niveau actuel<br/><span className="text-gray-900 font-bold text-[14px]">PRO</span></div>
                  <div className="w-[22px] h-[22px] rounded-full bg-[#e8f5ec] flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 fill-[#36a655] text-[#36a655]" />
                  </div>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                 <div className="flex-1 bg-gray-100 rounded-full h-[5px]">
                     <div className="bg-[#36a655] h-[5px] rounded-full" style={{width: '70%'}}></div>
                 </div>
                 <span className="text-[9px] font-bold text-gray-500">70%</span>
              </div>
              <button onClick={() => setActiveTab('profil')} className="text-[10px] text-gray-500 hover:text-gray-800 font-medium flex items-center justify-between w-full pt-1 border-gray-50 transition-colors">
                  Voir mon profil <ChevronRight className="w-3.5 h-3.5" />
              </button>
          </div>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-tr from-[#36a655] to-[#51ca75] rounded-[24px] p-5 text-white shadow-lg shadow-[#45b766]/25 relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
              <div>
                  <div className="text-white/80 text-[11px] font-semibold flex items-center gap-1.5 mb-1 tracking-wider uppercase">
                      <span>SOLDE TOTAL</span> 
                      <button onClick={toggleBalances} className="outline-none">
                        {showBalances ? <Eye className="w-4 h-4 hover:text-white transition-colors" /> : <EyeOff className="w-4 h-4 hover:text-white transition-colors" />}
                      </button>
                  </div>
                  <AnimatedAmount 
                      show={showBalances} 
                      amount="125 000" 
                      currency="FCFA" 
                      className="text-[34px] font-black tracking-tight leading-none mb-1.5 min-h-[34px]" 
                      currencyClassName="text-[20px] font-bold opacity-90" 
                  />
                  <div className="text-[12px] text-white/90 flex items-center font-medium">
                      <ArrowUp className="w-3.5 h-3.5 mr-0.5" /> +12% ce mois
                  </div>
              </div>
              <div className="w-[46px] h-[46px] bg-white rounded-xl flex items-center justify-center shadow-lg shadow-black/5 border-[1.5px] border-white/50">
                 <Wallet className="w-6 h-6 text-[#36a655]" strokeWidth={2.5} />
              </div>
          </div>
          
          <div className="mt-6 mb-3 relative z-10">
             <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-10 overflow-visible">
                <path d="M0,19 L15,16 L30,22 L45,10 L60,19 L75,8 L90,10 L100,2" fill="none" stroke="white" strokeWidth="1.5" />
                <circle cx="15" cy="16" r="1.5" fill="white" />
                <circle cx="30" cy="22" r="1.5" fill="white" />
                <circle cx="45" cy="10" r="1.5" fill="white" />
                <circle cx="60" cy="19" r="1.5" fill="white" />
                <circle cx="75" cy="8" r="1.5" fill="white" />
                <circle cx="90" cy="10" r="1.5" fill="white" />
                <circle cx="100" cy="2" r="3.5" fill="white" stroke="#51ca75" strokeWidth="1.5" className="drop-shadow-md" />
             </svg>
          </div>

          <div className="flex items-center text-[10px] text-white mt-1 font-medium relative z-10">
              Mis à jour aujourd'hui, 09:41 <RefreshCw className="w-3 h-3 ml-2 cursor-pointer" />
          </div>
      </div>

      {/* Quick Actions */}
      <div>
          <h3 className="text-gray-900 font-bold mb-3 text-[14px]">Actions rapides</h3>
          <div className="flex justify-between gap-2">
              <ActionBtn 
                  icon={<div className="w-[42px] h-[42px] bg-[#36a655] rounded-full flex items-center justify-center"><ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} /></div>} 
                  label="Envoyer" 
                  sublabel="de l'argent" 
                  onClick={() => setActiveTab('payer')}
              />
              <ActionBtn 
                  icon={<div className="w-[42px] h-[42px] bg-[#3b82f6] rounded-full flex items-center justify-center"><ArrowDown className="w-5 h-5 text-white" strokeWidth={2.5} /></div>} 
                  label="Retirer" 
                  sublabel="de l'argent" 
              />
              <ActionBtn 
                  icon={<div className="w-[42px] h-[42px] bg-[#8b5cf6] rounded-full flex items-center justify-center"><ArrowLeftRight className="w-5 h-5 text-white" strokeWidth={2.5} /></div>} 
                  label="Transférer" 
                  sublabel="de l'argent" 
                  onClick={() => setActiveTab('payer')}
              />
              <ActionBtn 
                  icon={<div className="w-[42px] h-[42px] bg-[#f59e0b] rounded-full flex items-center justify-center relative"><div className="border-[2px] border-white text-white rounded-[4px] px-[3px] py-[2px] flex items-center justify-center"><span className="text-[8px] font-black leading-none">FCFA</span></div></div>} 
                  label="Payer" 
                  sublabel="factures" 
              />
          </div>
      </div>

      {/* Insights / Grid */}
      <div className="grid grid-cols-2 gap-3">
          {/* Repartition */}
          <div className="bg-white p-4 rounded-[20px] shadow-sm shadow-gray-200/50 flex flex-col justify-between">
              <div>
                  <h4 className="text-gray-900 font-bold text-[13px]">Répartition</h4>
                  <p className="text-gray-400 text-[11px] mb-3 font-medium">Dépenses ce mois</p>
              </div>
              
              <div className="flex flex-col gap-3 items-center">
                  <div className="relative w-24 h-24 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        {/* 10% purple */}
                        <circle className="text-[#8b5cf6]" strokeDasharray="10 100" strokeDashoffset="-90" cx="18" cy="18" r="15" fill="transparent" stroke="currentColor" strokeWidth="5.5"></circle>
                        {/* 20% blue */}
                        <circle className="text-[#3b82f6]" strokeDasharray="20 100" strokeDashoffset="-70" cx="18" cy="18" r="15" fill="transparent" stroke="currentColor" strokeWidth="5.5"></circle>
                        {/* 70% green */}
                        <circle className="text-[#36a655]" strokeDasharray="70 100" strokeDashoffset="0" cx="18" cy="18" r="15" fill="transparent" stroke="currentColor" strokeWidth="5.5"></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
                          <AnimatedAmount show={showBalances} amount="125 000" currency="" className="text-[13px] font-bold text-gray-900 leading-none" hiddenText="••••" />
                          <span className="text-[9px] text-gray-400 font-medium mt-0.5">FCFA</span>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-2">
                      <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#36a655] flex-shrink-0"></span>
                              <div className="text-[10px] text-gray-600 font-medium">Dépenses (70%)</div>
                          </div>
                          <div className="text-[10px] text-[#36a655] font-bold ml-[14px]">
                              <AnimatedAmount show={showBalances} amount="87 500" currency="FCFA" hiddenText="••••" />
                          </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#3b82f6] flex-shrink-0"></span>
                              <div className="text-[10px] text-gray-600 font-medium">Épargne (20%)</div>
                          </div>
                          <div className="text-[10px] text-[#3b82f6] font-bold ml-[14px]">
                              <AnimatedAmount show={showBalances} amount="25 000" currency="FCFA" hiddenText="••••" />
                          </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] flex-shrink-0"></span>
                              <div className="text-[10px] text-gray-600 font-medium">Investissement (10%)</div>
                          </div>
                          <div className="text-[10px] text-[#8b5cf6] font-bold ml-[14px]">
                              <AnimatedAmount show={showBalances} amount="12 500" currency="FCFA" hiddenText="••••" />
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="flex justify-center mt-3 pt-3 border-t border-gray-50">
                  <button className="text-[11px] text-gray-500 font-medium flex items-center">
                      Voir plus <ChevronRight className="w-3.5 h-3.5 mt-[1px]" />
                  </button>
              </div>
          </div>

          {/* Objectif */}
          <div className="bg-white p-4 rounded-[20px] shadow-sm shadow-gray-200/50 flex flex-col justify-between">
              <div>
                  <h4 className="text-gray-900 font-bold text-[13px]">Objectif du mois</h4>
                  <div className="text-gray-400 text-[11px] font-medium mb-4 flex items-center">Épargner <AnimatedAmount show={showBalances} amount="200 000" currency="FCFA" currencyClassName="text-[#36a655] font-bold" hiddenText="••••" className="ml-1" /></div>
              </div>
              
              <div className="flex items-center justify-center mt-2 mb-2">
                  <div className="relative w-[110px] h-[110px]">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                          <circle cx="18" cy="18" r="15" fill="transparent" stroke="#f0f0f0" strokeWidth="2.5"></circle>
                          <circle className="text-[#36a655]" strokeDasharray="70 100" strokeDashoffset="0" cx="18" cy="18" r="15" fill="transparent" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></circle>
                      </svg>
                      {/* Inner glowing circle */}
                      <div className="absolute inset-2 rounded-full shadow-[0_0_15px_rgba(54,166,85,0.15)] pointer-events-none"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[30px] font-bold text-gray-900 leading-none tracking-tight">70%</span>
                          <span className="text-[10px] text-gray-900 font-bold mt-1">Atteint</span>
                      </div>
                  </div>
              </div>
              
              <div className="text-center mt-auto">
                  <div className="text-[10px] font-bold mb-3 mt-4 flex items-center justify-center">
                      <AnimatedAmount show={showBalances} amount="140 000" currency="" className="text-[#36a655]" hiddenText="••••" />
                      <span className="text-gray-400 mx-1">/</span> <AnimatedAmount show={showBalances} amount="200 000" currency="FCFA" className="text-gray-400" hiddenText="••••" />
                  </div>
                  <div className="flex justify-center pt-3 border-t border-gray-50">
                      <button className="text-[11px] text-gray-500 font-medium flex items-center">
                          Voir objectifs <ChevronRight className="w-3.5 h-3.5 mt-[1px]" />
                      </button>
                  </div>
              </div>
          </div>
      </div>

      {/* Recent Activities */}
      <div>
          <h3 className="text-gray-900 font-bold mb-3 text-[14px]">Activités récentes</h3>
          <div className="bg-white p-4 rounded-[20px] shadow-sm shadow-gray-200/50">
              <div className="space-y-4">
                  <ActivityItem 
                    icon={
                        <div className="w-[42px] h-[42px] rounded-full bg-[#36a655] flex flex-col items-center justify-center relative overflow-hidden">
                           <div className="flex gap-[3px] mb-[2px]">
                                <div className="w-[10px] h-[10px] bg-white rounded-full border border-black/10 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#36a655] rounded-full"></div>
                                </div>
                                <div className="w-[10px] h-[10px] bg-white rounded-full border border-black/10 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#36a655] rounded-full"></div>
                                </div>
                           </div>
                           <div className="flex gap-[3px]">
                                <div className="w-[10px] h-[10px] bg-white rounded-full border border-black/10 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#36a655] rounded-full"></div>
                                </div>
                                <div className="w-[10px] h-[10px] bg-white rounded-full border border-black/10 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#36a655] rounded-full"></div>
                                </div>
                           </div>
                        </div>
                    }
                    title="Prime match"
                    date="25 Mai 2024 • 14:30"
                    amount="+50 000 FCFA"
                    status="Reçu"
                    isPositive={true}
                    showBalances={showBalances}
                  />
                  <ActivityItem 
                    icon={
                        <div className="w-[42px] h-[42px] rounded-full bg-[#f97316] flex flex-col items-center justify-center p-2.5">
                            <svg viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                        </div>
                    }
                    title="Sponsor - Équipement"
                    date="25 Mai 2024 • 10:15"
                    amount="+15 000 FCFA"
                    status="Reçu"
                    isPositive={true}
                    showBalances={showBalances}
                  />
                  <ActivityItem 
                    icon={
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3b82f6] flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" fill="white" />
                        </div>
                    }
                    title="Assurance"
                    date="24 Mai 2024 • 09:40"
                    amount="-10 000 FCFA"
                    status="Débit"
                    isPositive={false}
                    showBalances={showBalances}
                  />
              </div>

              <button className="text-[12px] text-gray-500 font-medium flex items-center justify-center w-full mt-4 pt-3.5 border-t border-gray-50">
                  Voir toutes les activités <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>
          </div>
      </div>

      {/* Recommended Training */}
      <div className="pb-4">
          <h3 className="text-gray-900 font-bold mb-3 text-[14px]">Formation recommandée</h3>
          <div className="bg-white p-3 pr-4 rounded-[16px] shadow-sm shadow-gray-200/50">
              <div className="flex gap-4 items-center">
                  <div className="w-[100px] h-[72px] rounded-[10px] overflow-hidden relative flex-shrink-0 group">
                      <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white shadow-sm" />
                      </div>
                  </div>
                  <div className="flex flex-col justify-between h-[68px] py-0.5 flex-1 w-full">
                      <div>
                          <h4 className="text-gray-900 font-bold text-[13px] leading-tight">Gérer son argent comme un pro</h4>
                          <p className="text-gray-500 text-[10px] mt-1 font-medium">5 min • Finance</p>
                      </div>
                      <div className="flex justify-end mt-auto">
                        <button className="bg-[#36a655] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg active:scale-95 transition-transform">
                            Voir le cours
                        </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}

function AnalyseTab() {
  return (
    <main className="px-5 py-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex justify-between items-center bg-white p-1 rounded-[14px] shadow-sm shadow-gray-200/50 border border-gray-100">
         <button className="flex-1 py-2 text-xs font-bold text-gray-500 rounded-[10px]">Avril</button>
         <button className="flex-1 py-2 text-xs font-bold bg-[#36a655] text-white rounded-[10px] shadow-sm">Mai</button>
         <button className="flex-1 py-2 text-xs font-bold text-gray-500 rounded-[10px]">Juin</button>
      </div>
      
      <div className="bg-white rounded-[20px] p-5 shadow-sm shadow-gray-200/50">
          <h3 className="font-bold text-gray-900 mb-6 text-[14px]">Tendances des revenus</h3>
          <div className="h-44 flex items-end justify-between px-2 gap-3">
              {[40, 60, 30, 80, 50, 70, 90].map((h, i) => (
                  <div key={i} className="w-full bg-gray-100 rounded-t-md h-full relative group cursor-pointer">
                      <div className="absolute bottom-0 left-0 right-0 bg-[#36a655] rounded-t-md transition-all duration-500 group-hover:bg-[#4dc46e]" style={{height: `${h}%`}}></div>
                  </div>
              ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 px-2">
             <span>LUN</span><span>MAR</span><span>MER</span><span>JEU</span><span>VEN</span><span>SAM</span><span>DIM</span>
          </div>
      </div>

      <div className="bg-white rounded-[20px] p-5 shadow-sm shadow-gray-200/50">
          <h3 className="font-bold text-gray-900 mb-4 text-[14px]">Catégories d'épargne</h3>
          <div className="space-y-5">
              <div>
                  <div className="flex justify-between items-center mb-2">
                      <div className="text-[13px] font-bold text-gray-700">Immobilier</div>
                      <div className="text-[13px] font-bold text-gray-900">4 500 000 FCFA</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-[#3b82f6] h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
              </div>

              <div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                      <div className="text-[13px] font-bold text-gray-700">Retraite sportive</div>
                      <div className="text-[13px] font-bold text-gray-900">2 100 000 FCFA</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-[#f59e0b] h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}

function FormationTab() {
  return (
    <main className="px-5 py-6 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
       <div className="relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
           <input type="text" placeholder="Rechercher un module..." className="w-full bg-white border-0 shadow-sm shadow-gray-200/50 rounded-[16px] py-3 pl-11 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#36a655]/30 font-medium" />
       </div>

       <div className="space-y-3">
          <CourseCard 
            title="Gérer son argent comme un pro"
            time="5 min" category="Finance de base"
            image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=300"
            progress={100}
          />
          <CourseCard 
            title="Investir après sa carrière"
            time="12 min" category="Investissement"
            image="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=300"
            progress={30}
          />
          <CourseCard 
            title="Préparer sa retraite sportive"
            time="8 min" category="Épargne"
            image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=300"
            progress={0}
          />
          <CourseCard 
            title="Négocier ses contrats sponsors"
            time="15 min" category="Revenus"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300"
            progress={0}
          />
       </div>
    </main>
  )
}

function ProfilTab() {
  const [showSplitModal, setShowSplitModal] = useState(false);
  const [split, setSplit] = useState({ courant: 70, epargne: 20, retraite: 10 });

  return (
    <main className="px-5 py-6 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col items-center bg-white p-6 rounded-[24px] shadow-sm shadow-gray-200/50">
         <div className="relative mb-4">
             <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150" alt="Profile" className="w-24 h-24 rounded-full object-cover border-[3.5px] border-white shadow-md" />
             <div className="absolute bottom-0 right-0 bg-[#36a655] w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
                 <Shield className="w-3.5 h-3.5 text-white" fill="white" />
             </div>
         </div>
         <h2 className="text-xl font-bold text-gray-900 mb-1">Souraka M.</h2>
         <p className="text-gray-500 text-[13px] font-medium mb-4">Attaquant • ASEC Mimosas</p>
         <div className="bg-green-50 text-[#36a655] px-5 py-2 rounded-full text-[12px] font-bold border border-green-100 flex items-center gap-1.5 shadow-sm">
            <Star className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" /> Compte Certifié PRO
         </div>
      </div>
      
      <div className="bg-white rounded-[20px] shadow-sm shadow-gray-200/50 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50">
           <span className="font-bold text-gray-700 text-[13px]">Informations personnelles</span>
           <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
        <div className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50">
           <span className="font-bold text-gray-700 text-[13px]">Sécurité et Code PIN</span>
           <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
        <div onClick={() => setShowSplitModal(true)} className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50">
           <span className="font-bold text-gray-700 text-[13px]">Paramètres de Split Auto</span>
           <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                   {split.courant}/{split.epargne}/{split.retraite}
               </span>
               <ChevronRight className="w-4 h-4 text-gray-400" />
           </div>
        </div>
        <div className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50">
           <span className="font-bold text-gray-700 text-[13px]">Documents KYC</span>
           <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold text-[#36a655] bg-green-50 px-2 py-0.5 rounded border border-green-100">Validé</span>
               <ChevronRight className="w-4 h-4 text-gray-400" />
           </div>
        </div>
        <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-red-50">
           <span className="font-bold text-red-500 text-[13px]">Déconnexion</span>
        </div>
      </div>
      
      {showSplitModal && <SplitAutoModal 
        initialSplit={split} 
        onSave={(newSplit) => {
            setSplit(newSplit);
            setShowSplitModal(false);
        }} 
        onClose={() => setShowSplitModal(false)} 
      />}
    </main>
  )
}

function SplitAutoModal({ initialSplit, onSave, onClose }: { initialSplit: any, onSave: (s: any) => void, onClose: () => void }) {
    const [courant, setCourant] = useState(initialSplit.courant);
    const [epargne, setEpargne] = useState(initialSplit.epargne);
    const [retraite, setRetraite] = useState(initialSplit.retraite);

    const total = courant + epargne + retraite;
    const isBalanced = total === 100;

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 animate-in fade-in duration-200 max-w-[400px] mx-auto">
            <div className="bg-white w-full rounded-t-[32px] p-6 animate-in slide-in-from-bottom-full duration-300 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[18px] font-black text-gray-900 tracking-tight">Split Automatique</h3>
                    <button onClick={onClose} className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-gray-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <p className="text-[13px] text-gray-500 mb-6 font-medium leading-relaxed">
                    Ajuste la répartition de tes primes et revenus entrants. <br/>Le total doit faire exactement 100%.
                </p>

                <div className="space-y-6 mb-8 mt-4">
                    <SplitControl label="Dépenses et Factures" colorClass="bg-[#36a655]" value={courant} onChange={setCourant} />
                    <SplitControl label="Épargne Objectif" colorClass="bg-[#3b82f6]" value={epargne} onChange={setEpargne} />
                    <SplitControl label="Investissement" colorClass="bg-[#8b5cf6]" value={retraite} onChange={setRetraite} />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-[16px] mb-6 border border-gray-100">
                    <span className="text-[13px] font-bold text-gray-700">Total Répartition</span>
                    <span className={`text-[20px] font-black ${isBalanced ? 'text-[#36a655]' : 'text-red-500'}`}>
                        {total}%
                    </span>
                </div>

                <button 
                  onClick={() => isBalanced && onSave({ courant, epargne, retraite })}
                  disabled={!isBalanced}
                  className={`w-full font-bold py-4 rounded-xl shadow-md text-[14px] transition-all
                  ${isBalanced ? 'bg-[#36a655] text-white shadow-[#36a655]/30 active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}`}
                >
                    {isBalanced ? 'Confirmer la répartition' : 'Le total doit être à 100%'}
                </button>
            </div>
        </div>
    )
}

function SplitControl({ label, value, colorClass, onChange }: { label: string, value: number, colorClass: string, onChange: (v: number) => void }) {
    return (
        <div>
            <div className="flex justify-between mb-2.5">
                <span className="text-[13px] font-bold text-gray-800 flex items-center gap-2.5">
                   <div className={`w-3 h-3 rounded-full ${colorClass}`}></div>
                   {label}
                </span>
                <span className="text-[13px] font-black text-gray-900">{value}%</span>
            </div>
            <div className="flex items-center gap-4">
                <button 
                  onClick={() => onChange(Math.max(0, value - 5))} 
                  className="w-[42px] h-[42px] flex-shrink-0 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-500 active:bg-gray-50 disabled:opacity-30 font-medium text-[20px] transition-colors"
                  disabled={value <= 0}
                >
                  -
                </button>
                <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className={`h-full ${colorClass} transition-all duration-300`} style={{ width: `${value}%` }}></div>
                </div>
                <button 
                  onClick={() => onChange(Math.min(100, value + 5))}
                  className="w-[42px] h-[42px] flex-shrink-0 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-500 active:bg-gray-50 disabled:opacity-30 font-medium text-[20px] transition-colors"
                  disabled={value >= 100}
                >
                  +
                </button>
            </div>
        </div>
    )
}

function PayerTab() {
  const [mode, setMode] = useState<'contact' | 'scanner' | 'mon_code'>('contact');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
     setCopied(true);
     setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="px-5 py-6 h-full flex flex-col animate-in fade-in duration-300">
       <div className="flex bg-gray-100/80 p-1.5 rounded-[20px] mb-6 shadow-inner shrink-0">
         <button onClick={() => setMode('contact')} className={`flex-1 py-3 text-[12px] font-bold rounded-[16px] transition-all ${mode==='contact' ? 'bg-white shadow-sm text-gray-900':'text-gray-500 hover:text-gray-700'}`}>Envoi</button>
         <button onClick={() => setMode('scanner')} className={`flex-1 py-3 text-[12px] font-bold rounded-[16px] transition-all ${mode==='scanner' ? 'bg-white shadow-sm text-gray-900':'text-gray-500 hover:text-gray-700'}`}>Scanner</button>
         <button onClick={() => setMode('mon_code')} className={`flex-1 py-3 text-[12px] font-bold rounded-[16px] transition-all ${mode==='mon_code' ? 'bg-white shadow-sm text-gray-900':'text-gray-500 hover:text-gray-700'}`}>Mon Code</button>
       </div>

       {mode === 'contact' && (
         <div className="flex-1 animate-in slide-in-from-right-4 duration-300">
           <div className="relative mb-6">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
               <input type="text" placeholder="ID Goal, Numéro ou @pseudo" className="w-full bg-white border-0 shadow-sm shadow-gray-200/50 rounded-[16px] py-4 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#36a655]/30 font-medium placeholder:text-gray-400" />
           </div>

           <h3 className="font-bold text-gray-900 text-[14px] mb-3">Joueurs récents</h3>
           <div className="space-y-3">
              <RecentContact name="Oumar N'Diaye" role="Défenseur • ASEC Mimosas" id="GFA-492-110" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" />
              <RecentContact name="Sékou Bamba" role="Milieu • FC San Pedro" id="GFA-109-442" img="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=150&auto=format&fit=crop" />
              <RecentContact name="Amadou Diallo" role="Gardien • RCA" id="GFA-881-229" img="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" />
           </div>

           <button className="w-full mt-6 bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[14px] active:scale-95 transition-transform flex items-center justify-center gap-2">
                Nouveau transfert
           </button>
         </div>
       )}

       {mode === 'scanner' && (
         <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            <div className="bg-white p-6 rounded-[32px] shadow-sm shadow-gray-200/50 border border-gray-100 w-full text-center mb-8">
               <div className="w-48 h-48 mx-auto bg-green-50/50 rounded-[32px] border-[2px] border-dashed border-[#36a655]/40 flex items-center justify-center mb-6 relative">
                  <QrCode className="w-16 h-16 text-[#36a655]" />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-[#36a655] rounded-tl-[24px] -translate-x-1 -translate-y-1"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-[#36a655] rounded-tr-[24px] translate-x-1 -translate-y-1"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-[#36a655] rounded-bl-[24px] -translate-x-1 translate-y-1"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-[#36a655] rounded-br-[24px] translate-x-1 translate-y-1"></div>
               </div>
               <h2 className="text-[20px] font-black text-gray-900 mb-2 leading-tight">Scanner un<br/>Code QR</h2>
               <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                  Centre le QR Code d'un coéquipier ou d'un marchand dans le cadre.
               </p>
            </div>
         </div>
       )}

       {mode === 'mon_code' && (
         <div className="flex-1 flex flex-col items-center justify-center animate-in slide-in-from-left-4 duration-300">
            <div className="bg-white p-6 pb-8 rounded-[32px] shadow-sm shadow-gray-200/50 border border-gray-100 w-full mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green-50 to-white"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150" alt="Profile" className="w-16 h-16 rounded-full object-cover border-[3px] border-white shadow-md mb-3" />
                    <h2 className="text-[18px] font-black text-gray-900">Souraka M.</h2>
                    <p className="text-gray-500 text-[12px] font-medium mb-6">Attaquant • ASEC Mimosas</p>

                    <div className="w-48 h-48 bg-white rounded-[24px] shadow-sm shadow-gray-200/50 border border-gray-100 p-3 mb-6">
                        <div className="w-full h-full bg-gray-900 rounded-[12px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0% 0%, 10% 0%, 10% 10%, 0% 10%, 0% 20%, 20% 20%, 20% 0%, 30% 0%, 30% 30%, 0% 30%, 0% 40%, 40% 40%, 40% 0%, 50% 0%, 50% 50%, 0% 50%, 0% 60%, 60% 60%, 60% 0%, 70% 0%, 70% 70%, 0% 70%, 0% 80%, 80% 80%, 80% 0%, 90% 0%, 90% 90%, 0% 90%, 0% 100%, 100% 100%, 100% 0%)' }}></div>
                            <div className="absolute inset-x-0 inset-y-0 opacity-20" style={{ background: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)' }}></div>
                            <div className="absolute inset-x-0 inset-y-0 opacity-20" style={{ background: 'repeating-linear-gradient(-45deg, #000 0, #000 2px, transparent 2px, transparent 4px)' }}></div>
                            <div className="absolute inset-3 border-[4px] border-gray-900 rounded-lg"></div>
                            <div className="absolute inset-3 border-[4px] border-gray-900 rounded-lg bg-white" style={{ clipPath: 'inset(10% 10% 10% 10%)' }}></div>
                            <div className="w-12 h-12 bg-white rounded-xl z-20 flex flex-col items-center justify-center shadow-md">
                                <h1 className="text-gray-900 font-black text-[9px] tracking-tighter leading-none mb-0.5">GOAL</h1>
                                <span className="text-[#36a655] font-black text-[7px] leading-none">FINANCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full bg-gray-50 p-2.5 rounded-[16px] border border-gray-100">
                        <div className="pl-1">
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Mon ID Goal</p>
                            <p className="text-[14px] font-black text-gray-900">GFA-842-199</p>
                        </div>
                        <button onClick={handleCopy} className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-[#36a655] transition-colors border border-gray-100">
                            {copied ? <Check className="w-4 h-4 text-[#36a655]" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
            
            <button className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[14px] active:scale-95 transition-transform flex items-center justify-center gap-2">
                <Share className="w-4 h-4" /> Partager mon code
            </button>
         </div>
       )}
    </main>
  )
}

function RecentContact({ name, role, id, img }: any) {
    return (
        <div className="flex items-center justify-between bg-white p-3 rounded-[20px] shadow-sm shadow-gray-200/50 cursor-pointer active:scale-95 transition-transform hover:shadow-md">
            <div className="flex items-center gap-3.5">
                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100" />
                <div>
                    <h4 className="font-bold text-gray-900 text-[13px]">{name}</h4>
                    <p className="text-[10px] text-gray-500 font-medium mb-0.5">{role}</p>
                    <p className="text-[10px] text-[#36a655] font-bold">{id}</p>
                </div>
            </div>
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-[#36a655]">
                <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    )
}

function CourseCard({ title, time, category, image, progress }: any) {
    return (
        <div className="bg-white p-2.5 rounded-[16px] shadow-sm shadow-gray-200/50 flex gap-4 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-[100px] h-[80px] rounded-xl overflow-hidden relative flex-shrink-0 group">
                <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white opacity-90 shadow-sm" />
                </div>
            </div>
            <div className="flex flex-col justify-center flex-1 w-full py-1 pr-2">
                <p className="text-[#36a655] text-[9px] font-bold uppercase tracking-wider mb-1">{category}</p>
                <h4 className="text-gray-900 font-bold text-[13px] leading-tight mb-auto">{title}</h4>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-400 text-[10px] font-medium flex items-center gap-1.5">
                        <ClockIcon /> {time}
                    </p>
                    {progress > 0 && (
                        <div className="text-[9px] font-bold text-gray-500">{progress}%</div>
                    )}
                </div>
                {progress > 0 && (
                    <div className="w-full bg-gray-100 rounded-full h-1 mt-2">
                       <div className="bg-[#36a655] h-1 rounded-full" style={{width: `${progress}%`}}></div>
                    </div>
                )}
            </div>
        </div>
    )
}

function ActionBtn({ icon, label, sublabel, onClick }: { icon: React.ReactNode, label: string, sublabel: string, onClick?: () => void }) {
    return (
        <button onClick={onClick} className="flex flex-1 flex-col items-center justify-start min-h-[100px] py-3 px-0.5 group bg-white rounded-[20px] shadow-sm shadow-gray-200/50 mb-1">
            <div className="mb-2 group-active:scale-95 transition-transform flex-shrink-0">
                {icon}
            </div>
            <span className="text-[12px] font-bold text-gray-900 leading-tight tracking-tight text-center">{label}</span>
            <span className="text-[9.5px] text-gray-500 leading-tight mt-0.5 tracking-tight font-medium text-center">{sublabel}</span>
        </button>
    )
}

function ActivityItem({ icon, title, date, amount, status, isPositive, showBalances = true }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer lg:hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex items-center gap-3.5">
                <div className="flex-shrink-0 group-active:scale-95 transition-transform">
                    {icon}
                </div>
                <div>
                    <h5 className="text-gray-900 font-bold text-[13px]">{title}</h5>
                    <p className="text-gray-400 text-[10px] mt-0.5 font-medium">{date}</p>
                </div>
            </div>
            <div className="text-right">
                <div className={`font-bold text-[13px] ${isPositive ? 'text-[#36a655]' : 'text-gray-900'} flex justify-end`}>
                    <AnimatedAmount show={showBalances} amount={amount.replace("FCFA", "").trim()} currency="FCFA" hiddenText="••••" />
                </div>
                <div className="text-gray-400 text-[10px] font-medium mt-0.5">{status}</div>
            </div>
        </div>
    )
}

function NavItem({ icon, label, active = false, onClick }: any) {
    return (
        <button onClick={onClick} className={`flex flex-col items-center gap-1.5 w-14 pb-1 ${active ? 'text-[#36a655]' : 'text-gray-400 hover:text-gray-600 transition-colors'}`}>
            <div className={`${active ? 'opacity-100 scale-110' : 'opacity-80 scale-100'} transition-all duration-200`}>
                {icon}
            </div>
            <span className={`text-[10px] font-medium ${active ? 'font-bold' : ''}`}>{label}</span>
        </button>
    )
}

// Custom simple icons to perfectly match the design feel
const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
)

const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-4"></path></svg>
)

const ClockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
)

function AnimatedAmount({ show, amount, currency = "FCFA", className = "", currencyClassName = "", hiddenText = "•••••••" }: any) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <AnimatePresence mode="wait">
        {show ? (
          <motion.span key="visible" initial={{ opacity: 0, filter: "blur(4px)", y: -4 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: 4 }} transition={{ duration: 0.2 }} className="inline-flex items-baseline gap-1 relative whitespace-nowrap">
            {amount} {currency && <span className={currencyClassName}>{currency}</span>}
          </motion.span>
        ) : (
          <motion.span key="hidden" initial={{ opacity: 0, filter: "blur(4px)", y: -4 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: 4 }} transition={{ duration: 0.2 }} className="inline-flex items-baseline gap-1 relative whitespace-nowrap">
            {hiddenText} {currency && <span className={currencyClassName}>{currency}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
