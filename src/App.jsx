import { useEffect, useState } from 'react'
import { LogoHorizontal, LogoIcon } from './Logo'

const WHATSAPP_NUMBER = '5511910950968'
const WHATSAPP_MESSAGE =
  'Olá! Vi o anúncio do PedeSampa e quero uma prévia do meu cardápio digital.'
const WHATSAPP_ENCODED_MESSAGE = encodeURIComponent(WHATSAPP_MESSAGE).replace(/!/g, '%21')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_ENCODED_MESSAGE}`

function handleWhatsAppClick(location) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead')
      window.fbq('trackCustom', 'ClickWhatsApp', { location })
    } catch {
      // Do not block the lead if the tracking script is unavailable or fails.
    }
  }

  const opened = window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
  if (!opened) {
    window.location.href = WHATSAPP_URL
  }
}

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex text-xs font-bold uppercase text-neon">
      {children}
    </span>
  )
}

function CtaButton({ children, location, className = '', size = 'lg' }) {
  const sizes = {
    sm: 'px-5 py-3 text-sm',
    md: 'px-7 py-4 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type="button"
      onClick={() => handleWhatsAppClick(location)}
      className={`inline-flex items-center justify-center rounded-md bg-neon font-display font-black uppercase text-dark shadow-[0_0_28px_rgba(0,230,118,0.24)] transition hover:brightness-110 active:scale-[0.98] ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

function OutlineLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md border border-white/15 px-7 py-4 font-display font-black uppercase text-white transition hover:border-neon hover:text-neon ${className}`}
    >
      {children}
    </a>
  )
}

function CheckMark() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon text-sm font-black text-dark">
      ✓
    </span>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'WhatsApp', href: '#pedido-whatsapp' },
    { label: 'Incluso', href: '#incluso' },
    { label: 'Preço', href: '#preco' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-white/10 bg-dark/95 backdrop-blur-md' : 'bg-dark/80'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Ir para o início">
          <LogoHorizontal iconSize={30} />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <CtaButton size="sm" location="navbar">
            Quero meu cardápio
          </CtaButton>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/10 p-2 text-white md:hidden"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-dark px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-white/10 px-4 py-3 font-semibold text-white/80"
              >
                {link.label}
              </a>
            ))}
            <CtaButton location="menu_mobile" className="w-full">
              Quero meu cardápio digital
            </CtaButton>
          </div>
        </div>
      )}
    </nav>
  )
}

function MenuMockup() {
  const items = [
    { name: 'X-Burguer Artesanal', desc: 'Pão brioche, burger 160g e queijo', price: 'R$ 28,90' },
    { name: 'Batata Frita', desc: 'Porção crocante com molho da casa', price: 'R$ 14,90' },
    { name: 'Refrigerante Lata', desc: 'Gelado para acompanhar o pedido', price: 'R$ 6,00' },
  ]

  return (
    <div className="mx-auto w-full max-w-[315px]">
      <div className="rounded-[30px] border border-white/15 bg-[#101010] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.48)]">
        <div className="overflow-hidden rounded-[24px] bg-[#f6f6f6] text-[#111]">
          <div className="bg-dark px-4 pb-4 pt-5 text-white">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LogoIcon size={24} />
                <span className="font-display text-lg font-black">pede<span className="text-neon">sampa</span></span>
              </div>
              <span className="rounded bg-neon px-2 py-1 text-[10px] font-black uppercase text-dark">
                Aberto
              </span>
            </div>
            <p className="text-xl font-black">Burger Vila</p>
            <p className="text-xs text-white/65">Modelo de cardápio digital</p>
          </div>

          <div className="flex gap-2 overflow-hidden border-b border-black/5 bg-white px-4 py-3">
            {['Combos', 'Lanches', 'Bebidas'].map((category, index) => (
              <span
                key={category}
                className={`shrink-0 rounded-md px-3 py-2 text-xs font-bold ${
                  index === 0 ? 'bg-dark text-white' : 'bg-black/5 text-black/60'
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="space-y-3 bg-white p-4">
            {items.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_58px] gap-3 rounded-lg bg-black/[0.03] p-3">
                <div>
                  <p className="text-sm font-black">{item.name}</p>
                  <p className="mt-1 text-xs leading-snug text-black/55">{item.desc}</p>
                  <p className="mt-2 text-sm font-black text-[#00994f]">{item.price}</p>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-md bg-[#e9f8ef] text-[10px] font-black uppercase text-[#00994f]">
                  Foto
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 pt-0">
            <div className="rounded-md bg-neon py-3 text-center font-display text-base font-black uppercase text-dark">
              Fazer pedido
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const bullets = [
    'Pedido mais organizado',
    'Menos tempo respondendo dúvidas',
    'Sem comissão por venda',
    'Manutenção inclusa',
  ]

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-24 sm:px-6 lg:pb-20 lg:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>Cardápio digital + pedido no WhatsApp</SectionLabel>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Seu cardápio digital por apenas <span className="text-neon">R$ 99/mês</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 sm:text-xl">
            O cliente acessa, escolhe os produtos, informa como vai pagar e o pedido chega pronto no WhatsApp da sua loja.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 text-sm font-bold text-white">
                <CheckMark />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton location="hero_primary" className="w-full sm:w-auto">
              Quero meu cardápio digital
            </CtaButton>
            <OutlineLink href="#como-funciona" className="w-full sm:w-auto">
              Ver como funciona
            </OutlineLink>
          </div>
          <p className="mt-3 text-sm font-semibold text-white/55">
            Peça uma prévia sem compromisso.
          </p>
        </div>

        <div className="lg:pl-8">
          <MenuMockup />
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      title: 'O cliente acessa seu link',
      desc: 'Você divulga o link do PedeSampa na bio do Instagram, no WhatsApp, no Google ou envia direto para o cliente.',
    },
    {
      title: 'Ele escolhe os produtos',
      desc: 'O cliente vê fotos, preços, descrições, monta o pedido e informa a forma de pagamento: Pix, débito, crédito ou dinheiro.',
    },
    {
      title: 'O pedido chega pronto no WhatsApp',
      desc: 'A loja recebe uma mensagem organizada com os itens, observações, forma de pagamento e dados do cliente. Aí é só confirmar, preparar e vender.',
    },
  ]

  return (
    <section id="como-funciona" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Como o pedido chega para você</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <span className="font-display text-4xl font-black text-neon">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-5 font-display text-3xl font-black leading-none text-white">
                {step.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/68">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PainSection() {
  const pains = [
    'Cliente perguntando “tem cardápio?”',
    'Pedido perdido no meio da conversa',
    'Preço antigo sendo enviado por print',
    'Atendente parando tudo para explicar produto',
    'Cliente desistindo antes de comprar',
    'Venda perdida por falta de organização',
  ]

  return (
    <section className="border-y border-white/10 bg-[#120d0d] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Dor real do delivery pequeno</SectionLabel>
          <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Seu WhatsApp não precisa ser uma bagunça
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Chega de responder “manda o cardápio?” o dia inteiro. O cliente pode escolher sozinho antes de chamar sua loja.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain} className="rounded-lg border border-red-500/20 bg-red-500/[0.07] p-5">
              <span className="mb-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500/15 font-black text-red-300">
                !
              </span>
              <p className="font-bold leading-snug text-white">{pain}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-neon/25 bg-neon/[0.08] p-6">
          <p className="text-lg font-bold leading-relaxed text-white">
            Com o PedeSampa, o cliente escolhe antes de chamar. Quando ele chega no WhatsApp, já chega mais pronto para comprar.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppOrderMockup() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-6">
      <div className="rounded-lg bg-[#e6f3e8] p-4 text-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="mb-4 flex items-center gap-3 border-b border-black/10 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f9d55] text-lg font-black text-white">
            W
          </div>
          <div>
            <p className="font-black">WhatsApp da loja</p>
            <p className="text-xs text-black/55">Pedido recebido agora</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 text-sm leading-relaxed shadow-sm">
          <p className="mb-4 font-black text-[#00994f]">Novo pedido PedeSampa</p>
          <p><strong>Cliente:</strong> João Silva</p>
          <div className="mt-4">
            <p className="font-black">Pedido:</p>
            <p>1x X-Burguer Artesanal</p>
            <p>1x Batata Frita</p>
            <p>1x Refrigerante Lata</p>
          </div>
          <div className="mt-4">
            <p className="font-black">Observação:</p>
            <p>Sem cebola</p>
          </div>
          <div className="mt-4">
            <p className="font-black">Forma de pagamento:</p>
            <p>Pix</p>
          </div>
          <div className="mt-4">
            <p className="font-black">Endereço:</p>
            <p>Rua Exemplo, 123</p>
          </div>
          <div className="mt-4 rounded-md bg-[#e9f8ef] p-3">
            <p className="font-black">Total: R$ 48,90</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function WhatsAppSection() {
  return (
    <section id="pedido-whatsapp" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionLabel>Exemplo de pedido chegando no WhatsApp</SectionLabel>
          <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Menos conversa perdida. Mais pedido organizado.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            O cliente escolhe sozinho e chega pronto para comprar. Seu único trabalho é receber o pedido, confirmar e vender.
          </p>
          <div className="mt-8">
            <CtaButton location="whatsapp_mockup">
              Quero receber pedidos assim
            </CtaButton>
          </div>
        </div>

        <WhatsAppOrderMockup />
      </div>
    </section>
  )
}

function VisualExamples() {
  const examples = [
    { src: '/apps/chefinho.png', label: 'Modelo demonstrativo para hamburgueria' },
    { src: '/apps/clickinburger.png', label: 'Modelo demonstrativo de cardápio com fotos' },
    { src: '/apps/condor.png', label: 'Modelo demonstrativo para restaurante' },
  ]

  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Veja como pode ficar</SectionLabel>
          <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Modelo de cardápio digital para divulgar no Instagram, WhatsApp e Google
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            As telas abaixo são modelos demonstrativos para mostrar o visual do cardápio e a experiência de escolha do cliente.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <div key={example.src} className="overflow-hidden rounded-lg border border-white/10 bg-dark">
              <img
                src={example.src}
                alt={example.label}
                loading="lazy"
                className="h-72 w-full object-cover object-top"
              />
              <p className="border-t border-white/10 px-4 py-4 text-sm font-bold text-white/75">
                {example.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IncludedSection() {
  const items = [
    'Cardápio digital com a identidade da sua loja',
    'Link próprio para divulgar',
    'Produtos, fotos, preços e descrições',
    'Pedido direto no WhatsApp',
    'Formas de pagamento configuradas',
    'Manutenção de produtos e preços inclusa',
    'Suporte pelo WhatsApp',
    'Zero comissão por pedido',
  ]

  return (
    <section id="incluso" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>O que você recebe por R$ 99/mês</SectionLabel>
            <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
              Tudo que seu delivery precisa para vender de forma mais organizada
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Um cardápio simples, bonito e funcional para o cliente montar o pedido sem ficar preso em conversa.
            </p>
            <div className="mt-8 rounded-lg border border-neon/35 bg-neon/[0.09] p-6">
              <h3 className="font-display text-3xl font-black text-neon">
                Manutenção inclusa
              </h3>
              <p className="mt-3 leading-relaxed text-white/78">
                Precisa alterar preço, produto ou informação do cardápio? A manutenção simples já está inclusa no plano.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <CheckMark />
                <p className="font-bold leading-snug text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const includes = [
    'Cardápio digital personalizado',
    'Pedido organizado no WhatsApp',
    'Manutenção simples inclusa',
    'Suporte via WhatsApp',
    'Sem comissão por venda',
  ]

  return (
    <section id="preco" className="border-y border-white/10 bg-[#0f1411] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Preço direto e transparente</SectionLabel>
          <h2 className="font-display text-4xl font-black leading-none text-white sm:text-6xl">
            Simples assim: <span className="text-neon">R$ 99/mês</span>
          </h2>
          <p className="mt-5 text-xl font-bold text-white/78">
            Sem comissão. Sem taxa por pedido. Sem complicação.
          </p>
        </div>

        <div className="rounded-lg border border-neon/35 bg-dark p-6 shadow-[0_0_42px_rgba(0,230,118,0.12)] sm:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-neon">Plano</p>
              <h3 className="mt-2 font-display text-4xl font-black text-white">PedeSampa</h3>
            </div>
            <div>
              <p className="font-display text-6xl font-black leading-none text-neon">R$ 99</p>
              <p className="text-right text-sm font-bold text-white/60 sm:text-left">por mês</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckMark />
                <span className="font-bold text-white/82">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CtaButton location="pricing" className="w-full">
              Quero começar agora
            </CtaButton>
            <p className="mt-3 text-center text-sm font-semibold text-white/55">
              Você pode pedir uma prévia antes de fechar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="font-bold text-white">{question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 text-xl font-black text-neon">
          {open ? '-' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="leading-relaxed text-white/70">{answer}</p>
        </div>
      )}
    </div>
  )
}

function FAQ() {
  const questions = [
    {
      question: 'Tem comissão por venda?',
      answer:
        'Não. O pedido é seu e a venda é sua. O PedeSampa não cobra porcentagem sobre seus pedidos.',
    },
    {
      question: 'O pedido chega onde?',
      answer:
        'O pedido chega direto no WhatsApp da loja, já organizado com itens, observações, forma de pagamento e dados do cliente.',
    },
    {
      question: 'Posso alterar produtos e preços?',
      answer:
        'Sim. Mudanças simples de produtos, preços e informações do cardápio estão inclusas na manutenção do plano.',
    },
    {
      question: 'Preciso instalar aplicativo?',
      answer:
        'Não. O cliente acessa por um link. Você pode divulgar no Instagram, WhatsApp, Google ou onde quiser.',
    },
    {
      question: 'Serve para qual tipo de negócio?',
      answer:
        'Serve para hamburguerias, pizzarias, marmitarias, docerias, açaiterias, restaurantes, lanchonetes e pequenos deliverys.',
    },
  ]

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <SectionLabel>Dúvidas rápidas</SectionLabel>
          <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
            Antes de pedir sua prévia
          </h2>
        </div>

        <div className="mt-10 grid gap-3">
          {questions.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-lg border border-neon/35 bg-neon/[0.08] px-6 py-10 text-center sm:px-10">
        <SectionLabel>Oferta única</SectionLabel>
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-none text-white sm:text-6xl">
          Pare de perder pedido no WhatsApp
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/72">
          Seu cardápio digital por R$ 99/mês. O cliente escolhe pelo link e o pedido chega pronto para sua loja.
        </p>
        <div className="mt-8">
          <CtaButton location="final_cta">
            Quero meu cardápio digital
          </CtaButton>
        </div>
        <p className="mt-3 text-sm font-semibold text-white/55">
          Peça uma prévia sem compromisso.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <LogoHorizontal iconSize={28} />
        <p className="text-sm text-white/55">
          Cardápio digital PedeSampa — R$ 99/mês, sem comissão por venda.
        </p>
      </div>
    </footer>
  )
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-dark/95 p-3 backdrop-blur md:hidden">
      <CtaButton location="sticky_mobile" className="w-full">
        Quero meu cardápio digital
      </CtaButton>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark pb-24 font-body text-white md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <ProcessSection />
        <PainSection />
        <WhatsAppSection />
        <VisualExamples />
        <IncludedSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
