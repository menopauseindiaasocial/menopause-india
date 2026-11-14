// Topic illustrations for blog cards, drawn in the brandmark's style (round heads, soft bodies).

// The figure from the logo: head with a bun, rounded body.
function Figure({ x, y, scale = 1, body = 'var(--rose)', head = 'var(--blush)' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="-15" cy="-58" r="9" fill={head} />
      <circle cx="0" cy="-42" r="20" fill={head} />
      <rect x="-23" y="-16" width="46" height="96" rx="22" fill={body} />
    </g>
  )
}

function Signs() {
  const marked = { 1: 'var(--rose)', 4: 'var(--blush)', 6: 'var(--rose)', 11: 'var(--blush)', 13: 'var(--rose-deep)' }
  return (
    <>
      <circle cx="330" cy="40" r="70" fill="var(--blush)" opacity="0.3" />
      <Figure x={95} y={120} />
      <rect x="165" y="38" width="160" height="130" rx="16" fill="#fff" />
      <rect x="165" y="38" width="160" height="30" rx="16" fill="var(--rose)" />
      <rect x="165" y="54" width="160" height="14" fill="var(--rose)" />
      <rect x="196" y="28" width="8" height="22" rx="4" fill="var(--ink)" />
      <rect x="286" y="28" width="8" height="22" rx="4" fill="var(--ink)" />
      {Array.from({ length: 15 }, (_, i) => (
        <circle
          key={i}
          cx={190 + (i % 5) * 28}
          cy={90 + Math.floor(i / 5) * 26}
          r="8"
          fill={marked[i] || 'var(--petal)'}
        />
      ))}
      <path d="M352 132c6 8 4 18-4 22a12 12 0 0 1-14-18c2 6 6 7 9 6-2-5 2-9 9-10Z" fill="var(--rose)" />
      <path d="M362 70a14 14 0 1 1-14-18 11 11 0 0 0 14 18Z" fill="var(--rose-deep)" />
      <circle cx="140" cy="40" r="5" fill="var(--rose)" />
      <circle cx="150" cy="184" r="4" fill="var(--rose-deep)" opacity="0.5" />
    </>
  )
}

function Stages() {
  const stops = [
    { x: 72, y: 164, r: 17, fill: 'var(--blush)', n: '1' },
    { x: 212, y: 104, r: 21, fill: 'var(--rose)', n: '2' },
    { x: 340, y: 52, r: 17, fill: 'var(--rose-deep)', n: '3' },
  ]
  return (
    <>
      <ellipse cx="90" cy="210" rx="140" ry="70" fill="var(--blush)" opacity="0.35" />
      <ellipse cx="330" cy="200" rx="150" ry="90" fill="var(--rose)" opacity="0.15" />
      <path d="M10 172C110 172 150 104 212 104S300 52 392 46" fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" />
      <path d="M10 172C110 172 150 104 212 104S300 52 392 46" fill="none" stroke="var(--rose)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      <rect x="210" y="34" width="4" height="50" rx="2" fill="var(--ink)" />
      <path d="M214 36h34l-9 11 9 11h-34Z" fill="var(--rose-deep)" />
      {stops.map((s) => (
        <g key={s.n}>
          <circle cx={s.x} cy={s.y} r={s.r + 5} fill="#fff" />
          <circle cx={s.x} cy={s.y} r={s.r} fill={s.fill} />
          <text x={s.x} y={s.y + 6} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff" fontFamily="inherit">
            {s.n}
          </text>
        </g>
      ))}
      <circle cx="110" cy="50" r="6" fill="var(--rose)" opacity="0.6" />
      <circle cx="300" cy="150" r="5" fill="var(--rose-deep)" opacity="0.4" />
    </>
  )
}

function BrainFog() {
  return (
    <>
      <circle cx="120" cy="190" r="90" fill="var(--blush)" opacity="0.3" />
      <Figure x={120} y={150} scale={1.25} />
      <g fill="#fff">
        <circle cx="200" cy="70" r="26" />
        <circle cx="232" cy="54" r="32" />
        <circle cx="270" cy="66" r="26" />
        <circle cx="250" cy="86" r="22" />
        <circle cx="214" cy="90" r="20" />
      </g>
      <circle cx="160" cy="88" r="5" fill="#fff" />
      <circle cx="174" cy="80" r="7" fill="#fff" />
      <text x="216" y="80" fontSize="30" fontWeight="700" fill="var(--rose)" fontFamily="inherit">?</text>
      <text x="246" y="74" fontSize="22" fontWeight="700" fill="var(--blush)" fontFamily="inherit">?</text>
      <g transform="rotate(-8 330 130)">
        <rect x="300" y="104" width="62" height="58" rx="8" fill="var(--rose)" opacity="0.9" />
        <rect x="312" y="120" width="36" height="5" rx="2.5" fill="#fff" />
        <rect x="312" y="132" width="26" height="5" rx="2.5" fill="#fff" />
      </g>
      <g transform="rotate(10 330 40)">
        <rect x="312" y="18" width="46" height="42" rx="7" fill="#fff" />
        <rect x="321" y="30" width="26" height="4" rx="2" fill="var(--blush)" />
        <rect x="321" y="40" width="18" height="4" rx="2" fill="var(--blush)" />
      </g>
    </>
  )
}

function Sleep() {
  return (
    <>
      <rect x="226" y="22" width="140" height="106" rx="14" fill="var(--ink)" />
      <rect x="292" y="22" width="6" height="106" fill="#fff" opacity="0.18" />
      <circle cx="262" cy="64" r="20" fill="#fff" />
      <circle cx="272" cy="57" r="18" fill="var(--ink)" />
      <circle cx="326" cy="48" r="3" fill="#fff" />
      <circle cx="344" cy="82" r="2.5" fill="#fff" />
      <circle cx="318" cy="104" r="2" fill="#fff" />
      <circle cx="248" cy="108" r="2.5" fill="#fff" />
      <rect x="28" y="96" width="16" height="84" rx="7" fill="var(--rose-deep)" />
      <rect x="36" y="136" width="210" height="40" rx="12" fill="#fff" />
      <ellipse cx="78" cy="132" rx="26" ry="12" fill="var(--petal)" />
      <circle cx="80" cy="118" r="16" fill="var(--blush)" />
      <circle cx="68" cy="106" r="7" fill="var(--blush)" />
      <path d="M96 124h134a14 14 0 0 1 14 14v8H96Z" fill="var(--rose)" />
      <text x="110" y="92" fontSize="20" fontWeight="700" fill="var(--rose-deep)" fontFamily="inherit">z</text>
      <text x="126" y="72" fontSize="15" fontWeight="700" fill="var(--rose)" fontFamily="inherit">z</text>
      <circle cx="326" cy="164" r="24" fill="#fff" />
      <circle cx="326" cy="164" r="24" fill="none" stroke="var(--rose)" strokeWidth="3" />
      <path d="M326 164v-15M326 164h11" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="326" cy="164" r="2.5" fill="var(--ink)" />
    </>
  )
}

function Checklist() {
  return (
    <>
      <circle cx="322" cy="150" r="78" fill="var(--blush)" opacity="0.28" />
      <Figure x={104} y={128} />
      <rect x="190" y="30" width="150" height="150" rx="16" fill="#fff" />
      <rect x="190" y="30" width="150" height="34" rx="16" fill="var(--rose)" />
      <rect x="190" y="48" width="150" height="16" fill="var(--rose)" />
      <text x="206" y="56" fontSize="20" fontWeight="700" fill="#fff" fontFamily="inherit">10</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(206 ${88 + i * 24})`}>
          <circle cx="6" cy="0" r="8" fill={i < 2 ? 'var(--rose)' : 'var(--petal)'} />
          {i < 2 && <path d="M2 0l3 3 5-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="24" y="-4" width="98" height="8" rx="4" fill="var(--petal)" />
        </g>
      ))}
      <circle cx="150" cy="44" r="5" fill="var(--rose)" opacity="0.6" />
    </>
  )
}

function Face({ cx, cy, r, fill }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--rose)" strokeWidth="3" opacity="0.4" />
      <circle cx={cx - 22} cy={cy - 8} r="4.5" fill="var(--ink)" />
      <circle cx={cx + 22} cy={cy - 8} r="4.5" fill="var(--ink)" />
      <path d={`M${cx - 20} ${cy + 22}q20 15 40 0`} stroke="var(--ink)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  )
}

function Skin() {
  return (
    <>
      <circle cx="300" cy="104" r="92" fill="var(--petal)" opacity="0.5" />
      <Face cx={158} cy={104} r={74} fill="var(--blush)" />
      <circle cx="136" cy="120" r="11" fill="var(--rose)" opacity="0.4" />
      <circle cx="180" cy="120" r="11" fill="var(--rose)" opacity="0.4" />
      <path d="M300 58c15 19 23 32 23 45a23 23 0 0 1-46 0c0-13 8-26 23-45Z" fill="var(--rose)" />
      <path d="M291 98a10 10 0 0 0 10 10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 130l3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" fill="var(--rose-deep)" />
      <circle cx="248" cy="40" r="5" fill="var(--rose)" opacity="0.6" />
    </>
  )
}

function Acne() {
  return (
    <>
      <circle cx="118" cy="120" r="88" fill="var(--blush)" opacity="0.3" />
      <Face cx={150} cy={104} r={76} fill="var(--petal)" />
      {[[120, 80], [182, 94], [128, 136], [178, 140], [152, 112]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 5 : 7} fill="var(--rose-deep)" opacity="0.75" />
      ))}
      <circle cx="300" cy="68" r="40" fill="#fff" opacity="0.45" />
      <circle cx="300" cy="68" r="40" fill="none" stroke="var(--rose)" strokeWidth="6" />
      <circle cx="300" cy="68" r="11" fill="var(--rose-deep)" opacity="0.6" />
      <rect x="330" y="96" width="48" height="12" rx="6" transform="rotate(45 330 96)" fill="var(--rose-deep)" />
    </>
  )
}

function Skincare() {
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4)
  return (
    <>
      <circle cx="86" cy="150" r="80" fill="var(--blush)" opacity="0.28" />
      <circle cx="322" cy="56" r="26" fill="var(--rose)" opacity="0.85" />
      {rays.map((a, i) => (
        <line key={i} x1={322 + Math.cos(a) * 34} y1={56 + Math.sin(a) * 34} x2={322 + Math.cos(a) * 44} y2={56 + Math.sin(a) * 44} stroke="var(--rose)" strokeWidth="3" strokeLinecap="round" />
      ))}
      <rect x="118" y="70" width="72" height="110" rx="16" fill="#fff" />
      <rect x="118" y="70" width="72" height="110" rx="16" fill="none" stroke="var(--rose)" strokeWidth="3" opacity="0.4" />
      <rect x="139" y="40" width="30" height="20" rx="6" fill="var(--rose-deep)" />
      <rect x="149" y="26" width="10" height="20" rx="4" fill="var(--rose-deep)" />
      <rect x="131" y="128" width="46" height="34" rx="8" fill="var(--petal)" />
      <rect x="228" y="96" width="54" height="84" rx="14" fill="var(--rose)" />
      <rect x="242" y="72" width="26" height="28" rx="6" fill="var(--ink)" />
      <rect x="250" y="112" width="10" height="46" rx="5" fill="#fff" opacity="0.55" />
    </>
  )
}

function Hair() {
  return (
    <>
      <circle cx="300" cy="150" r="78" fill="var(--blush)" opacity="0.28" />
      <circle cx="150" cy="80" r="40" fill="var(--petal)" />
      <path d="M112 74c-10 40-6 80 2 112" stroke="var(--rose)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M128 60c-16 44-14 94-6 128" stroke="var(--rose-deep)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M188 74c10 40 6 80-2 112" stroke="var(--rose)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M172 60c16 44 14 94 6 128" stroke="var(--rose-deep)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M234 120q20 10 10 42" stroke="var(--rose)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M262 150q16 8 8 36" stroke="var(--rose-deep)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55" />
      <g transform="rotate(16 322 90)">
        <rect x="296" y="58" width="60" height="18" rx="6" fill="#fff" stroke="var(--rose)" strokeWidth="2" />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} x={300 + i * 8} y="76" width="4" height="22" rx="2" fill="var(--rose)" />
        ))}
      </g>
    </>
  )
}

function Collagen() {
  return (
    <>
      <circle cx="132" cy="110" r="88" fill="var(--petal)" opacity="0.55" />
      <g transform="rotate(-35 200 100)">
        <rect x="150" y="78" width="100" height="44" rx="22" fill="var(--rose)" />
        <rect x="150" y="78" width="52" height="44" rx="22" fill="var(--blush)" />
        <line x1="202" y1="78" x2="202" y2="122" stroke="var(--rose-deep)" strokeWidth="2" opacity="0.5" />
      </g>
      <path d="M300 152a40 40 0 0 1 62 0" stroke="var(--rose)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.45" />
      <path d="M300 52l4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="var(--rose-deep)" />
      <circle cx="92" cy="58" r="6" fill="var(--rose)" opacity="0.6" />
      <circle cx="352" cy="98" r="5" fill="var(--blush)" />
    </>
  )
}

function Pigmentation() {
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4)
  return (
    <>
      <circle cx="312" cy="150" r="74" fill="var(--blush)" opacity="0.28" />
      <circle cx="70" cy="56" r="24" fill="var(--rose)" opacity="0.8" />
      {rays.map((a, i) => (
        <line key={i} x1={70 + Math.cos(a) * 30} y1={56 + Math.sin(a) * 30} x2={70 + Math.cos(a) * 40} y2={56 + Math.sin(a) * 40} stroke="var(--rose)" strokeWidth="3" strokeLinecap="round" />
      ))}
      <Face cx={212} cy={106} r={76} fill="var(--petal)" />
      {[[182, 84, 9], [240, 94, 12], [196, 134, 7], [246, 140, 8]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="var(--rose-deep)" opacity="0.5" />
      ))}
    </>
  )
}

function Foods() {
  return (
    <>
      <circle cx="304" cy="76" r="76" fill="var(--blush)" opacity="0.28" />
      <path d="M68 112h214a107 107 0 0 1-214 0Z" fill="var(--rose)" />
      <ellipse cx="175" cy="112" rx="107" ry="20" fill="var(--petal)" />
      <circle cx="128" cy="104" r="18" fill="var(--rose-deep)" />
      <circle cx="175" cy="98" r="20" fill="#fff" />
      <circle cx="175" cy="98" r="9" fill="var(--rose)" />
      <circle cx="150" cy="98" r="9" fill="var(--blush)" />
      <path d="M212 92c14-6 28 2 28 2s-12 11-26 8Z" fill="var(--rose-deep)" />
      <path d="M250 68c18-16 42-12 42-12s-2 25-20 33c-13 5-26-7-22-21Z" fill="var(--rose)" opacity="0.85" />
      <rect x="314" y="96" width="6" height="70" rx="3" fill="var(--ink)" />
      <rect x="307" y="96" width="4" height="26" rx="2" fill="var(--ink)" />
      <rect x="323" y="96" width="4" height="26" rx="2" fill="var(--ink)" />
    </>
  )
}

const art = {
  'signs-of-perimenopause-after-40': Signs,
  'perimenopause-vs-menopause': Stages,
  'menopause-brain-fog-after-40': BrainFog,
  'menopause-sleep-problems-after-40': Sleep,
  'menopause-in-indian-women': Checklist,
  'menopause-skin-changes-after-40': Skin,
  'acne-after-40': Acne,
  'skincare-routine-for-women-over-40': Skincare,
  'hair-fall-during-menopause': Hair,
  'collagen-supplements-after-40': Collagen,
  'pigmentation-dark-spots-after-40': Pigmentation,
  'foods-for-healthy-skin-hair-after-40': Foods,
}

export default function BlogArt({ slug, className }) {
  const Art = art[slug] || Stages
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <Art />
    </svg>
  )
}
