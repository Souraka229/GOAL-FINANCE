import React, { useState } from 'react';
import { X, ArrowRight, Check, Search } from 'lucide-react';

export function ActionModal({ title, onClose, children }: any) {
    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 animate-in fade-in duration-200 sm:items-center">
            <div className="bg-white w-full sm:w-[380px] sm:rounded-3xl rounded-t-[32px] p-6 animate-in slide-in-from-bottom-full duration-300 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[18px] font-black text-gray-900 tracking-tight">{title}</h3>
                    <button onClick={onClose} className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-gray-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export function EnvoyerModal({ onClose }: any) {
    const [step, setStep] = useState(1);
    
    if (step === 1) {
        return (
            <ActionModal title="Envoyer de l'argent" onClose={onClose}>
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Nom ou numéro de téléphone" className="w-full bg-gray-50 border-0 rounded-[16px] py-3 pl-11 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#36a655]/30 font-medium" />
                </div>
                <div className="space-y-3 mb-6">
                    <h4 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider ml-1">Récents</h4>
                    <div className="flex items-center justify-between p-3 rounded-[16px] hover:bg-gray-50 cursor-pointer border border-transparent" onClick={() => setStep(2)}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">M</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-[13px]">Maman</h4>
                                <p className="text-gray-400 text-[11px] font-medium">+225 01 23 45 67 89</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-[16px] hover:bg-gray-50 cursor-pointer border border-transparent" onClick={() => setStep(2)}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">K</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-[13px]">Kouassi</h4>
                                <p className="text-gray-400 text-[11px] font-medium">+225 05 55 66 77 88</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ActionModal>
        );
    }
    
    if (step === 2) {
        return (
            <ActionModal title="Montant" onClose={onClose}>
                <div className="flex flex-col items-center mb-8">
                    <div className="text-[12px] font-medium text-gray-500 mb-2">Envoyer à Maman</div>
                    <input type="number" autoFocus placeholder="0" className="text-center text-[40px] font-black text-gray-900 focus:outline-none w-full bg-transparent placeholder-gray-300" />
                    <div className="text-[14px] font-bold text-gray-400">FCFA</div>
                </div>
                <button onClick={() => setStep(3)} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 active:scale-95 transition-all">
                    Continuer
                </button>
            </ActionModal>
        );
    }

    return (
        <ActionModal title="Code PIN" onClose={onClose}>
            <div className="flex flex-col items-center mb-8">
                <div className="text-[12px] font-medium text-gray-500 mb-6">Saisissez votre code PIN pour valider</div>
                <div className="flex gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
                    ))}
                </div>
            </div>
            <button onClick={onClose} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 active:scale-95 transition-all">
                Valider (Simulation)
            </button>
        </ActionModal>
    );
}

export function RetirerModal({ onClose }: any) {
    return (
        <ActionModal title="Retirer de l'argent" onClose={onClose}>
            <div className="space-y-3 mb-6">
                <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#36a655] transition-colors">
                    <div className="font-bold text-gray-900 text-[14px]">Point de retrait agréé</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#36a655] transition-colors">
                    <div className="font-bold text-gray-900 text-[14px]">Mobile Money</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#36a655] transition-colors">
                    <div className="font-bold text-gray-900 text-[14px]">Guichet automatique</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
            </div>
        </ActionModal>
    );
}

export function TransfererModal({ onClose }: any) {
    return (
        <ActionModal title="Virement bancaire" onClose={onClose}>
            <div className="space-y-4 mb-6">
                <div>
                     <label className="text-[11px] font-bold text-gray-500 mb-1.5 block ml-1">Banque de destination</label>
                     <select className="w-full bg-gray-50 border-0 rounded-xl py-3 px-4 text-[13px] font-bold text-gray-900 focus:ring-2 focus:ring-[#36a655]/30 outline-none">
                         <option>ECOBANK</option>
                         <option>Bank of Africa (BOA)</option>
                         <option>United Bank for Africa (UBA)</option>
                         <option>Société Générale</option>
                     </select>
                </div>
                <div>
                     <label className="text-[11px] font-bold text-gray-500 mb-1.5 block ml-1">IBAN ou numéro de compte</label>
                     <input type="text" placeholder="CI..." className="w-full bg-gray-50 border-0 rounded-xl py-3 px-4 text-[13px] font-bold text-gray-900 focus:ring-2 focus:ring-[#36a655]/30 outline-none" />
                </div>
                <div>
                     <label className="text-[11px] font-bold text-gray-500 mb-1.5 block ml-1">Bénéficiaire</label>
                     <input type="text" placeholder="Nom complet" className="w-full bg-gray-50 border-0 rounded-xl py-3 px-4 text-[13px] font-bold text-gray-900 focus:ring-2 focus:ring-[#36a655]/30 outline-none" />
                </div>
            </div>
            <button onClick={onClose} className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 active:scale-95 transition-all">
                Suivant
            </button>
        </ActionModal>
    );
}

export function PayerFactureModal({ onClose }: any) {
    return (
        <ActionModal title="Payer des factures" onClose={onClose}>
            <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                    { icon: '💡', label: 'Électricité' },
                    { icon: '🚰', label: 'Eau' },
                    { icon: '🌐', label: 'Internet' },
                    { icon: '📱', label: 'Téléphone' },
                    { icon: '📺', label: 'TV' },
                    { icon: '🏫', label: 'École' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-[24px] mb-2">{item.icon}</span>
                        <span className="text-[10px] font-bold text-gray-600 text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </ActionModal>
    );
}

export function SupportModal({ onClose }: any) {
    return (
        <ActionModal title="Support Client" onClose={onClose}>
            <div className="space-y-4 mb-6 text-center">
                 <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto text-[24px] mb-4">
                     💬
                 </div>
                 <h4 className="font-bold text-gray-900 text-[14px]">Besoin d'aide ?</h4>
                 <p className="text-[12px] text-gray-500">Notre équipe est disponible 24/7 pour vous assister avec vos transactions.</p>
                 
                 <div className="pt-4 grid grid-cols-2 gap-3">
                     <button className="bg-green-50 text-[#36a655] font-bold text-[12px] py-3 rounded-xl hover:bg-green-100 transition-colors">
                         WhatsApp
                     </button>
                     <button className="bg-gray-50 text-gray-600 font-bold text-[12px] py-3 rounded-xl hover:bg-gray-100 transition-colors">
                         Appeler
                     </button>
                 </div>
            </div>
        </ActionModal>
    );
}

export function CourseViewerModal({ onClose }: any) {
    return (
        <ActionModal title="Formation Financière" onClose={onClose}>
            <div className="space-y-4 mb-6">
                 <div className="relative w-full h-[180px] bg-gray-900 rounded-2xl overflow-hidden mb-4">
                     <img src="https://images.unsplash.com/photo-1543326168-5e82b78990be?q=80&w=600" className="opacity-80 w-full h-full object-cover" alt="Video cover" />
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform">
                             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                         </div>
                     </div>
                 </div>
                 
                 <h4 className="font-black text-gray-900 text-[18px]">Gérer son argent comme un pro</h4>
                 <div className="flex items-center gap-2 mb-4">
                     <span className="text-[10px] font-bold bg-[#36a655]/10 text-[#36a655] px-2 py-0.5 rounded uppercase tracking-wider">Module 1</span>
                     <span className="text-[12px] text-gray-500 font-medium">5 min</span>
                 </div>
                 
                 <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                     Dans ce chapitre, nous allons apprendre les bases de la gestion budgétaire. Comment répartir ses revenus, identifier ses dépenses fixes et variables...
                 </p>
            </div>
            <button className="w-full bg-[#36a655] text-white font-bold py-4 rounded-xl shadow-md shadow-[#36a655]/30 active:scale-95 transition-all">
                Marquer comme terminé
            </button>
        </ActionModal>
    );
}
