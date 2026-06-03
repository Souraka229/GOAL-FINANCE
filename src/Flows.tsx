import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Eye, EyeOff, Search } from 'lucide-react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col items-center justify-center p-6">
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="flex flex-col items-center justify-center"
       >
         <div className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 border-gray-900 mb-6 group cursor-pointer shadow-xl shadow-green-900/5">
             <div className="flex gap-1.5 items-end mb-1">
                <div className="w-1.5 h-6 bg-[#36a655] rounded-[2px]"></div>
                <div className="w-1.5 h-10 bg-[#36a655] rounded-[2px]"></div>
                <div className="w-1.5 h-14 bg-[#36a655] rounded-[2px]"></div>
             </div>
             <div className="absolute top-3 right-3 w-6 h-6 bg-white flex items-center justify-center rounded-full">
                 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#36a655]" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
             </div>
         </div>
         <h1 className="text-gray-900 font-black text-[28px] tracking-tighter leading-none mb-2">
             GOAL <span className="text-[#36a655]">FINANCE</span>
         </h1>
         <span className="text-[10px] font-black tracking-[0.3em] text-gray-900 leading-none mb-8">AFRICA</span>
         
         <div className="text-center mt-4 space-y-1">
             <p className="text-gray-600 font-medium text-[16px]">Gère ton présent.</p>
             <p className="text-[#36a655] font-bold text-[16px]">Sécurise ton avenir.</p>
         </div>
       </motion.div>
       
       <div className="absolute bottom-10 left-0 right-0 flex justify-center">
           <div className="relative w-[300px]">
               <img src="https://images.unsplash.com/photo-1518605368461-1ee7e547f89d?q=80&w=300&auto=format&fit=crop" className="w-full h-auto opacity-10 blur-sm rounded-[32px] mask-image-b" alt="bg" />
               <img src="https://images.unsplash.com/photo-1553152531-ee0d11082ce7?q=80&w=300&auto=format&fit=crop" className="absolute bottom-0 w-full rounded-b-[32px] object-cover h-[200px]" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)'}} alt="Player" />
           </div>
       </div>
    </div>
  )
}

export function Onboarding1({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col pt-12 pb-8 px-6">
        <div className="flex justify-between items-center mb-8">
            <span className="text-gray-300 font-bold text-[13px]">1/3</span>
            <button onClick={onNext} className="text-gray-400 font-bold text-[13px]">Passer</button>
        </div>
        <div className="mb-10">
            <h2 className="text-[28px] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
                Reçois <span className="text-[#36a655]">tes revenus<br/>sportifs</span>
            </h2>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                Salaires, primes, bonus et sponsors directement sur ton compte.
            </p>
        </div>
        
        <div className="relative flex-1 flex justify-center items-center">
            {/* Visual Phone mockup simulation */}
            <div className="w-[180px] h-[360px] bg-white rounded-[32px] border-[6px] border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col p-3 pb-0 relative overflow-hidden transform rotate-[-8deg]">
                 <div className="flex-1 bg-green-50 rounded-t-[20px] pt-8 px-3 relative">
                     <div className="bg-white p-2 rounded-xl shadow-sm mb-3 mt-4">
                         <div className="h-2 w-12 bg-gray-200 rounded-full mb-1"></div>
                         <div className="h-4 w-24 bg-[#36a655] rounded-full"></div>
                     </div>
                     <div className="bg-white p-2 rounded-xl shadow-sm">
                         <div className="h-2 w-12 bg-gray-200 rounded-full mb-1"></div>
                         <div className="h-4 w-24 bg-gray-900 rounded-full"></div>
                     </div>
                 </div>
                 
                 <div className="absolute top-12 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border border-gray-50 transform rotate-[15deg]">
                     <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&auto=format&fit=crop&q=80" className="w-full h-full rounded-full object-cover" />
                 </div>
                 <div className="absolute bottom-20 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center p-1.5 border border-gray-50">
                     <div className="w-full h-full bg-[#36a655] rounded-full"></div>
                 </div>
            </div>
        </div>

        <button onClick={onNext} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[15px] active:scale-95 transition-transform mt-8">
            Suivant
        </button>
    </div>
  )
}

export function Onboarding2({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col pt-12 pb-8 px-6">
        <div className="flex justify-between items-center mb-8">
            <span className="text-gray-300 font-bold text-[13px]">2/3</span>
            <button onClick={onNext} className="text-gray-400 font-bold text-[13px]">Passer</button>
        </div>
        <div className="mb-10">
            <h2 className="text-[28px] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
                Épargne<br/><span className="text-[#36a655]">automatiquement</span>
            </h2>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                Une partie de chaque revenu est automatiquement mise de côté pour ton avenir.
            </p>
        </div>
        
        <div className="relative flex-1 flex flex-col justify-center items-center py-4">
            <div className="w-full bg-white rounded-[24px] shadow-xl shadow-gray-200/50 border border-gray-100 p-6 relative">
                 <div className="text-center mb-6">
                     <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Prime Reçue</div>
                     <div className="text-[24px] font-black text-gray-900">100 000 <span className="text-[14px]">FCFA</span></div>
                 </div>
                 
                 <div className="space-y-3">
                     <div className="flex items-center gap-3">
                         <div className="bg-[#36a655] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg w-16 text-center">70%</div>
                         <div className="text-[14px] font-bold text-gray-700 flex-1">Disponible</div>
                     </div>
                     <div className="flex items-center gap-3">
                         <div className="bg-[#3b82f6] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg w-16 text-center">20%</div>
                         <div className="text-[14px] font-bold text-gray-700 flex-1">Épargne retraite</div>
                     </div>
                     <div className="flex items-center gap-3">
                         <div className="bg-[#f59e0b] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg w-16 text-center">10%</div>
                         <div className="text-[14px] font-bold text-gray-700 flex-1">Investissement</div>
                     </div>
                 </div>
            </div>
        </div>

        <button onClick={onNext} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[15px] active:scale-95 transition-transform mt-8">
            Suivant
        </button>
    </div>
  )
}

export function Onboarding3({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col pt-12 pb-8 px-6">
        <div className="flex justify-between items-center mb-8">
            <span className="text-gray-300 font-bold text-[13px]">3/3</span>
        </div>
        <div className="mb-10">
            <h2 className="text-[28px] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
                Prépare ta retraite<br/>et vis <span className="text-[#36a655]">tes rêves</span>
            </h2>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                Investis intelligemment, développe tes compétences et construis ton avenir.
            </p>
        </div>
        
        <div className="relative flex-1 flex flex-col justify-center items-center py-4">
            <div className="relative w-full h-[300px] max-w-[280px]">
                <img src="https://images.unsplash.com/photo-1508344928928-7137b29de216?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover rounded-[32px] mask-image-b" alt="Player" />
                
                <div className="absolute top-10 -left-6 bg-white p-3 rounded-2xl shadow-xl shadow-gray-200 flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">🏠</div>
                </div>
                <div className="absolute top-32 -right-8 bg-white p-3 rounded-2xl shadow-xl shadow-gray-200 flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">🎓</div>
                </div>
                <div className="absolute bottom-16 -left-4 bg-white p-3 rounded-2xl shadow-xl shadow-gray-200 flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600">🚗</div>
                </div>
            </div>
        </div>

        <button onClick={onNext} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[15px] active:scale-95 transition-transform mt-8">
            Commencer
        </button>
    </div>
  )
}

export function Connexion({ onNext, onRegister }: { onNext: (type: 'sportif' | 'club') => void, onRegister: () => void }) {
  const [showPwd, setShowPwd] = useState(false);
  const [type, setType] = useState<'sportif' | 'club'>('sportif');
  
  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col py-10 px-6">
        <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[32px] font-black text-gray-900 leading-[1.1] tracking-tight mb-2">
                Bon retour !
            </h2>
            <p className="text-gray-500 font-medium text-[15px] mb-6">
                Connecte-toi à ton compte
            </p>

            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                <button onClick={() => setType('sportif')} className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg flex items-center justify-center gap-2 ${type === 'sportif' ? 'bg-[#36a655] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                    ⚽ Sportif
                </button>
                <button onClick={() => setType('club')} className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg flex items-center justify-center gap-2 ${type === 'club' ? 'bg-[#36a655] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                    🏠 Club
                </button>
            </div>

            <div className="space-y-4 mb-2">
                <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Email ou téléphone</label>
                    <input type="text" placeholder="exemple@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none transition-all placeholder:text-gray-400" />
                </div>
                <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Mot de passe</label>
                    <div className="relative">
                        <input type={showPwd ? "text" : "password"} placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none transition-all placeholder:text-gray-400" />
                        <button onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 p-1">
                            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mb-8">
                <button className="text-[12px] font-bold text-[#36a655]">Mot de passe oublié ?</button>
            </div>

            <button onClick={() => onNext(type)} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[15px] active:scale-95 transition-transform mb-6">
                Se connecter
            </button>

            <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-gray-200 w-full absolute"></div>
                <span className="bg-white px-4 text-[12px] font-medium text-gray-400 relative z-10">ou continuer avec</span>
            </div>

            <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl text-[14px] active:scale-95 transition-transform flex items-center justify-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
            </button>
        </div>

        <div className="text-center mt-4 pb-2">
            <span className="text-[13px] font-medium text-gray-500">Pas de compte ? </span>
            <button onClick={onRegister} className="text-[13px] font-bold text-[#36a655]">S'inscrire</button>
        </div>
    </div>
  )
}

export function Inscription({ onNext, onLogin }: { onNext: (type: 'sportif' | 'club') => void, onLogin: () => void }) {
  const [type, setType] = useState<'sportif' | 'club'>('sportif');

  return (
    <div className="max-w-[400px] w-full mx-auto bg-white h-full relative font-sans flex flex-col py-8 px-6 overflow-y-auto">
        <h2 className="text-[28px] font-black text-gray-900 leading-[1.1] tracking-tight mb-2 mt-4">
            Créer un compte
        </h2>
        <p className="text-gray-500 font-medium text-[13px] mb-6">
            Choisis ton profil
        </p>

        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
            <button onClick={() => setType('sportif')} className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg flex items-center justify-center gap-2 ${type === 'sportif' ? 'bg-[#36a655] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                ⚽ Sportif
            </button>
            <button onClick={() => setType('club')} className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg flex items-center justify-center gap-2 ${type === 'club' ? 'bg-[#36a655] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                🏠 Club
            </button>
        </div>

        <div className="space-y-4 mb-8">
            {type === 'sportif' ? (
                <>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Nom complet</label>
                        <input type="text" placeholder="Amadou Diop" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Date de naissance</label>
                        <input type="text" placeholder="12 / 04 / 2000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Club actuel</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none appearance-none">
                                <option>ASC Jaraaf</option>
                                <option>ASEC Mimosas</option>
                                <option>Génération Foot</option>
                            </select>
                            <ChevronRight className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Discipline</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none appearance-none">
                                <option>Football</option>
                                <option>Basketball</option>
                                <option>Athlétisme</option>
                            </select>
                            <ChevronRight className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Nom du club</label>
                        <input type="text" placeholder="Tout Puissant Mazembe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Pays / Ville</label>
                        <input type="text" placeholder="RDC, Lubumbashi" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
                    </div>
                </>
            )}
            <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Téléphone ou Email</label>
                <input type="text" placeholder="+221 77 123 45 67" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
            </div>
            <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Mot de passe</label>
                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium focus:ring-2 focus:ring-[#36a655]/30 focus:border-[#36a655] outline-none" />
            </div>
        </div>

        <button onClick={() => onNext(type)} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 text-[15px] active:scale-95 transition-transform mb-4">
            Créer mon compte
        </button>

        <div className="text-center">
            <span className="text-[12px] font-medium text-gray-500">Déjà un compte ? </span>
            <button onClick={onLogin} className="text-[12px] font-bold text-[#36a655]">Se connecter</button>
        </div>
    </div>
  )
}
