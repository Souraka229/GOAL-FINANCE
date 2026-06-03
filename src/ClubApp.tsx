import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Wallet,
  Building2,
  ChevronRight,
  TrendingUp,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  CheckCircle2,
  LogOut,
  LayoutDashboard,
  CreditCard,
  Award,
  Handshake,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
  Download,
  Printer,
  Filter,
  Shield,
  MoreVertical,
  Lock,
  Mail,
  Smartphone,
  DownloadCloud
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { name: 'Jan', depenses: 4000 },
  { name: 'Fév', depenses: 3000 },
  { name: 'Mar', depenses: 8500 },
  { name: 'Avr', depenses: 3908 },
  { name: 'Mai', depenses: 9850 },
  { name: 'Juin', depenses: 3800 },
];

const pieData = [
  { name: 'Salaires', value: 5362500, color: '#22c55e' },
  { name: 'Primes', value: 1650000, color: '#a855f7' },
  { name: 'Transferts', value: 825000, color: '#f59e0b' },
  { name: 'Autres', value: 412500, color: '#3b82f6' },
];

export function ClubMainApp({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('tableau_de_bord');
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const players = [
    { id: 1, name: 'Amadou Diop', role: 'Milieu de terrain', salary: '500 000 FCFA', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80' },
    { id: 2, name: 'Moussa Koné', role: 'Attaquant', salary: '450 000 FCFA', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1543326168-5e82b78990be?auto=format&fit=crop&w=150&q=80' },
    { id: 3, name: 'Ibrahima S. Fall', role: 'Défenseur', salary: '400 000 FCFA', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80' },
    { id: 4, name: 'Pape Ndiaye', role: 'Gardien', salary: '350 000 FCFA', status: 'Actif', avatar: 'https://images.unsplash.com/photo-1508344928928-7137b29de216?auto=format&fit=crop&w=150&q=80' },
  ];

  const recentTransactions = [
    { id: 1, label: 'Prime de match vs US Ouakam', date: '05 Juin 2024 - 14:30', amount: '-1 300 000 FCFA', type: 'out', status: 'En attente' },
    { id: 2, label: 'Salaire mensuel - Mai 2024', date: '01 Juin 2024 - 09:15', amount: '-6 500 000 FCFA', type: 'out', status: 'Effectué' },
    { id: 3, label: 'Transfert à Amadou Diop', date: '31 Mai 2024 - 16:40', amount: '-150 000 FCFA', type: 'out', status: 'Effectué' },
    { id: 4, label: 'Sponsor - Orange Mali', date: '30 Mai 2024 - 11:30', amount: '+3 000 000 FCFA', type: 'in', status: 'Reçu' },
  ];

  const menuItems = [
    { id: 'tableau_de_bord', icon: LayoutDashboard, label: 'Tableau de bord' },
    { id: 'joueurs', icon: Users, label: 'Joueurs' },
    { id: 'paiements', icon: CreditCard, label: 'Paiements' },
    { id: 'primes', icon: Award, label: 'Primes' },
    { id: 'sponsors', icon: Handshake, label: 'Sponsors' },
    { id: 'rapports', icon: FileText, label: 'Rapports' },
    { id: 'parametres', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <div className="w-full h-screen bg-[#f8fafc] font-sans flex overflow-hidden text-gray-900">
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black/50 z-40 lg:hidden"
               onClick={() => setIsMobileMenuOpen(false)}
            />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 w-[260px] bg-white border-r border-gray-100 flex flex-col z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
         <div className="p-6 flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#22c55e] flex items-center justify-center text-white font-bold shadow-sm">
                 <Building2 className="w-6 h-6" />
             </div>
             <div>
                <h1 className="font-black text-gray-900 text-[16px] tracking-tight leading-tight">GOAL FINANCE</h1>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Africa</p>
             </div>
             <button onClick={() => setIsMobileMenuOpen(false)} className="ml-auto lg:hidden p-2 text-gray-500">
                 <X className="w-5 h-5" />
             </button>
         </div>

         <div className="px-6 pb-6">
             <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                 <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                     <img src="https://images.unsplash.com/photo-1599474751493-27eb672c21dc?q=80&w=150" className="w-full h-full object-cover" alt="ASC" />
                 </div>
                 <div className="overflow-hidden">
                     <h2 className="font-bold text-[13px] truncate">ASC Jarraf</h2>
                     <p className="text-[11px] text-gray-500 font-medium">Club</p>
                 </div>
                 <ChevronRight className="w-4 h-4 text-gray-400 ml-auto shrink-0" />
             </div>
         </div>

         <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
             {menuItems.map(item => (
                 <button 
                     key={item.id}
                     onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all ${
                         activeTab === item.id 
                         ? 'bg-green-50 text-[#22c55e] shadow-sm' 
                         : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                     }`}
                 >
                     <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                     {item.label}
                 </button>
             ))}
         </nav>

         <div className="p-4 border-t border-gray-100">
             <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                 <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=80" className="w-9 h-9 rounded-full object-cover" alt="Admin" />
                 <div>
                     <div className="font-bold text-[13px]">Amadou Diallo</div>
                     <div className="text-[11px] text-gray-500 font-medium">Administrateur</div>
                 </div>
                 <button onClick={onLogout} className="ml-auto text-gray-400 hover:text-red-500 transition-colors">
                     <LogOut className="w-4 h-4" />
                 </button>
             </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
         {/* Top Header */}
         <header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
             <div className="flex items-center gap-4">
                 <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-gray-500 rounded-lg hover:bg-gray-100">
                     <Menu className="w-6 h-6" />
                 </button>
                 <div className="hidden sm:block">
                    <h2 className="text-[18px] font-bold text-gray-900">Tableau de bord</h2>
                    <p className="text-[13px] text-gray-500 mt-0.5">Bienvenue, <span className="font-bold text-gray-900">Amadou 👋</span></p>
                 </div>
             </div>
             
             <div className="flex items-center gap-4">
                 <div className="relative hidden md:block">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="text" placeholder="Rechercher..." className="w-64 bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e]" />
                 </div>
                 <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full">
                     <Bell className="w-5 h-5" />
                     <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                 </button>
                 <div className="h-6 w-[1px] bg-gray-200 hidden sm:block"></div>
                 <div className="flex gap-2">
                     <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-[13px] font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                         Export CSV
                     </button>
                     <button className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-white text-[13px] font-bold rounded-lg hover:bg-[#16a34a] transition-colors shadow-sm">
                         <Plus className="w-4 h-4" />
                         <span className="hidden sm:inline">Effectuer un paiement</span>
                     </button>
                 </div>
             </div>
         </header>

         {/* Scrollable Content */}
         <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
                {activeTab === 'tableau_de_bord' && (
                    <motion.div
                       key="tableau_de_bord"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="max-w-6xl mx-auto space-y-6"
                    >
                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { label: 'Solde du club', value: '12 500 000 FCFA', sub: 'Disponible', color: 'border-l-[#22c55e]' },
                                { label: 'Masse salariale (mois)', value: '8 250 000 FCFA', sub: 'Total à payer', color: 'border-l-blue-500' },
                                { label: 'Joueurs actifs', value: '28', sub: 'Effectif total', color: 'border-l-orange-500' },
                                { label: 'Primes à verser', value: '2 350 000 FCFA', sub: '3 primes en attente', color: 'border-l-purple-500' },
                            ].map((kpi, i) => (
                                <div key={i} className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 border-l-4 ${kpi.color}`}>
                                    <h3 className="text-[13px] font-bold text-gray-500 mb-2">{kpi.label}</h3>
                                    <div className="text-[24px] font-black text-gray-900 mb-1">{kpi.value}</div>
                                    <div className="text-[12px] font-medium text-gray-400">{kpi.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Area */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Line Chart */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1">Évolution des dépenses</h3>
                                <p className="text-[12px] text-gray-500 mb-6">6 derniers mois</p>
                                <div className="h-[250px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 600 }} dy={10} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                                            <Tooltip 
                                                contentStyle={{ borderRadius: '12px', border: '1px solid #f3f4f6', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                cursor={{ stroke: '#e5e7eb', strokeWidth: 1, strokeDasharray: '4 4' }}
                                            />
                                            <Line type="monotone" dataKey="depenses" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: '#22c55e', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            
                            {/* Donut Chart */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1">Répartition des dépenses</h3>
                                <p className="text-[12px] text-gray-500 mb-2">Ce mois</p>
                                <div className="flex-1 flex flex-col justify-center gap-4">
                                    <div className="h-[180px] w-full relative">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                                                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <span className="text-[18px] font-black text-gray-900">8 250 000</span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">FCFA</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 px-4">
                                        {pieData.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                                <div>
                                                    <div className="text-[11px] font-bold text-gray-900 leading-tight">{item.name}</div>
                                                    <div className="text-[10px] text-gray-500 font-medium">
                                                        {((item.value / 8250000) * 100).toFixed(0)}%
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-900">Transactions récentes</h3>
                                <button className="text-[13px] font-bold text-[#22c55e] hover:text-[#16a34a]">Voir tout</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {recentTransactions.map(tx => (
                                    <div key={tx.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${tx.type === 'in' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'}`}>
                                            {tx.type === 'in' ? <ArrowDownRight className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-[13px] text-gray-900 truncate pr-2">{tx.label}</div>
                                            <div className="text-[12px] font-medium text-gray-500">{tx.date}</div>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <div className={`font-bold text-[13px] ${tx.type === 'in' ? 'text-green-600' : 'text-gray-900'}`}>{tx.amount}</div>
                                            <div className={`text-[11px] font-bold ${tx.status === 'En attente' ? 'text-orange-500' : tx.status === 'Reçu' ? 'text-green-500' : 'text-gray-500'}`}>
                                                {tx.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'joueurs' && (
                    <motion.div
                       key="joueurs"
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="max-w-6xl mx-auto"
                    >
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-1">Joueurs</h3>
                                    <p className="text-[13px] text-gray-500">Gérez les joueurs de votre effectif</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="text" placeholder="Rechercher un joueur..." className="w-full sm:w-64 bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-[13px] focus:outline-none focus:border-[#22c55e]" />
                                    </div>
                                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#22c55e] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#16a34a]">
                                        <Plus className="w-4 h-4" /> Ajouter un joueur
                                    </button>
                                </div>
                            </div>
                            
                            {/* Table */}
                            <div className="overflow-x-auto pb-4">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Joueur</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Poste</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider text-right">Salaire mensuel</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {players.map(p => (
                                            <tr key={p.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <img src={p.avatar} className="w-10 h-10 rounded-full object-cover" alt={p.name} />
                                                        <span className="font-bold text-[14px] text-gray-900 group-hover:text-[#22c55e] transition-colors">{p.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4 text-[13px] text-gray-600 font-medium">{p.role}</td>
                                                <td className="py-4 px-4">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-50 text-green-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                        {p.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-right font-bold text-[13px] text-gray-900">{p.salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-[12px] font-bold text-gray-500">
                                Total joueurs: {players.length}
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'paiements' && (
                    <motion.div key="paiements" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-1">Paiements</h3>
                                    <p className="text-[13px] text-gray-500">Gérez tous les paiements de votre club</p>
                                </div>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#22c55e] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#16a34a]">
                                    <Plus className="w-4 h-4" /> Nouveau paiement
                                </button>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {['Tous', 'Salaires', 'Primes', 'Transferts', 'Autres'].map((filter, i) => (
                                        <button key={i} className={`px-4 py-1.5 rounded-full text-[12px] font-bold ${i === 0 ? 'bg-green-50 text-[#22c55e]' : 'text-gray-500 hover:bg-gray-50'}`}>{filter}</button>
                                    ))}
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <div className="relative flex-1 sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="text" placeholder="Rechercher un paiement..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-[13px] focus:outline-none focus:border-[#22c55e]" />
                                    </div>
                                    <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-[13px] font-bold">
                                        <Filter className="w-4 h-4" /> Filtrer
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto pb-4">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Bénéficiaire</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Montant</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            { type: 'Salaire', target: 'Amadou Diop', amount: '500 000 FCFA', status: 'Effectué', date: '01 Juin 2024', statusColor: 'bg-green-50 text-green-600' },
                                            { type: 'Salaire', target: 'Moussa Koné', amount: '450 000 FCFA', status: 'Effectué', date: '01 Juin 2024', statusColor: 'bg-green-50 text-green-600' },
                                            { type: 'Prime de match', target: 'Ibrahima S. Fall', amount: '150 000 FCFA', status: 'En attente', date: '05 Juin 2024', statusColor: 'bg-orange-50 text-orange-500' },
                                            { type: 'Prime de victoire', target: 'Équipe', amount: '1 200 000 FCFA', status: 'En attente', date: '05 Juin 2024', statusColor: 'bg-orange-50 text-orange-500' },
                                            { type: 'Transfert bancaire', target: 'Pape Ndiaye', amount: '200 000 FCFA', status: 'Effectué', date: '31 Mai 2024', statusColor: 'bg-green-50 text-green-600' },
                                        ].map((tx, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                                <td className="py-4 px-4 text-[13px] font-medium text-gray-900">{tx.type}</td>
                                                <td className="py-4 px-4 text-[13px] font-bold text-gray-900">{tx.target}</td>
                                                <td className="py-4 px-4 text-[13px] font-bold text-gray-900">{tx.amount}</td>
                                                <td className="py-4 px-4">
                                                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold ${tx.statusColor}`}>
                                                        {tx.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-[13px] text-gray-500 font-medium">{tx.date}</td>
                                                <td className="py-4 px-4 text-right">
                                                    <div className="flex items-center justify-end gap-2 text-gray-400">
                                                        <button className="p-1.5 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"><Printer className="w-4 h-4" /></button>
                                                        <button className="p-1.5 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'primes' && (
                    <motion.div key="primes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-1">Primes</h3>
                                    <p className="text-[13px] text-gray-500">Gérez les primes de votre équipe</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 border-b border-gray-100 mb-6 pb-2">
                                {['À venir', 'En attente', 'Historique'].map((filter, i) => (
                                    <button key={i} className={`px-4 py-2 text-[13px] font-bold border-b-2 transition-colors ${i === 0 ? 'border-[#22c55e] text-[#22c55e]' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>{filter}</button>
                                ))}
                            </div>
                            <div className="flex gap-3 mb-6">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Rechercher..." className="w-full sm:w-64 bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-[13px] focus:outline-none focus:border-[#22c55e]" />
                                </div>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#22c55e] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#16a34a] whitespace-nowrap">
                                    <Plus className="w-4 h-4" /> Ajouter une prime
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Match / Compétition</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Montant total</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="py-3 px-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            { match: 'ASC Jarraf vs US Ouakam', comp: 'Championnat National', date: '15 Juin 2024', amount: '1 200 000 FCFA', status: 'À venir' },
                                            { match: 'ASC Jarraf vs Casa Sports', comp: 'Championnat National', date: '22 Juin 2024', amount: '1 000 000 FCFA', status: 'À venir' },
                                            { match: 'ASC Jarraf vs Génération Foot', comp: 'Championnat National', date: '29 Juin 2024', amount: '1 500 000 FCFA', status: 'À venir' },
                                        ].map((p, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                                <td className="py-4 px-4">
                                                    <div className="font-bold text-gray-900 text-[13px]">{p.match}</div>
                                                    <div className="text-[11px] text-gray-500 font-medium">{p.comp}</div>
                                                </td>
                                                <td className="py-4 px-4 text-[13px] text-gray-500 font-medium">{p.date}</td>
                                                <td className="py-4 px-4 text-[13px] font-bold text-gray-900">{p.amount}</td>
                                                <td className="py-4 px-4">
                                                    <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-orange-500">{p.status}</span>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"><MoreVertical className="w-5 h-5" /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'sponsors' && (
                    <motion.div key="sponsors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-1">Sponsors</h3>
                                    <p className="text-[13px] text-gray-500">Gérez les sponsors et partenariats</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mb-6">
                                <div className="relative w-full sm:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Rechercher un sponsor..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-[13px] focus:outline-none focus:border-[#22c55e]" />
                                </div>
                                <button className="ml-auto flex items-center justify-center gap-2 px-4 py-2 bg-[#22c55e] text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#16a34a]">
                                    Ajouter un sponsor
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: 'Orange Mali', role: 'Partenaire principal', date: '31 Déc 2024', amount: '3 000 000 FCFA', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1000px-Orange_logo.svg.png' },
                                    { name: 'Puma', role: 'Équipementier', date: '30 Juin 2024', amount: '2 000 000 FCFA', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/1000px-Puma_logo.svg.png' },
                                    { name: 'Pepsi', role: 'Partenaire officiel', date: '31 Août 2024', amount: '1 500 000 FCFA', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/1000px-Pepsi_logo_2014.svg.png' },
                                ].map((s, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-white">
                                        <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                                                <img src={s.img} alt={s.name} className="max-w-full max-h-full object-contain" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-[14px] text-gray-900">{s.name}</div>
                                                <div className="text-[12px] text-gray-500 font-medium">{s.role}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto text-[13px]">
                                            <div className="text-gray-500 font-medium whitespace-nowrap">Contrat jusqu'au {s.date}</div>
                                            <div className="font-bold text-gray-900">{s.amount}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'rapports' && (
                    <motion.div key="rapports" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-6xl mx-auto space-y-6">
                         <div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-1">Rapports</h3>
                            <p className="text-[13px] text-gray-500">Générez des rapports financiers</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Rapport mensuel', desc: 'Résumé des activités du mois', icon: FileText, color: 'text-blue-500' },
                                { title: 'Rapport trimestriel', desc: 'Analyse sur 3 mois', icon: FileText, color: 'text-[#22c55e]' },
                                { title: 'Rapport annuel', desc: 'Bilan complet de l\'année', icon: FileText, color: 'text-purple-500' },
                                { title: 'Masse salariale', desc: 'Détail des salaires', icon: Users, color: 'text-orange-500' },
                                { title: 'Primes versées', desc: 'Historique des primes', icon: Award, color: 'text-rose-500' },
                                { title: 'Rapport sponsors', desc: 'Détail des sponsors', icon: Handshake, color: 'text-indigo-500' },
                            ].map((rap, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer flex flex-col items-start gap-4">
                                    <rap.icon className={`w-8 h-8 ${rap.color}`} />
                                    <div>
                                        <h4 className="font-bold text-[14px] text-gray-900">{rap.title}</h4>
                                        <p className="text-[12px] text-gray-500">{rap.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#22c55e]">
                                    <DownloadCloud className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[14px] text-gray-900">Export comptable</h4>
                                    <p className="text-[12px] text-gray-500">Exportez vos données pour votre comptabilité</p>
                                </div>
                            </div>
                            <button className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold text-[13px] rounded-lg hover:bg-gray-50 transition-colors">Exporter</button>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'parametres' && (
                    <motion.div key="parametres" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-4xl mx-auto space-y-6">
                         <div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-1">Paramètres</h3>
                            <p className="text-[13px] text-gray-500">Configurez votre club</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                            {[
                                { title: 'Informations du club', desc: 'Modifier les informations de votre club', icon: Building2 },
                                { title: 'Utilisateurs', desc: 'Gérez les membres et leurs rôles', icon: Users },
                                { title: 'Méthodes de paiement', desc: 'Comptes bancaires et moyens de paiement', icon: CreditCard },
                                { title: 'Notifications', desc: 'Préférences de notifications', icon: Bell },
                                { title: 'Sécurité', desc: 'Changez votre mot de passe', icon: Shield },
                            ].map((set, i) => (
                                <div key={i} className="group flex items-center gap-5 p-5 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer last:border-0">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm">
                                        <set.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[14px] text-gray-900">{set.title}</h4>
                                        <p className="text-[12px] text-gray-500 font-medium">{set.desc}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
         </main>
      </div>

    </div>
  );
}
