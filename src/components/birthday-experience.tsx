import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Heart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const publicPhoto = (filename: string) => `/${filename}`;

const pPhoto = publicPhoto("p.jpg");
const photo1 = publicPhoto("1.jpg");
const photo2 = publicPhoto("2.jpg");
const photo3 = publicPhoto("3.jpg");
const photo4 = publicPhoto("4.jpg");
const photo5 = publicPhoto("5.jpg");
const photo6 = publicPhoto("6.jpg");
const photo7 = publicPhoto("7.jpg");
const photo8 = publicPhoto("8.jpg");
const photo9 = publicPhoto("9.jpg");

const photos = [pPhoto, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

const reasons = [
  "O teu sorriso.",
  "A tua maneira de ser.",
  "A forma como consegues ocupar os meus pensamentos.",
  "O teu jeito.",
  "A tua força, mesmo nos dias em que não a vês.",
  "A tua inteligência.",
  "A paz que encontro na tua presença.",
  "A tua voz.",
  "A tua beleza — por dentro e por fora.",
  "A forma como me fazes querer ser melhor.",
  "Os teus pequenos gestos.",
  "A tua autenticidade.",
  "A maneira como transformas momentos simples em memórias.",
  "O teu coração.",
  "A tua coragem.",
  "A forma como me fazes sorrir sem perceber.",
  "O teu olhar.",
  "A cumplicidade que existe entre nós.",
  "As nossas conversas.",
  "Até os nossos silêncios.",
  "A forma como acreditas.",
  "A tua sensibilidade.",
  "Tudo o que já superámos.",
  "Tudo o que ainda podemos viver.",
  "A tua presença nos meus dias.",
  "O lugar que criaste na minha vida.",
  "A mulher que és.",
  "A história que continuamos a escolher.",
  "Porque és tu.",
];

const memorySlides = [
  { image: photo5, kicker: "Um momento que guardo.", note: "Nós, no meio de um dia simples — e isso já bastava." },
  { image: photo6, kicker: "Outro pedaço da nossa história.", note: "A tua presença muda sempre a luz de qualquer lugar." },
  { image: photo7, kicker: "A alegria que fica.", note: "Há sorrisos que dizem tudo sem precisar de palavras." },
  { image: photo8, kicker: "Nós, simplesmente.", note: "Partilhar o momento. Estar. Ficar." },
  { image: photo9, kicker: "Mais uma página nossa.", note: "O mesmo lugar, outra pequena memória para guardar." },
];

function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: 22 }, (_, index) => <i key={index} />)}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.35 });
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={seen ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Chapter({
  number,
  children,
  className = "",
  id,
}: {
  number: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const resolvedId = id ?? `chapter-${number}`;

  return (
    <motion.section
      id={resolvedId}
      data-chapter={number}
      className={`chapter ${className}`}
      initial={{ opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="chapter-index" aria-hidden="true">{String(number).padStart(2, "0")}</div>
      {children}
    </motion.section>
  );
}

function IntroSection({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.section
      id="intro-message"
      className="chapter intro-message"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="intro-glow" aria-hidden="true" />
      <motion.div className="intro-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <span className="eyebrow">Mensagem inicial</span>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>Sei que adoras cartas.</motion.p>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>Desde os tempos mais remotos, cartas foram uma maneira de descrever o amor que sentimos por alguém.</motion.p>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>Felizmente, os tempos mudaram e as pessoas já não têm o privilégio de encontrar grafias ruins escritas em papel. 😂</motion.p>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}>Mas, de uma forma melhorada, ainda assim decidi escrever uma carta para ti.</motion.p>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.9 }}>Foi feita à mão e escrita no melhor caderno de todos:</motion.p>
        <motion.p className="code-line" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.3 }}>o VSCode.</motion.p>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.7 }}>Espero que gostes.</motion.p>
        <motion.button type="button" className="continue-indicator" onClick={onContinue} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 3.1 }}>
          Continua ↓
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

function ClosedLetterSection({ onOpen, isOpening }: { onOpen: () => void; isOpening: boolean }) {
  return (
    <motion.section
      id="letter-closed"
      className={`chapter letter-closed ${isOpening ? "is-opening" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`letter-scene ${isOpening ? "opened" : ""}`}>
        <div className="letter-shadow" aria-hidden="true" />
        <div className="letter-envelope" onClick={onOpen} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onOpen(); } }}>
          <div className="envelope-lip" aria-hidden="true" />
          <div className="envelope-front" aria-hidden="true" />
          <div className="letter-paper" aria-label="Carta aberta para ti">
            <span>Para ti.</span>
          </div>
          <div className="letter-label">Clique aqui para abrir a minha carta</div>
        </div>
      </div>
    </motion.section>
  );
}

function Portrait({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`portrait-shell ${className}`}>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
      <div className="portrait-vignette" aria-hidden="true" />
    </div>
  );
}

export function BirthdayExperience() {
  const musicIframeRef = useRef<HTMLIFrameElement>(null);
  const [entered, setEntered] = useState(false);
  const [storyPhase, setStoryPhase] = useState<"intro" | "letter" | "story">("intro");
  const [letterOpening, setLetterOpening] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [reason, setReason] = useState(0);
  const [surprise, setSurprise] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const frame = musicIframeRef.current;
    if (!frame?.contentWindow) return;

    const timer = window.setTimeout(() => {
      frame.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "https://www.youtube.com");
      frame.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "unMute", args: [] }), "https://www.youtube.com");
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const value = visible?.target.getAttribute("data-chapter");
      if (value) setChapter(Number(value));
    }, { threshold: [0.35, 0.65] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [entered]);

  const openLetter = () => {
    setLetterOpening(true);

    window.setTimeout(() => {
      setStoryPhase("story");
      setEntered(true);
      window.setTimeout(() => document.getElementById("chapter-1")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }), 120);
    }, 260);
  };

  const continueIntro = () => {
    setStoryPhase("letter");
    window.setTimeout(() => document.getElementById("letter-closed")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }), 100);
  };

  const enterStory = () => {
    setEntered(true);
    setStoryPhase("story");
    window.setTimeout(() => document.getElementById("chapter-1")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }), 100);
  };

  return (
    <main className={`experience ${entered ? "story-entered" : ""}`}>
      <Stars />
      <iframe
        ref={musicIframeRef}
        className="youtube-player"
        title="JVKE — her"
        src="https://www.youtube.com/embed/f5-IY_Ja1RM?si=fmMsY2Eo3Si61nQI&enablejsapi=1&playsinline=1&rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=f5-IY_Ja1RM&start=0"
        allow="autoplay; encrypted-media; picture-in-picture"
      />

      {storyPhase === "intro" && <IntroSection onContinue={continueIntro} />}
      {storyPhase === "letter" && <ClosedLetterSection onOpen={openLetter} isOpening={letterOpening} />}

      {storyPhase === "story" && (
        <>
          {entered && (
            <div className="progress-rail" aria-label={`Capítulo ${chapter} de 12`}>
              <span>{String(chapter).padStart(2, "0")}</span>
              <div>{Array.from({ length: 12 }, (_, i) => <i key={i} className={chapter >= i + 1 ? "active" : ""} />)}</div>
              <span>12</span>
            </div>
          )}

          <Chapter number={1} className="opening">
        <AnimatePresence mode="wait">
          {!entered ? (
            <motion.div className="opening-content" key="intro" exit={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }} transition={{ duration: 0.8 }}>
              <div className="opening-portrait"><Portrait src={pPhoto} alt="Goreth, a aniversariante" priority /></div>
              <div className="opening-words">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }} className="goreth">Goreth...</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.8 }}>Antes de continuares, quero que saibas uma coisa.</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 3.2 }}>Eu fiz isto para ti.</motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 4.5 }}>
                  <h1>Feliz 29.º aniversário,<br /><em>minha Cinderela.</em></h1>
                  <Button variant="romance" size="story" onClick={enterStory}>Entrar na nossa história <ArrowRight /></Button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="entered" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="opening-after">
              <span>Para a minha Cinderela</span>
              <small>Uma pequena história sobre nós.</small>
              <ArrowDown aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </Chapter>

      <Chapter number={2} id="your-day" className="day-chapter">
        <div className="day-photo"><Portrait src={pPhoto} alt="Goreth sentada, num retrato sereno" /></div>
        <Reveal className="day-copy">
          <span className="date">27 de Setembro de 2026</span>
          <h2>Hoje é o dia <em>dela.</em></h2>
          <p>Hoje, a minha Cinderela completa 29 anos.</p>
          <strong>Feliz aniversário, Goreth.</strong>
          <Button variant="quiet" size="story" onClick={() => document.getElementById("before-you")?.scrollIntoView({ behavior: "smooth" })}>Continuar <ArrowRight /></Button>
        </Reveal>
      </Chapter>

      <Chapter number={3} id="before-you" className="before-chapter">
        <div className="before-copy">
          <Reveal><p>Eu não sabia que alguém poderia chegar...</p></Reveal>
          <Reveal delay={0.35}><p>...e ocupar tanto espaço dentro de mim.</p></Reveal>
          <Reveal delay={0.7}><h2>Até apareceres tu.</h2></Reveal>
        </div>
        <Reveal delay={1} className="memory-arrives"><Portrait src={photo1} alt="Goreth e Manuel juntos no Luanda Event" /></Reveal>
      </Chapter>

      <Chapter number={4} className="beginning-chapter">
        <div className="beginning-photo"><Portrait src={photo2} alt="Goreth e Manuel numa selfie" /></div>
        <div className="beginning-copy">
          <Reveal><span className="eyebrow">Quando começou</span><h2>Eu não sei dizer exatamente quando aconteceu.</h2></Reveal>
          <Reveal delay={0.25}><p>Não houve necessariamente um momento cinematográfico.</p><strong>Foi acontecendo.</strong></Reveal>
          <Reveal delay={0.55}><p>Comecei a pensar mais em ti.<br />Comecei a querer falar contigo.<br />Comecei a reparar em coisas que antes talvez nem percebesse.</p></Reveal>
          <Reveal delay={0.9}><blockquote>E, sem perceber... eu estava apaixonado por ti.</blockquote></Reveal>
        </div>
      </Chapter>

      <Chapter number={5} className="chosen-chapter">
        <div className="chosen-bg"><img src={photo4} alt="" loading="lazy" /></div>
        <Reveal className="chosen-card">
          <span className="eyebrow">O dia em que te escolhi</span>
          <p>Talvez não saibas, mas existe algo bonito em eu estar novamente aqui, criando um website para ti.</p>
          <p>A primeira vez foi para te perguntar:</p>
          <h2>“Aceitas começar uma <em>historiaa</em> comigo?”</h2>
          <p>Hoje estou aqui para te dizer:</p>
          <strong>Obrigado por teres dito sim.</strong>
        </Reveal>
      </Chapter>

      {memorySlides.map((item, index) => (
        <Chapter number={7} className={`memory-slide memory-${index + 5}`} key={item.image}>
          <div className="memory-full"><img src={item.image} alt={`Memória ${index + 5} de Goreth e Manuel`} loading="lazy" /></div>
          <Reveal className="memory-label">
            <span>{String(index + 5).padStart(2, "0")} / 09</span>
            <h2>{item.kicker}</h2>
            <p>{item.note}</p>
          </Reveal>
          {index === memorySlides.length - 1 && (
            <Reveal delay={0.5} className="memory-summary"><strong>9 fotografias.</strong><span>Mas milhares de momentos.</span><small>E nenhum site seria grande o suficiente para guardar todos eles.</small></Reveal>
          )}
        </Chapter>
      ))}

      <Chapter number={8} className="imperfect-chapter">
        <div className="soft-bg"><img src={pPhoto} alt="" loading="lazy" /></div>
        <div className="imperfect-copy">
          <Reveal><h2>A nossa história não foi perfeita.</h2></Reveal>
          {["Tivemos momentos incríveis.", "Tivemos momentos difíceis.", "Já nos magoámos.", "Já tivemos medo de perder um ao outro."].map((line, i) => <Reveal delay={0.12 * i} key={line}><p>{line}</p></Reveal>)}
          <div className="turning-light">
            <Reveal><p>Mas também aprendemos.</p></Reveal>
            <Reveal delay={0.18}><p>Voltámos a conversar.</p></Reveal>
            <Reveal delay={0.36}><p>Voltámos a sorrir.</p></Reveal>
            <Reveal delay={0.58}><strong>E continuámos.</strong></Reveal>
          </div>
          <Reveal delay={0.8}><blockquote>Nós escolhemos continuar.</blockquote></Reveal>
        </div>
      </Chapter>

      <Chapter number={9} className="reasons-chapter">
        <div className="reasons-backdrop"><img src={pPhoto} alt="" loading="lazy" /></div>
        <Reveal className="reasons-copy"><span>29 anos.</span><h2>29 razões.</h2><p>Uma de cada vez. Como mereces.</p></Reveal>
        <button className={`reason-card ${reason === 28 ? "final-reason" : ""}`} onClick={() => setReason((current) => current < 28 ? current + 1 : 0)} aria-label="Revelar a próxima razão">
          <span>{String(reason + 1).padStart(2, "0")}</span>
          <AnimatePresence mode="wait">
            <motion.strong key={reason} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }}>{reasons[reason]}</motion.strong>
          </AnimatePresence>
          {reason === 28 ? <small>No fim de todas as razões, eu simplesmente amo-te porque és tu.</small> : <small>Toca para revelar a próxima</small>}
        </button>
      </Chapter>

      <Chapter number={10} className="letter-chapter">
        <div className="letter-bg"><img src={pPhoto} alt="" loading="lazy" /></div>
        <Reveal className="letter">
          <span className="eyebrow">Agora, sem código. Sem site. Sem filtros.</span>
          <h2>Só eu a falar contigo.</h2>
          <p>Minha Cinderela,</p>
          <p>Hoje completas 29 anos e eu queria que soubesses o quanto a tua existência significa para mim.</p>
          <p>Eu queria poder estar contigo, levar-te para jantar, oferecer-te flores e dar-te um presente à altura do que sinto por ti. Mas este ano não consegui fazer tudo aquilo que gostaria.</p>
          <p>E eu poderia simplesmente deixar isso passar. Mas não consegui. Porque o teu aniversário é importante demais para mim.</p>
          <p>Então fiz isto. Juntei as nossas fotografias, as palavras que tantas vezes ficam presas dentro de mim e a música que me acompanhou quando comecei a perceber o que sentia.</p>
          <p>Quero que saibas que és profundamente importante para mim. Amo a mulher que és, a história que construímos e até tudo aquilo que ainda estamos a aprender. Não prometo uma história perfeita. Prometo verdade, presença e a vontade de continuar a escolher-nos.</p>
          <p>Que estes 29 anos te tragam a leveza, a coragem e a felicidade que mereces. E que, sempre que voltares a estas páginas, sintas o que tentei colocar em cada detalhe: tu és amada.</p>
          <p className="letter-sign">Com todo o meu amor,<br /><strong>Manuel</strong></p>
        </Reveal>
      </Chapter>

      <Chapter number={11} className="gift-chapter">
        <Reveal className="gift-copy">
          <span className="eyebrow">O meu presente</span>
          <h2>Eu queria poder oferecer-te flores.</h2>
          <p>Queria levar-te para jantar.<br />Queria comprar-te aquele presente que talvez tenhas imaginado.</p>
          <p>Mas desta vez não consegui fazer tudo isso.</p>
          <strong>Então ofereço-te aquilo que eu consigo criar.</strong>
        </Reveal>
        <div className="gift-symbols">
          {[{ n: "01", t: "Tempo" }, { n: "02", t: "Criatividade" }, { n: "03", t: "Memórias" }, { n: "04", t: "Amor" }].map((item, i) => <Reveal delay={i * 0.15} key={item.t}><span>{item.n}</span><strong>{item.t}</strong></Reveal>)}
        </div>
        <Reveal className="gift-ending"><p>Estas páginas. Estas memórias. Estas palavras.</p><strong>E todo o tempo que passei a criar isto pensando em ti.</strong></Reveal>
      </Chapter>

      <Chapter number={12} className={`surprise-chapter ${surprise ? "revealed" : ""}`}>
        <AnimatePresence mode="wait">
          {!surprise ? (
            <motion.div className="surprise-prompt" key="prompt" exit={{ opacity: 0, filter: "blur(18px)" }}>
              <Sparkles aria-hidden="true" />
              <h2>Ainda não acabou.</h2>
              <p>Existe uma última coisa que escondi aqui.</p>
              <Button variant="romance" size="story" onClick={() => setSurprise(true)}>Encontrar <Heart fill="currentColor" /></Button>
            </motion.div>
          ) : (
            <motion.div className="finale" key="finale" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
              <Stars />
              <div className="final-photo"><Portrait src={pPhoto} alt="Goreth, a minha Cinderela" /></div>
              <Reveal className="final-copy">
                <p>Se chegaste até aqui... então já sabes.</p>
                <h2>És a minha pessoa favorita.</h2>
                <div className="final-count"><span>29 anos.</span><span>10 fotografias.</span><span>1 música.</span><span>Milhares de sentimentos.</span><strong>E uma pessoa que eu amo.</strong></div>
                <h1>Feliz aniversário, Goreth.<br /><em>Minha Cinderela.</em></h1>
                <p>Que os teus 29 sejam incríveis.<br />E que eu possa continuar a fazer parte dos próximos capítulos da tua história.</p>
                <strong className="love">Eu amo-te. <Heart fill="currentColor" /></strong>
                <time>27.09.2026</time>
                <small>Feito à mão, com código e amor, para a Goreth.</small>
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </Chapter>

        </>
      )}
    </main>
  );
}