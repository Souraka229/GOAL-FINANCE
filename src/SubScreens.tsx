import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, ChevronRight, Shield, Star, Briefcase, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function RevenusScreen() {
    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                <span className="bg-[#36a655] text-white px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">Tous</span>
                <span className="bg-white border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">Salaire</span>
                <span className="bg-white border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">Prime</span>
                <span className="bg-white border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">Bonus</span>
                <span className="bg-white border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">Sponsor</span>
            </div>

            <div className="space-y-4">
                <IncomeItem title="Prime de match" sub="ASC Jaraaf" date="01 Juin 2024" amount="+150 000 FCFA" />
                <IncomeItem title="Salaire mensuel" sub="ASC Jaraaf" date="01 Juin 2024" amount="+300 000 FCFA" />
                <IncomeItem title="Bonus performance" sub="25 Mai 2024" date="" amount="+50 000 FCFA" />
                <IncomeItem title="Sponsoring Nike" sub="20 Mai 2024" date="" amount="+200 000 FCFA" />
                <IncomeItem title="Prime de victoire" sub="15 Mai 2024" date="" amount="+80 000 FCFA" />
            </div>

            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 mt-6">
                <span className="font-bold text-gray-700 text-[14px]">Total ce mois</span>
                <span className="font-black text-gray-900 text-[18px]">780 000 FCFA</span>
            </div>
        </div>
    )
}

function IncomeItem({ title, sub, date, amount }: any) {
    return (
        <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-50">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#36a655]">
                    {/* SVG Icon */}
                    <div className="w-5 h-5 rounded-md border-2 border-current rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-[13px]">{title}</h4>
                    <p className="text-gray-400 text-[11px] font-medium">{sub}</p>
                </div>
            </div>
            <div className="text-right">
                <div className="font-bold text-[#36a655] text-[13px]">{amount}</div>
                <div className="text-gray-400 text-[10px] font-medium">{date}</div>
            </div>
        </div>
    )
}

export function InvestissementScreen() {
    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#36a655] p-5 rounded-[20px] text-white shadow-lg shadow-[#36a655]/20 flex justify-between items-end">
                <div>
                    <div className="text-[12px] font-medium text-white/80 mb-1">Mes investissements</div>
                    <div className="text-[28px] font-black leading-none">250 000 <span className="text-[14px]">FCFA</span></div>
                </div>
                <div className="text-white/90 text-[12px] font-medium bg-white/20 px-3 py-1.5 rounded-xl">
                    2 actifs
                </div>
            </div>

            <div className="space-y-4">
                <InvestItem 
                    title="Fonds Immobilier" 
                    icon="🏠" iconColor="bg-[#3b82f6]"
                    percent="+8,5%" 
                    risk="Risque faible" 
                    riskColor="text-[#36a655]" 
                />
                <InvestItem 
                    title="Fonds Agricole" 
                    icon="🌾" iconColor="bg-[#f59e0b]"
                    percent="+12,3%" 
                    risk="Risque moyen" 
                    riskColor="text-[#f59e0b]" 
                />
            </div>

            <button className="w-full mt-4 bg-white border border-[#36a655] text-[#36a655] font-bold py-3.5 rounded-xl text-[14px] active:scale-95 transition-transform flex items-center justify-center shadow-sm">
                Explorer d'autres produits
            </button>
            
            <p className="text-center text-[10px] text-gray-400 font-medium mt-4">
               Investir comporte des risques.
            </p>
        </div>
    )
}

function InvestItem({ title, icon, iconColor, percent, risk, riskColor }: any) {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-[16px] shadow-sm border border-gray-100 flex-1 relative overflow-hidden group hover:border-[#36a655]/30 cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${iconColor}/20 flex items-center justify-center text-[24px]`}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-[14px] leading-tight mb-1">{title}</h4>
                    <p className="text-[#36a655] text-[16px] font-black">{percent}</p>
                </div>
            </div>
            <div className="text-right flex flex-col items-end">
                 <div className={`text-[10px] font-bold flex items-center gap-1 ${riskColor}`}>
                     <div className={`w-1.5 h-1.5 rounded-full bg-current`}></div>
                     {risk}
                 </div>
                 <ChevronRight className="w-4 h-4 text-gray-400 mt-2" />
            </div>
        </div>
    )
}

export function EpargneScreen() {
    const data = [
        { name: 'Jan', val: 0 },
        { name: 'Fév', val: 50 },
        { name: 'Mar', val: 120 },
        { name: 'Avr', val: 200 },
        { name: 'Mai', val: 320 },
        { name: 'Juin', val: 450 },
    ];
    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#36a655] p-5 rounded-[20px] text-white shadow-lg shadow-[#36a655]/20">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[12px] font-medium text-white/80">Épargne totale</span>
                    <ChevronRight className="w-4 h-4 text-white/80" />
                </div>
                <div className="text-[28px] font-black leading-none mb-2">450 000 <span className="text-[14px]">FCFA</span></div>
                <div className="text-[11px] font-medium flex items-center"><ArrowUp className="w-3.5 h-3.5 mr-0.5" /> +12% ce mois</div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm shadow-gray-200/50 p-1 divide-y divide-gray-50">
                <EpargneLine title="Épargne bloquée (retraite)" percent="66%" amount="300 000 FCFA" />
                <EpargneLine title="Épargne libre" percent="11%" amount="50 000 FCFA" />
                <EpargneLine title="Épargne projets" percent="23%" amount="100 000 FCFA" />
            </div>

            <div className="bg-white p-5 rounded-[20px] shadow-sm shadow-gray-200/50">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 text-[14px]">Évolution</h3>
                    <select className="bg-gray-50 border border-gray-100 text-[11px] font-bold text-gray-500 rounded-lg px-2 py-1 outline-none">
                        <option>Mensuel</option>
                    </select>
                </div>
                <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                            <YAxis hide domain={['dataMin', 'dataMax + 100']} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Line type="monotone" dataKey="val" stroke="#36a655" strokeWidth={3} dot={{r: 4, fill: '#36a655', strokeWidth: 2, stroke: 'white'}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

function EpargneLine({ title, percent, amount }: any) {
    return (
        <div className="flex justify-between items-center p-3">
            <div>
                <h4 className="font-bold text-gray-800 text-[13px]">{title}</h4>
                <p className="text-gray-400 text-[11px] font-medium">{percent}</p>
            </div>
            <div className="font-bold text-gray-900 text-[13px]">{amount}</div>
        </div>
    )
}

export function RetraiteScreen() {
    const data = [
        { age: 'Aujourd\'hui', val: 0.1 },
        { age: '30 ans', val: 0.5 },
        { age: '35 ans', val: 1.2 },
        { age: '40 ans', val: 2.0 },
        { age: '45 ans', val: 2.8 },
    ];
    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300 pb-10">
            <div className="bg-[#36a655] p-5 rounded-[20px] text-white shadow-lg shadow-[#36a655]/20">
                <div className="text-[12px] font-medium text-white/80 mb-1">Capital retraite</div>
                <div className="text-[32px] font-black leading-none mb-4">2 500 000 <span className="text-[16px]">FCFA</span></div>
                
                <div className="flex gap-4">
                    <div className="bg-white/10 flex-1 p-3 rounded-xl border border-white/20">
                        <div className="text-[10px] text-white/70 font-medium mb-1">Âge actuel</div>
                        <div className="font-bold text-[14px]">24 ans</div>
                    </div>
                    <div className="bg-white/10 flex-1 p-3 rounded-xl border border-white/20">
                        <div className="text-[10px] text-white/70 font-medium mb-1">Retraite estimée</div>
                        <div className="font-bold text-[14px]">35 ans</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm shadow-gray-200/50 p-5">
                <div className="text-[11px] font-medium text-gray-500 mb-1">Revenu mensuel estimé</div>
                <div className="text-[20px] font-black text-[#36a655] leading-none mb-1">120 000 <span className="text-[12px]">FCFA</span></div>
                <div className="text-[10px] text-gray-400 font-medium">(à partir de 35 ans)</div>
            </div>

            <div className="bg-white p-5 rounded-[20px] shadow-sm shadow-gray-200/50">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 text-[14px]">Projection</h3>
                    <div className="text-[11px] font-medium text-gray-500">Voir détails</div>
                </div>
                <div className="h-44 w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="age" fontSize={9} axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} dy={10} />
                            <YAxis hide domain={['dataMin', 'dataMax + 0.5']} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} formatter={(val: number) => [`${val}M`, 'Capital']} />
                            <Line type="monotone" dataKey="val" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: 'white'}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                    {/* Fake Y axis labels to match design exactly */}
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] text-gray-400 font-bold pointer-events-none">
                        <span>3.0M</span>
                        <span>2.0M</span>
                        <span>1.0M</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const defaultTransactions = [
    { id: '1', type: 'sponsor', amount: '+150 000 FCFA', label: 'Sponsor Adidas', date: '14:30', group: 'today' },
    { id: '2', type: 'transfert', amount: '-25 000 FCFA', label: 'Transfert vers Maman', date: '10:15', group: 'today' },
    { id: '3', type: 'assurance', amount: '-10 000 FCFA', label: 'Assurance Santé', date: '09:40', group: 'yesterday' },
    { id: '4', type: 'salaire', amount: '+300 000 FCFA', label: 'Salaire ASEC Mimosas', date: '08:00', group: 'yesterday' },
];

export function TransactionsScreen() {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    
    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        const cached = localStorage.getItem('transactions_history');
        if (cached) {
            try {
                setTransactions(JSON.parse(cached));
            } catch (e) {
                setTransactions(defaultTransactions);
            }
        } else {
            setTransactions(defaultTransactions);
            localStorage.setItem('transactions_history', JSON.stringify(defaultTransactions));
        }
        
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const todayTx = transactions.filter(t => t.group === 'today');
    const yesterdayTx = transactions.filter(t => t.group === 'yesterday');

    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300">
            {isOffline && (
                <div className="bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Mode hors-ligne (données locales)
                </div>
            )}
            <div className="flex justify-between items-center bg-white p-1 rounded-[14px] shadow-sm shadow-gray-200/50 border border-gray-100 mt-0">
               <button className="flex-1 py-2 text-xs font-bold bg-[#36a655] text-white rounded-[10px] shadow-sm">Toutes</button>
               <button className="flex-1 py-2 text-xs font-bold text-gray-500 rounded-[10px]">Entrées</button>
               <button className="flex-1 py-2 text-xs font-bold text-gray-500 rounded-[10px]">Sorties</button>
            </div>
            
            <div className="space-y-4">
                {todayTx.length > 0 && (
                    <>
                        <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">Aujourd'hui</div>
                        {todayTx.map(tx => (
                            <TransactionItem key={tx.id} type={tx.type} amount={tx.amount} label={tx.label} date={tx.date} />
                        ))}
                    </>
                )}
                
                {yesterdayTx.length > 0 && (
                    <>
                        <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2">Hier</div>
                        {yesterdayTx.map(tx => (
                            <TransactionItem key={tx.id} type={tx.type} amount={tx.amount} label={tx.label} date={tx.date} />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

function TransactionItem({ type, amount, label, date }: { type: string, amount: string, label: string, date: string }) {
    const isPositive = amount.startsWith('+');
    let color = '';
    let icon = null;
    
    if (type === 'sponsor') {
        color = 'bg-[#f97316]';
        icon = <Star className="w-4 h-4 text-white" strokeWidth={3} />;
    } else if (type === 'transfert') {
        color = 'bg-[#3b82f6]';
        icon = <ArrowUp className="w-4 h-4 text-white" strokeWidth={3} />;
    } else if (type === 'assurance') {
        color = 'bg-[#8b5cf6]';
        icon = <Shield className="w-4 h-4 text-white" strokeWidth={3} />;
    } else {
        color = 'bg-[#36a655]';
        icon = <Briefcase className="w-4 h-4 text-white" strokeWidth={3} />;
    }
    
    return (
        <div className="flex items-center justify-between bg-white p-3 rounded-[16px] shadow-sm border border-gray-100 flex-1">
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white shadow-sm`}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-[13px]">{label}</h4>
                    <p className="text-gray-400 text-[11px] font-medium">{date}</p>
                </div>
            </div>
            <div className={`font-black text-[13px] ${isPositive ? 'text-[#36a655]' : 'text-gray-900'}`}>
                {amount}
            </div>
        </div>
    );
}

export function ObjectifsScreen() {
    return (
        <div className="px-5 py-4 space-y-6 animate-in fade-in duration-300">
            <div className="bg-white p-5 rounded-[20px] shadow-sm shadow-gray-200/50 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                        <span className="text-[24px]">🏠</span>
                    </div>
                </div>
                <h3 className="text-[18px] font-black leading-tight mb-1">Maison à Abidjan</h3>
                <p className="text-[12px] text-gray-500 font-medium mb-4">Objectif à long terme</p>
                
                <div className="flex justify-between items-end mb-2">
                    <span className="text-[16px] font-black text-[#36a655]">15.5M <span className="text-[12px] font-bold text-gray-400">/ 50M FCFA</span></span>
                    <span className="text-[12px] font-bold text-gray-500">31%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#36a655] rounded-full" style={{ width: '31%' }}></div>
                </div>
            </div>
            
            <div className="bg-white p-5 rounded-[20px] shadow-sm shadow-gray-200/50 border border-gray-100 mb-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                        <span className="text-[24px]">🚗</span>
                    </div>
                </div>
                <h3 className="text-[18px] font-black leading-tight mb-1">Achat Voiture</h3>
                <p className="text-[12px] text-gray-500 font-medium mb-4">Moyen terme</p>
                
                <div className="flex justify-between items-end mb-2">
                    <span className="text-[16px] font-black text-[#f59e0b]">3.2M <span className="text-[12px] font-bold text-gray-400">/ 8.5M FCFA</span></span>
                    <span className="text-[12px] font-bold text-gray-500">37%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '37%' }}></div>
                </div>
            </div>
            
            <button className="w-full border-[2px] border-dashed border-gray-300 text-gray-500 font-bold py-4 rounded-[16px] text-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <Plus className="w-5 h-5" /> Nouvel Objectif
            </button>
        </div>
    )
}
