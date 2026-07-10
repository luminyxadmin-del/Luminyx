"use client";

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Building2,
  Bell,
  LogOut,
  Search,
  Eye,
  CheckCircle2,
  MailCheck,
  X,
  Calendar,
  MessageSquare,
  FileText,
  Inbox,
  Loader2,
  ExternalLink,
  LayoutGrid,
  Menu,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'new' | 'read' | 'replied';

type ContactSubmission = {
  id: string;
  created_at: string;
  full_name: string;
  work_email: string;
  organisation: string;
  how_can_we_help: string;
  message: string;
  status: Status;
  notes: string;
}

type PartnerSubmission = {
  id: string;
  created_at: string;
  organisation: string;
  sector: string;
  work_email: string;
  message: string;
  status: Status;
  notes: string;
}

type ContactRow = ContactSubmission & { type: 'contact' }
type PartnerRow = PartnerSubmission & { type: 'partner' }
type AnyRow = ContactRow | PartnerRow

type View = 'overview' | 'contact' | 'partner'

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  new: { bg: 'bg-indigo-accent/10', text: 'text-indigo-accent', dot: 'bg-indigo-accent', label: 'New' },
  read: { bg: 'bg-amber/10', text: 'text-amber', dot: 'bg-amber', label: 'Read' },
  replied: { bg: 'bg-success/10', text: 'text-success', dot: 'bg-success', label: 'Replied' },
};

function StatusPill({ status }: { status: string }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.new;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${status === 'new' ? 'animate-pulse' : ''}`} />
      {s.label}
    </span>
  );
}

function TypeBadge({ type }: { type: 'contact' | 'partner' }) {
  return type === 'contact' ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary-brand">
      <Mail className="w-3 h-3" /> Contact
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-accent/10 text-violet-accent">
      <Building2 className="w-3 h-3" /> Partner
    </span>
  );
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const NAV: { key: View; label: string; icon: typeof LayoutGrid }[] = [
  { key: 'overview', label: 'Overview', icon: LayoutGrid },
  { key: 'contact', label: 'Contact Forms', icon: Mail },
  { key: 'partner', label: 'Partner Inquiries', icon: Building2 },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [view, setView] = useState<View>('overview')
  const [contactData, setContactData] = useState<ContactSubmission[]>([])
  const [partnerData, setPartnerData] = useState<PartnerSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedRow, setSelectedRow] = useState<AnyRow | null>(null)
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    checkAuth()
    fetchData()
  }, [])

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) router.push('/admin/login')
  }

  const fetchData = async () => {
    const [contactRes, partnerRes] = await Promise.all([
      supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('partner_submissions').select('*').order('created_at', { ascending: false }),
    ])
    if (contactRes.data) setContactData(contactRes.data)
    if (partnerRes.data) setPartnerData(partnerRes.data)
    setLoading(false)
  }

  const updateStatus = async (type: 'contact' | 'partner', id: string, status: Status) => {
    const table = type === 'contact' ? 'contact_submissions' : 'partner_submissions'
    await supabase.from(table).update({ status }).eq('id', id)
    fetchData()
    setSelectedRow((prev) => (prev && prev.id === id ? { ...prev, status } : prev))
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const newCount = (data: { status: string }[]) => data.filter(d => d.status === 'new').length

  const contactRows: ContactRow[] = useMemo(() => contactData.map(d => ({ ...d, type: 'contact' as const })), [contactData])
  const partnerRows: PartnerRow[] = useMemo(() => partnerData.map(d => ({ ...d, type: 'partner' as const })), [partnerData])
  const unifiedRows: AnyRow[] = useMemo(
    () => [...contactRows, ...partnerRows].sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)),
    [contactRows, partnerRows]
  )

  const currentData: AnyRow[] = view === 'overview' ? unifiedRows : view === 'contact' ? contactRows : partnerRows

  const filteredData = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return currentData
    return currentData.filter((row) => {
      const haystack = row.type === 'contact'
        ? [row.full_name, row.work_email, row.organisation, row.how_can_we_help]
        : [row.organisation, row.work_email, row.sector]
      return haystack.some((v) => (v || '').toLowerCase().includes(q))
    })
  }, [currentData, search])

  const stats = [
    { label: 'Total Contact', value: contactData.length, icon: Mail, tone: 'text-primary-brand', bg: 'bg-primary-light' },
    { label: 'New Contact', value: newCount(contactData), icon: Bell, tone: 'text-red', bg: 'bg-red/10' },
    { label: 'Total Partner', value: partnerData.length, icon: Building2, tone: 'text-primary-brand', bg: 'bg-primary-light' },
    { label: 'New Partner', value: newCount(partnerData), icon: Bell, tone: 'text-red', bg: 'bg-red/10' },
  ]

  const viewTitle = view === 'overview' ? 'Overview' : view === 'contact' ? 'Contact Forms' : 'Partner Inquiries'
  const viewSubtitle = view === 'overview'
    ? 'All submissions across the website, newest first.'
    : view === 'contact'
      ? 'Every message sent through the site contact form.'
      : 'Every inquiry sent through the partner application form.'

  const sidebarContent = (
    <>
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-light-gray shrink-0">
        <img
          src="https://res.cloudinary.com/dtg3lepr4/image/upload/v1783523985/Luminyx_ventures_Final_logo_03_fpyqls.png"
          alt="Luminyx" style={{ height: '26px' }} />
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV.map((item) => {
          const active = view === item.key
          const badge = item.key === 'contact' ? newCount(contactData) : item.key === 'partner' ? newCount(partnerData) : newCount(contactData) + newCount(partnerData)
          return (
            <button
              key={item.key}
              onClick={() => { setView(item.key); setSidebarOpen(false); setSearch('') }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active ? 'bg-primary-brand text-white shadow-card-soft' : 'text-slate hover:bg-bg-tint hover:text-primary-brand'
              }`}
            >
              <item.icon className={`w-4 h-4 ${active ? 'text-white' : 'text-ink-faint'}`} />
              <span className="flex-1 text-left">{item.label}</span>
              {badge > 0 && (
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-red/10 text-red'}`}>
                  {badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t border-light-gray shrink-0">
        <button onClick={handleLogout}
          className="w-full inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate hover:bg-red/10 hover:text-red transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-bg-tint font-body lg:flex">

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r border-light-gray z-30">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-40 lg:hidden" />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 top-0 h-screen w-64 bg-white z-50 flex flex-col lg:hidden">
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 min-w-0">

        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-light-gray">
          <div className="px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 rounded-lg text-ink-faint hover:bg-bg-tint shrink-0">
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="font-display text-base font-bold text-ink truncate">{viewTitle}</h1>
            </div>
            <div className="relative w-full max-w-xs hidden sm:block">
              <Search className="w-4 h-4 text-ink-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search submissions..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-bg-tint border border-transparent focus:outline-none focus:border-primary-brand/40 focus:bg-white focus:ring-2 focus:ring-primary-brand/10 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-8 py-8 max-w-7xl">

          <div className="mb-7">
            <p className="text-sm text-ink-faint">{viewSubtitle}</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-5 bg-white border border-light-gray shadow-card-soft">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center`}>
                    <s.icon className={`w-5 h-5 ${s.tone}`} />
                  </div>
                </div>
                <div className={`font-display text-3xl font-bold ${s.tone === 'text-red' && s.value > 0 ? 'text-red' : 'text-ink'}`}>{s.value}</div>
                <div className="text-xs text-ink-faint mt-1 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="relative w-full mb-4 sm:hidden">
            <Search className="w-4 h-4 text-ink-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search submissions..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-white border border-light-gray focus:outline-none focus:border-primary-brand/50 transition-all"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-light-gray shadow-card-soft overflow-hidden">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-ink-faint">
                <Loader2 className="w-6 h-6 animate-spin text-primary-brand" />
                <span className="text-sm">Loading submissions...</span>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-ink-faint">
                <div className="w-12 h-12 rounded-full bg-bg-tint flex items-center justify-center">
                  <Inbox className="w-5 h-5 text-ink-faint" />
                </div>
                <span className="text-sm">{search ? 'No results match your search' : 'No submissions yet'}</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-bg-subtle border-b border-light-gray">
                      {(view === 'overview'
                        ? ['Type', 'Date', 'From', 'Email', 'Detail', 'Status', 'Actions']
                        : view === 'contact'
                          ? ['Date', 'Name', 'Email', 'Organisation', 'Subject', 'Status', 'Actions']
                          : ['Date', 'Organisation', 'Email', 'Sector', 'Status', 'Actions']
                      ).map(h => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-ink-faint uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={`${row.type}-${row.id}`}
                        className={`border-b border-light-gray/70 last:border-0 transition-colors hover:bg-bg-tint/60 ${row.status === 'new' ? 'bg-primary-light/20' : ''}`}>
                        {view === 'overview' && (
                          <td className="px-4 py-3.5"><TypeBadge type={row.type} /></td>
                        )}
                        <td className="px-4 py-3.5 text-sm text-ink-faint whitespace-nowrap">{fmtDate(row.created_at)}</td>
                        {view === 'overview' ? (
                          <>
                            <td className="px-4 py-3.5 text-sm font-semibold text-ink">{row.type === 'contact' ? row.full_name : row.organisation}</td>
                            <td className="px-4 py-3.5 text-sm text-slate">{row.work_email}</td>
                            <td className="px-4 py-3.5 text-sm text-slate max-w-[220px] truncate">{row.type === 'contact' ? row.how_can_we_help : row.sector}</td>
                          </>
                        ) : row.type === 'contact' ? (
                          <>
                            <td className="px-4 py-3.5 text-sm font-semibold text-ink">{row.full_name}</td>
                            <td className="px-4 py-3.5 text-sm text-slate">{row.work_email}</td>
                            <td className="px-4 py-3.5 text-sm text-slate">{row.organisation || '—'}</td>
                            <td className="px-4 py-3.5 text-sm text-slate max-w-[220px] truncate">{row.how_can_we_help}</td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3.5 text-sm font-semibold text-ink">{row.organisation}</td>
                            <td className="px-4 py-3.5 text-sm text-slate">{row.work_email}</td>
                            <td className="px-4 py-3.5 text-sm text-slate">{row.sector}</td>
                          </>
                        )}
                        <td className="px-4 py-3.5"><StatusPill status={row.status} /></td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1">
                            {row.status !== 'read' && (
                              <button onClick={() => updateStatus(row.type, row.id, 'read')} title="Mark as read"
                                className="p-2 rounded-lg text-amber hover:bg-amber/10 transition-colors">
                                <MailCheck className="w-4 h-4" />
                              </button>
                            )}
                            {row.status !== 'replied' && (
                              <button onClick={() => updateStatus(row.type, row.id, 'replied')} title="Mark as replied"
                                className="p-2 rounded-lg text-success hover:bg-success/10 transition-colors">
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            )}
                            <button onClick={() => setSelectedRow(row)} title="View details"
                              className="p-2 rounded-lg text-primary-brand hover:bg-primary-light transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedRow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedRow(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-elevated"
            >
              <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-light-gray">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    {selectedRow.type === 'contact'
                      ? <Mail className="w-5 h-5 text-primary-brand" />
                      : <Building2 className="w-5 h-5 text-primary-brand" />}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-base font-bold text-ink truncate">
                      {selectedRow.type === 'contact' ? selectedRow.full_name : selectedRow.organisation}
                    </h2>
                    <p className="text-xs text-ink-faint mt-0.5 truncate">{selectedRow.work_email}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedRow(null)}
                  className="p-1.5 rounded-lg text-ink-faint hover:bg-bg-tint hover:text-ink transition-colors shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-7 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <TypeBadge type={selectedRow.type} />
                  <StatusPill status={selectedRow.status} />
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-light-gray">
                  <Calendar className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Submitted</div>
                    <div className="text-sm text-ink">{fmtDate(selectedRow.created_at)}</div>
                  </div>
                </div>

                {selectedRow.type === 'contact' && (
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Organisation</div>
                      <div className="text-sm text-ink">{selectedRow.organisation || '—'}</div>
                    </div>
                  </div>
                )}

                {selectedRow.type === 'partner' && (
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Sector</div>
                      <div className="text-sm text-ink">{selectedRow.sector || '—'}</div>
                    </div>
                  </div>
                )}

                {selectedRow.type === 'contact' && (
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Subject</div>
                      <div className="text-sm text-ink">{selectedRow.how_can_we_help || '—'}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Message</div>
                    <div className="text-sm text-ink leading-relaxed whitespace-pre-wrap">{selectedRow.message || '—'}</div>
                  </div>
                </div>

                {selectedRow.notes && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-0.5">Notes</div>
                      <div className="text-sm text-ink leading-relaxed">{selectedRow.notes}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 px-7 py-5 border-t border-light-gray bg-bg-subtle rounded-b-3xl">
                {selectedRow.status !== 'read' && (
                  <button
                    onClick={() => updateStatus(selectedRow.type, selectedRow.id, 'read')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-amber bg-amber/10 hover:bg-amber/20 transition-colors">
                    <MailCheck className="w-3.5 h-3.5" /> Mark Read
                  </button>
                )}
                {selectedRow.status !== 'replied' && (
                  <button
                    onClick={() => updateStatus(selectedRow.type, selectedRow.id, 'replied')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-success bg-success/10 hover:bg-success/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mark Replied
                  </button>
                )}
                <a
                  href={`mailto:${selectedRow.work_email}`}
                  className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-primary-brand hover:bg-primary-dark transition-colors">
                  Reply via Email <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
