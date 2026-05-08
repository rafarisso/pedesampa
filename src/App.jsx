import { useState, useEffect } from 'react'
import { LogoHorizontal, LogoIcon } from './Logo'

// ������������������������������������������������������������������������������������������
// UTILITY COMPONENTS
// ������������������������������������������������������������������������������������������

const WHATSAPP_URL = 'https://wa.me/5511910950968'

function GreenButton({ children, className = '', size = 'lg', href, ...props }) {
  const base =
    'inline-block font-display font-800 uppercase tracking-widest text-dark bg-neon rounded-[6px] transition-all duration-200 hover:brightness-110 active:scale-95 neon-box cursor-pointer select-none'
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl',
  }
  const classes = `${base} ${sizes[size]} ${className}`
  const style = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  )
}

function OutlineButton({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-block font-display font-800 uppercase tracking-widest text-white border border-white/20 rounded-[6px] px-8 py-4 text-base transition-all duration-200 hover:border-neon hover:text-neon cursor-pointer select-none ${className}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
      {...props}
    >
      {children}
    </button>
  )
}

function SectionLabel({ children }) {
  return (
    <span
      className="inline-block text-neon text-xs uppercase tracking-[0.2em] font-semibold mb-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </span>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#FF3B30" fillOpacity="0.15" />
      <path d="M7 7L13 13M13 7L7 13" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#00E676" fillOpacity="0.15" />
      <path d="M6 10.5L9 13.5L14 7.5" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ������������������������������������������������������������������������������������������
// PHONE MOCKUP
// ������������������������������������������������������������������������������������������

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto flex-shrink-0"
      style={{ width: 260, height: 520 }}
    >
      {/* Outer frame */}
      <div
        className="absolute inset-0 rounded-[44px] border-[3px] border-[#2a2a2a] bg-[#111]"
        style={{ boxShadow: '0 0 60px rgba(0,230,118,0.12), 0 40px 80px rgba(0,0,0,0.8)' }}
      >
        {/* Volume / power buttons */}
        <div className="absolute -right-[3px] top-24 w-[3px] h-14 bg-[#2a2a2a] rounded-r-full" />
        <div className="absolute -left-[3px] top-20 w-[3px] h-10 bg-[#2a2a2a] rounded-l-full" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-10 bg-[#2a2a2a] rounded-l-full" />

        {/* Screen */}
        <div className="absolute inset-[4px] rounded-[40px] overflow-hidden bg-[#f4f4f4]">

          {/* Status bar + notch */}
          <div className="relative h-10 bg-[#0A0A0A] flex items-center justify-between px-5">
            <span className="text-white text-[10px] font-medium">9:41</span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0A0A0A] rounded-b-2xl" />
            <div className="flex items-center gap-1">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="white">
                <rect x="0" y="2" width="2" height="6" rx="1" />
                <rect x="3" y="1" width="2" height="7" rx="1" />
                <rect x="6" y="0" width="2" height="8" rx="1" />
                <rect x="9" y="0" width="2" height="8" rx="1" opacity="0.4" />
              </svg>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="white" opacity="0.9">
                <rect x="0.5" y="0.5" width="9" height="7" rx="1.5" stroke="white" strokeWidth="1" fill="none" />
                <rect x="2" y="2" width="5" height="4" rx="0.5" fill="white" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="bg-[#0A0A0A] px-4 pt-2 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-[4px] bg-[#00E676] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 48 48" fill="none">
                  <path d="M12,9 H36 V27 H19 V39 H12 Z M19,15 H30 V21 H19 Z" fill="#0A0A0A" fillRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#00E676] text-[9px] font-bold tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>PEDESAMPA</span>
            </div>
            <p className="text-white font-bold text-sm leading-tight">Pizzaria do Zé</p>
            <p className="text-[#A3A3A3] text-[10px]">Mooca, SP · Aberto agora</p>
          </div>

          {/* Categories */}
          <div className="bg-white px-3 pt-3 pb-1 flex gap-2">
            {['Pizzas', 'Bebidas', 'Combos'].map((cat, i) => (
              <span
                key={cat}
                className={`text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-semibold ${i === 0 ? 'bg-[#0A0A0A] text-white' : 'bg-gray-100 text-gray-500'}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Menu items */}
          <div className="bg-white px-3 pb-3 space-y-2 mt-2">
            {[
              { name: 'Pizza Margherita', desc: 'Molho, mozzarella, manjericão', price: 'R$ 42', emoji: '�x�"' },
              { name: 'Pizza Frango BBQ', desc: 'Frango, bacon, cheddar', price: 'R$ 48', emoji: '�x�"' },
              { name: 'Coca-Cola 2L', desc: 'Gelada e lacrada', price: 'R$ 12', emoji: '�x��' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-2 gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-900 leading-tight">{item.name}</p>
                  <p className="text-[9px] text-gray-400 leading-tight truncate">{item.desc}</p>
                  <p className="text-[11px] text-[#00E676] font-bold mt-0.5">{item.price}</p>
                </div>
                <div className="text-xl flex-shrink-0">{item.emoji}</div>
              </div>
            ))}

            {/* Cart CTA */}
            <div
              className="w-full text-center text-[11px] font-bold py-3 rounded-xl text-[#0A0A0A]"
              style={{ background: '#00E676', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.1em' }}
            >
              FAZER PEDIDO
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-100 flex items-center justify-around px-6">
            {[
              <svg key="home" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
              <svg key="search" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
              <svg key="cart" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
            ]}
          </div>
        </div>
      </div>
    </div>
  )
}

// ������������������������������������������������������������������������������������������
// NAVBAR
// ������������������������������������������������������������������������������������������

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['Funcionalidades', 'Como Funciona', 'Preço', 'FAQ']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <LogoHorizontal iconSize={32} />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#A3A3A3] hover:text-white text-sm transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <GreenButton size="sm" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">QUERO MEU APP</GreenButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/98 border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#A3A3A3] text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <GreenButton size="md" className="mt-2 w-full" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">QUERO MEU APP</GreenButton>
        </div>
      )}
    </nav>
  )
}

// ������������������������������������������������������������������������������������������
// HERO
// ������������������������������������������������������������������������������������������

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,230,118,0.07) 0%, transparent 70%)' }}
      />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-neon/30 rounded-full px-5 py-2 mb-8 bg-neon/5">
        <span className="w-2 h-2 rounded-full bg-neon animate-pulse_slow" />
        <span
          className="text-neon text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Promoção de Lançamento
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-display font-900 uppercase leading-none tracking-tight mb-6 max-w-4xl"
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontWeight: 900,
          letterSpacing: '-0.02em',
        }}
      >
        <span className="block text-4xl sm:text-5xl md:text-6xl text-white">
          Seu App de Delivery
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl text-white">
          por Apenas
        </span>
      </h1>

      {/* Price */}
      <div className="flex items-baseline justify-center gap-4 mb-8">
        <span
          className="font-display font-900 text-neon neon-glow leading-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(72px, 18vw, 140px)',
            letterSpacing: '-0.03em',
          }}
        >
          R$ 99
        </span>
        <span
          className="strikethrough-red font-display text-2xl sm:text-3xl self-center"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
        >
          de R$ 497
        </span>
      </div>

      {/* Subheadline */}
      <p className="text-[#A3A3A3] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
        O app de delivery próprio do seu restaurante, pronto em 24 horas.
        Sem comissão. Sem enrolação. Feito sob medida pra quem é de Sampa.
      </p>

      {/* CTA */}
      <GreenButton size="xl" className="mb-12" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        Quero Meu App Agora
      </GreenButton>

      {/* Social proof */}
      <div className="flex flex-col sm:flex-row items-center gap-4 text-[#A3A3A3] text-sm">
        <div className="flex -space-x-2">
          {['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'].map((c, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-dark flex items-center justify-center text-xs font-bold"
              style={{ background: c, color: '#0A0A0A' }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <p>
          <span className="text-white font-semibold">+127 restaurantes paulistanos</span> já usam o PedeSampa
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Rolar</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="7" r="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// PAIN SECTION
// ������������������������������������������������������������������������������������������

function PainSection() {
  const dores = [
    'O iFood leva sua fatia todo mês sem pedir licença',
    'Seu cliente nem sabe o nome do seu negócio',
    'Pedido sumindo no WhatsApp, sem rastro, sem controle',
    'Você não tem acesso à própria base de clientes',
  ]

  return (
    <section className="bg-[#0d0d0d] py-20 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>O Problema</SectionLabel>

        <h2
          className="font-display uppercase leading-none mb-12 text-white"
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(36px, 7vw, 72px)',
            letterSpacing: '-0.02em',
          }}
        >
          Você Perde{' '}
          <span className="text-danger" style={{ textShadow: '0 0 20px rgba(255,59,48,0.4)' }}>
            30% do Lucro
          </span>{' '}
          Pro iFood.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {dores.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 p-5 rounded-[6px] border border-white/5 bg-white/[0.02]"
            >
              <XIcon />
              <p className="text-[#A3A3A3] text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <GreenButton size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Vira o Jogo Agora</GreenButton>
          <p className="text-[#A3A3A3] text-sm">Sem mensalidade escondida. Pagamento único.</p>
        </div>

        {/* Price card */}
        <div
          className="mt-12 rounded-[8px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 neon-border-glow"
          style={{ background: 'linear-gradient(135deg, #00E676 0%, #00BF60 100%)' }}
        >
          <div>
            <p
              className="font-display font-900 text-dark uppercase leading-tight"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(22px, 4vw, 32px)',
                letterSpacing: '-0.01em',
              }}
            >
              Seu App Próprio por R$ 99
            </p>
            <p className="text-dark/70 text-sm mt-1 font-medium">
              Zero comissão. Seu cardápio, sua marca, seu cliente.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-neon font-display font-800 uppercase tracking-widest px-8 py-4 rounded-[6px] whitespace-nowrap text-base hover:bg-[#111] transition-colors flex-shrink-0"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// HOW IT WORKS
// ������������������������������������������������������������������������������������������

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Você cadastra o cardápio',
      desc: 'Manda o cardápio pelo WhatsApp ou preenche no painel. Simples assim, sem precisar saber de tecnologia.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      n: '02',
      title: 'A gente publica seu app',
      desc: 'Nossa equipe monta, personaliza com a sua marca e coloca no ar em até 24 horas. Você não precisa fazer nada.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      n: '03',
      title: 'Seus clientes pedem direto com você',
      desc: 'Link do app no Instagram, WhatsApp, Google. Pedido cai direto no painel, pagamento via Pix na sua conta.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="como-funciona" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Como Funciona</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 60px)',
              letterSpacing: '-0.02em',
            }}
          >
            Do zero ao ar em{' '}
            <span className="text-neon">24 horas</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Steps */}
          <div className="flex-1 space-y-8">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-6 items-start">
                {/* Number + connector */}
                <div className="flex flex-col items-center gap-0">
                  <div
                    className="w-12 h-12 rounded-[6px] flex items-center justify-center flex-shrink-0 border border-neon/20 bg-neon/5"
                  >
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-12 bg-gradient-to-b from-neon/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="font-display text-neon/40 text-sm"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                    >
                      {s.n}
                    </span>
                    <h3
                      className="font-display text-white uppercase"
                      style={{
                        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                        fontWeight: 800,
                        fontSize: '20px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}

            <GreenButton size="lg" className="mt-4" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Começar Agora por R$ 99
            </GreenButton>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// FEATURES / DIFERENCIAIS
// ������������������������������������������������������������������������������������������

function Features() {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Zero Comissão',
      desc: 'Você paga só a implantação. Cada pedido é 100% seu. Sem taxa, sem porcentagem, sem surpresa.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
      title: 'Pix Integrado',
      desc: 'Pagamento cai direto na sua conta. Sem intermediário, sem esperar D+30, sem taxa de saque.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
      title: 'Seu Cardápio, Sua Marca',
      desc: 'Logo, cores, nome e domínio do seu restaurante. Seu cliente reconhece você, não uma plataforma.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Suporte Paulistano',
      desc: 'Time em São Paulo, com atendimento em português, entendendo a realidade do seu negócio de bairro.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'App no Ar em 24h',
      desc: 'Assinou de manhã, já está aceitando pedidos à noite. Nossa equipe cuida de tudo, você cuida da cozinha.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Integração WhatsApp',
      desc: 'Pedido notificado direto no seu WhatsApp. Seu jeito de atender, agora com muito mais controle.',
    },
  ]

  return (
    <section id="funcionalidades" className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Por que PedeSampa</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 60px)',
              letterSpacing: '-0.02em',
            }}
          >
            Tudo que você precisa,{' '}
            <span className="text-neon">sem enrolação</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-[6px] border border-white/5 bg-white/[0.02] hover:border-neon/20 hover:bg-white/[0.04] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-[6px] bg-neon/5 border border-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/10 transition-colors">
                {c.icon}
              </div>
              <h3
                className="font-display text-white uppercase mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '-0.01em',
                }}
              >
                {c.title}
              </h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// TESTIMONIALS
// ������������������������������������������������������������������������������������������

function Testimonials() {
  const depoimentos = [
    {
      texto:
        'Era tudo pelo iFood e perdia quase 35% em comissão. Com o PedeSampa, o lucro ficou com a gente. Em um mês já paguei o custo de implantação com sobra.',
      nome: 'Eduardo Santos',
      negocio: 'Pizzaria do Ed',
      bairro: 'Mooca',
      inicial: 'E',
      cor: '#FF6B6B',
    },
    {
      texto:
        'Achei que ia ser complicado, mas em menos de 24 horas o app estava no ar. Meus clientes adoraram ter o link direto, sem precisar abrir o iFood.',
      nome: 'Ana Carvalho',
      negocio: 'Marmitex da Ana',
      bairro: 'Penha',
      inicial: 'A',
      cor: '#00E676',
    },
    {
      texto:
        'Abri minha hamburgueria há 6 meses e não queria depender de plataforma. O PedeSampa foi a melhor escolha. Atendimento rápido e o app ficou bonito demais.',
      nome: 'Rodrigo Lima',
      negocio: 'Burguer do Rô',
      bairro: 'Tatuapé',
      inicial: 'R',
      cor: '#4D96FF',
    },
  ]

  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 60px)',
              letterSpacing: '-0.02em',
            }}
          >
            Quem já virou o jogo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="p-6 rounded-[6px] border border-white/5 bg-white/[0.02] flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00E676">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-[#A3A3A3] text-sm leading-relaxed flex-1 italic">"{d.texto}"</p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-dark font-bold text-sm flex-shrink-0"
                  style={{ background: d.cor }}
                >
                  {d.inicial}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{d.nome}</p>
                  <p className="text-[#A3A3A3] text-xs">
                    {d.negocio} · {d.bairro}, SP
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// PRICE SECTION
// ������������������������������������������������������������������������������������������

function PriceSection() {
  const plans = [
    {
      name: 'Starter',
      tagline: 'Pra começar sem complicação',
      price: 99,
      popular: false,
      included: [
        'Cardápio digital completo',
        'Pedidos via WhatsApp',
        'Link personalizado',
        'Até 30 produtos',
        'Suporte por chat',
      ],
      excluded: [
        'Painel admin',
        'Pagamento online',
        'Pix integrado',
      ],
    },
    {
      name: 'Pro',
      tagline: 'O queridinho de quem vende todo dia',
      price: 197,
      popular: true,
      included: [
        'Tudo do Starter, com mais poder',
        'Painel admin completo',
        'Produtos ilimitados',
        'Pagamento online',
        'Cupons de desconto',
        'Personalização de itens',
        'Suporte prioritário',
      ],
      excluded: [],
    },
    {
      name: 'Premium',
      tagline: 'Pra quem quer a solução completa',
      price: 297,
      popular: false,
      included: [
        'Tudo do Pro, sem limite',
        'Pix automático',
        'Múltiplas formas de pagamento',
        'Relatórios de vendas',
        'Domínio próprio',
        'Programa de fidelidade',
        'Suporte via ligação',
      ],
      excluded: [],
    },
  ]

  return (
    <section id="preco" className="py-24 px-4 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel>Planos e Preços</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none mb-4"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 60px)',
              letterSpacing: '-0.02em',
            }}
          >
            Escolha o plano que combina
            <br />
            com o seu negócio
          </h2>
          <p className="text-[#A3A3A3] text-base max-w-lg mx-auto">
            Todos os planos incluem cardápio digital, link exclusivo e suporte.
            Sem comissão por pedido, nunca.
          </p>
        </div>

        {/* Implantação banner */}
        <div
          className="rounded-[8px] p-8 text-center mb-10"
          style={{ background: 'linear-gradient(135deg, #1a3d2b 0%, #0d2a1c 100%)', border: '1px solid rgba(0,230,118,0.2)' }}
        >
          <span className="inline-flex items-center gap-2 text-neon text-xs font-semibold uppercase tracking-widest mb-3">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#00E676">
              <path d="M6 0l1.5 4.5H12L8.25 7.25 9.75 12 6 9.25 2.25 12l1.5-4.75L0 4.5h4.5z"/>
            </svg>
            Oferta por tempo limitado
          </span>
          <p
            className="text-white font-semibold text-lg mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Implantação do seu app:
          </p>
          <div className="flex items-baseline justify-center gap-4 mb-2">
            <span
              className="font-display text-neon neon-glow leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(56px, 12vw, 90px)',
                letterSpacing: '-0.03em',
              }}
            >
              R$ 99
            </span>
            <span
              className="strikethrough-red font-display text-2xl self-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
            >
              R$497
            </span>
          </div>
          <p className="text-[#A3A3A3] text-sm">
            <span className="text-neon font-semibold">Pagamento único</span>, válido em qualquer plano, por tempo limitado.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-[8px] p-7 flex flex-col"
              style={{
                background: plan.popular ? 'linear-gradient(160deg, #0f2a1c 0%, #091a11 100%)' : '#111',
                border: plan.popular ? '1px solid rgba(0,230,118,0.35)' : '1px solid rgba(255,255,255,0.06)',
                boxShadow: plan.popular ? '0 0 40px rgba(0,230,118,0.1)' : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-flex items-center gap-1.5 bg-neon text-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="#0A0A0A">
                      <path d="M6 0l1.5 4.5H12L8.25 7.25 9.75 12 6 9.25 2.25 12l1.5-4.75L0 4.5h4.5z"/>
                    </svg>
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5 pt-2">
                <h3
                  className="font-display uppercase text-white leading-none mb-1"
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                    fontWeight: 900,
                    fontSize: '28px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#A3A3A3] text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-1">
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-display leading-none"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: '54px',
                      color: plan.popular ? '#00E676' : '#FFFFFF',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {plan.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#A3A3A3] text-xs font-medium">R$</span>
                    <span className="text-[#A3A3A3] text-xs">/mês</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A3A3A3] text-xs mb-6">
                + <span className="text-neon font-semibold">R$99 de implantação</span>
                <span className="strikethrough-red ml-1">de R$497</span>
              </p>

              {/* Features included */}
              <div className="space-y-2.5 flex-1 mb-6">
                {plan.included.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-[#d0d0d0] text-sm leading-snug">{f}</span>
                  </div>
                ))}
                {plan.excluded.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 opacity-40">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.06" />
                      <path d="M7 7L13 13M13 7L7 13" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[#A3A3A3] text-sm leading-snug line-through">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-[6px] border border-white/15 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:border-white/30 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.01 17.01C16.48 18.54 14.32 19.2 12 19.2c-1.87 0-3.69-.48-5.29-1.39L2 19.2l1.41-4.62C2.48 12.97 2 11.52 2 10c0-5.52 4.48-10 10-10s10 4.48 10 10c0 2.07-.63 4-1.71 5.6l-.28.41z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-[6px] text-sm font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95 ${plan.popular ? 'bg-neon text-dark neon-box' : 'bg-white/10 text-white hover:bg-white/15'}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, letterSpacing: '0.05em', fontSize: '15px' }}
                >
                  Assinar agora
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#A3A3A3] text-sm">
          <span className="text-white font-semibold">Sem fidelidade.</span> Cancele quando quiser. Mês a mês.
        </p>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// FAQ
// ������������������������������������������������������������������������������������������

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/5">
      <button
        className="w-full text-left flex items-center justify-between py-5 gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-white font-semibold text-sm sm:text-base leading-tight"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {question}
        </span>
        <span
          className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${open ? 'bg-neon border-neon rotate-45' : 'bg-transparent'}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke={open ? '#0A0A0A' : 'white'} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={open ? '#0A0A0A' : 'white'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-[#A3A3A3] text-sm leading-relaxed pb-5">{answer}</p>
      )}
    </div>
  )
}

function FAQ() {
  const perguntas = [
    {
      q: 'Em quanto tempo meu app fica pronto?',
      a: 'Em até 24 horas úteis. Você manda o cardápio e as informações do restaurante, nossa equipe configura tudo e já te passa o link ativo.',
    },
    {
      q: 'Preciso saber de tecnologia pra usar?',
      a: 'Nenhuma. Se você sabe usar WhatsApp, você consegue usar o PedeSampa. A parte técnica fica com a nossa equipe.',
    },
    {
      q: 'Posso continuar no iFood e ter o app próprio?',
      a: 'Claro. Muitos clientes usam os dois ao mesmo tempo e vão migrando os clientes fidelizados pro canal próprio. O objetivo é ir reduzindo a dependência do iFood com o tempo.',
    },
    {
      q: 'Quanto pago depois dos R$ 99?',
      a: 'Nada de mensalidade no primeiro período. Depois de 3 meses, cobramos uma taxa de manutenção mínima de R$ 29/mês para hospedar e manter o app. Mas você já sabe disso antes de assinar.',
    },
    {
      q: 'Funciona em qualquer cidade ou só em São Paulo?',
      a: 'Por enquanto estamos focados em São Paulo e Grande SP. Se você é de outra cidade, pode entrar na lista de espera, pois a expansão está no plano.',
    },
    {
      q: 'Posso cancelar quando quiser?',
      a: 'Sim. A implantação é um pagamento único sem fidelidade. Se depois quiser encerrar a manutenção mensal, só avisar com 30 dias de antecedência.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 56px)',
              letterSpacing: '-0.02em',
            }}
          >
            Pergunta, que a gente responde
          </h2>
        </div>

        <div>
          {perguntas.map((p) => (
            <FAQItem key={p.q} question={p.q} answer={p.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// FINAL CTA
// ������������������������������������������������������������������������������������������

function RealAppPhone({ nome, url, imgSrc, altText }) {
  return (
    <div className="w-[232px]">
      <div
        className="relative mx-auto"
        style={{ width: 232, height: 474 }}
      >
        <div
          className="absolute inset-0 rounded-[40px] border-[3px] border-[#2a2a2a] bg-[#111]"
          style={{ boxShadow: '0 0 40px rgba(0,230,118,0.12), 0 24px 48px rgba(0,0,0,0.7)' }}
        >
          <div className="absolute -right-[3px] top-24 w-[3px] h-14 bg-[#2a2a2a] rounded-r-full" />
          <div className="absolute -left-[3px] top-20 w-[3px] h-10 bg-[#2a2a2a] rounded-l-full" />
          <div className="absolute -left-[3px] top-36 w-[3px] h-10 bg-[#2a2a2a] rounded-l-full" />

          <div className="absolute inset-[4px] rounded-[36px] overflow-hidden bg-[#0A0A0A]">
            <div className="relative h-8 bg-[#0A0A0A] flex items-center justify-center">
              <div className="w-20 h-4 bg-[#161616] rounded-b-xl" />
            </div>
            <img
              src={imgSrc}
              alt={altText}
              width={390}
              height={844}
              loading="lazy"
              className="w-full h-[calc(100%-32px)] object-cover object-top"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-white text-sm font-semibold mt-4 mb-1">{nome}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-[#A3A3A3] hover:text-neon text-xs break-all transition-colors"
      >
        {url}
      </a>
    </div>
  )
}

function AppExamples() {
  const exemplos = [
    {
      nome: 'Hamburgueria do Chefinho',
      url: 'https://hamburgueriadochefinho.com.br/',
      imgSrc: '/apps/chefinho.png',
      altText: 'App de delivery da Hamburgueria do Chefinho',
    },
    {
      nome: 'Pizzaria Condor',
      url: 'https://pizzariacondor.com.br/',
      imgSrc: '/apps/condor.png',
      altText: 'App de delivery da Pizzaria Condor',
    },
    {
      nome: 'ClickinBurguer',
      url: 'https://clickinburger.netlify.app/',
      imgSrc: '/apps/clickinburger.png',
      altText: 'App de delivery da ClickinBurguer',
    },
    {
      nome: "ASAT'S Burger",
      url: 'https://asatsburguer.netlify.app/',
      imgSrc: '/apps/asats.png',
      altText: "App de delivery do ASAT'S Burger",
    },
  ]

  return (
    <section className="py-20 px-4 border-t border-white/5 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel>Exemplos de Apps</SectionLabel>
          <h2
            className="font-display uppercase text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 56px)',
              letterSpacing: '-0.02em',
            }}
          >
            4 apps reais dentro da tela
          </h2>
          <p className="text-[#A3A3A3] text-sm mt-3">
            Apps reais de clientes paulistanos, no ar hoje. Clique em qualquer um pra abrir no seu navegador.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {exemplos.map((exemplo) => (
            <RealAppPhone
              key={exemplo.url}
              nome={exemplo.nome}
              url={exemplo.url}
              imgSrc={exemplo.imgSrc}
              altText={exemplo.altText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
function FinalCTA() {
  return (
    <section className="py-24 px-4 border-t border-white/5 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative ring */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full border border-neon/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-neon/40 flex items-center justify-center">
              <LogoIcon size={28} />
            </div>
          </div>
        </div>

        <h2
          className="font-display uppercase text-white leading-none mb-4"
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(40px, 9vw, 80px)',
            letterSpacing: '-0.02em',
          }}
        >
          Bora virar o jogo?
        </h2>
        <p className="text-[#A3A3A3] text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Seu delivery próprio por R$ 99. Chega de pagar pedágio pro iFood.
        </p>

        <GreenButton size="xl" className="mb-4" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Quero Meu App
        </GreenButton>

        <p className="text-[#A3A3A3] text-sm">
          Pagamento único de implantação. Sem mensalidade escondida.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/5">
          {[
            { label: 'Restaurantes ativos', value: '+127' },
            { label: 'Tempo de implantação', value: '24h' },
            { label: 'Taxa de comissão', value: '0%' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-display text-neon neon-glow leading-none mb-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: '36px',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </p>
              <p className="text-[#A3A3A3] text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ������������������������������������������������������������������������������������������
// FOOTER
// ������������������������������������������������������������������������������������������

function Footer() {
  const links = {
    Produto: ['Funcionalidades', 'Como Funciona', 'Preço', 'FAQ'],
    Empresa: ['Sobre', 'Blog', 'Contato', 'Parceiros'],
    Legal: ['Termos de Uso', 'Privacidade', 'Cookies'],
  }

  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <LogoHorizontal iconSize={32} className="mb-4" />
            <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-xs">
              O app de delivery próprio do seu restaurante. Zero comissão, feito em São Paulo.
            </p>
            {/* WhatsApp contact */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#A3A3A3] hover:text-neon transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.01 17.01C16.48 18.54 14.32 19.2 12 19.2c-1.87 0-3.69-.48-5.29-1.39L2 19.2l1.41-4.62C2.48 12.97 2 11.52 2 10c0-5.52 4.48-10 10-10s10 4.48 10 10c0 2.07-.63 4-1.71 5.6l-.28.41z"/>
              </svg>
              (11) 91095-0968
            </a>
            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-[6px] border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-neon hover:border-neon/30 transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="w-9 h-9 rounded-[6px] border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-neon hover:border-neon/30 transition-colors"
                aria-label="TikTok"
              >
                <svg width="14" height="16" viewBox="0 0 24 28" fill="currentColor">
                  <path d="M19.6 6.1c-1.2-.8-2.1-2-2.4-3.4h-4v17.7c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6 0 .8.1V13.7c-.3 0-.5-.1-.8-.1C6 13.6 2.8 16.8 2.8 20.7s3.2 7.1 7.1 7.1 7.1-3.2 7.1-7.1V10.9c1.5 1 3.3 1.6 5.2 1.6V8.3c-1 0-2-.4-2.6-2.2z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-[6px] border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-neon hover:border-neon/30 transition-colors"
                aria-label="YouTube"
              >
                <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor">
                  <path d="M23.5 2.8S23.2.8 22.4.1C21.5-.8 20.5-.8 20 -.7 16.7-.5 12 -.5 12 -.5s-4.7 0-8 .2c-.5.1-1.5.1-2.4 1C.8.8.5 2.8.5 2.8S.2 5 .2 7.3v2.1C.2 11.7.5 14 .5 14s.3 2 1.1 2.7c1 .9 2.2.8 2.7.9C6 17.8 12 17.8 12 17.8s4.7 0 8-.2c.5-.1 1.5-.1 2.4-1 .8-.7 1.1-2.7 1.1-2.7s.3-2.2.3-4.5V7.3c0-2.3-.3-4.5-.3-4.5zM9.7 12.2V5.3l6.6 3.5-6.6 3.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {group}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#A3A3A3] text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A3A3A3] text-xs">
          <p>
            Feito com{' '}
            <span className="text-danger">&#9829;</span> em São Paulo
            {' '}· PedeSampa Tecnologia Ltda · CNPJ 25.354.981/0001-04
          </p>
          <p>© {new Date().getFullYear()} PedeSampa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// ������������������������������������������������������������������������������������������
// APP ROOT
// ������������������������������������������������������������������������������������������

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <PriceSection />
      <FAQ />
      <AppExamples />
      <FinalCTA />
      <Footer />
    </div>
  )
}


