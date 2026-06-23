const TRAINERS = [
  { id:1, name:'Низами',  specialty:'БОДИБИЛДИНГ · СИЛОВЫЕ', rating:5.0, image:'../../assets/coach-1.png',
    bio:'МС РК по бодибилдингу. 20 лет тренерского стажа. Абсолютный чемпион Казахстана, Кыргызстана, Алматы и Средней Азии по бодибилдингу. Чемпион Средней Азии по становой тяге. Многократный призер международных турниров (Mr. Olympia Amateur). Дипломированный тренер КАСиТ. Нутрициолог.',
    certs:['МС РК по бодибилдингу','Диплом КАСиТ — Казахская Академия Спорта и Туризма','Тренер национального уровня','Нутрициолог'], 
    exp:'20', schedule:'Пн / Ср / Пт · Вт / Чт / Сб — 14:00–23:00',
    phone:'8 775 900 00 79',
    specs:['Набор веса и мышечный рельеф','Силовые показатели и ОФП','ЛФК и реабилитация после травм','Кардиотренинг','Подготовка к соревнованиям','Онлайн-сопровождение','Спортивное питание и БАДы'],
    priceGroup:20000, priceInd:30000 },
  { id:2, name:'Светлана', specialty:'ФИТНЕС · ПОХУДЕНИЕ · ЛФК', rating:4.9, image:'../../assets/coach-2.png',
    bio:'Тренер с индивидуальным подходом к каждому клиенту. Специализируется на похудении, наборе мышечной массы, восстановлении после родов и тренировках для беременных. Работает с грыжами и проблемами со спиной. Консультирует по спортивному питанию.',
    certs:['Сертифицированный персональный тренер','Нутрициолог — спортивное питание','Тренировки для беременных и послеродовое восстановление'],
    exp:'5+', schedule:'Пн / Ср / Пт',
    phone:'+7 777 319 66 11',
    specs:['Похудение и жиросжигание','Набор мышечной массы','Тренировки для беременных','Восстановление после родов','Грыжи и проблемы со спиной','Детские тренировки','Коррекция фигуры и осанки','Спортивное питание'],
    priceGroup:20000, priceInd:25000 },
];

function QRCodeSVG({ size=130 }) {
  const c = size/21, m = [];
  const f = (sr,sc) => { for(let r=0;r<7;r++) for(let cc=0;cc<7;cc++) if(r===0||r===6||cc===0||cc===6||r>=2&&r<=4&&cc>=2&&cc<=4) m.push([sr+r,sc+cc]); };
  f(0,0); f(0,14); f(14,0);
  [[6,8],[6,10],[6,12],[8,6],[10,6],[12,6],[8,8],[8,11],[8,14],[8,16],[8,18],[9,9],[9,13],[9,17],
   [10,8],[10,12],[10,15],[10,19],[11,9],[11,11],[11,16],[11,18],[12,8],[12,10],[12,13],[12,17],
   [13,9],[13,12],[13,15],[13,19],[14,10],[14,13],[14,16],[15,9],[15,11],[15,14],[15,18],
   [16,10],[16,12],[16,15],[16,19],[17,9],[17,13],[17,16],[18,10],[18,14],[18,17],[19,11],[19,15],[20,10],[20,13]
  ].forEach(v=>m.push(v));
  return (<svg width={size} height={size} style={{display:'block',borderRadius:3}}><rect width={size} height={size} fill="white"/>{m.map(([r,cc],i)=><rect key={i} x={cc*c+.5} y={r*c+.5} width={c-.5} height={c-.5} fill="#080808"/>)}</svg>);
}

function GoldArcs({ style={} }) {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" style={{position:'absolute',pointerEvents:'none',...style}}>
      <circle cx="140" cy="140" r="120" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="8 5" opacity=".18"/>
      <circle cx="140" cy="140" r="96"  fill="none" stroke="#F5D77A" strokeWidth="1"   strokeDasharray="4 8" opacity=".12"/>
      <circle cx="140" cy="140" r="142" fill="none" stroke="#C9A227" strokeWidth=".75" strokeDasharray="14 4" opacity=".10"/>
      <path d="M 50 140 A 90 90 0 0 1 140 50" fill="none" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" opacity=".22"/>
      <path d="M 230 140 A 90 90 0 0 1 140 230" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity=".14"/>
    </svg>
  );
}

function StatusBar() {
  return (
    <div style={{height:'50px',display:'flex',alignItems:'flex-end',justifyContent:'space-between',padding:'0 22px 8px',flexShrink:0,position:'relative',zIndex:50}}>
      <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'14px',fontWeight:'600',color:'#E8E8E8'}}>9:41</span>
      <div style={{position:'absolute',top:'10px',left:'50%',transform:'translateX(-50%)',width:'118px',height:'32px',background:'#000',borderRadius:'18px',zIndex:1}}/>
      <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
        <svg width="17" height="12" viewBox="0 0 17 12"><rect x="0" y="8" width="3" height="4" rx=".5" fill="#E8E8E8"/><rect x="4.5" y="5.5" width="3" height="6.5" rx=".5" fill="#E8E8E8"/><rect x="9" y="3" width="3" height="9" rx=".5" fill="#E8E8E8"/><rect x="13.5" y="0" width="3" height="12" rx=".5" fill="#E8E8E8" opacity=".3"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11"><path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#E8E8E8"/><path d="M5.2 6.8A3.5 3.5 0 0 1 10.8 6.8" stroke="#E8E8E8" strokeWidth="1.2" strokeLinecap="round"/><path d="M2.8 4.4A6.5 6.5 0 0 1 13.2 4.4" stroke="#E8E8E8" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="2.5" stroke="#E8E8E8" strokeWidth="1"/><rect x="22.5" y="3.5" width="2" height="5" rx="1" fill="#E8E8E8" opacity=".4"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill="#E8E8E8"/></svg>
      </div>
    </div>
  );
}

const TABS = [
  { id:'home',     label:'Главная',  p:(c)=><><path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke={c} strokeWidth="1.5"/></> },
  { id:'trainers', label:'Тренеры',  p:(c)=><><circle cx="9" cy="7" r="4" stroke={c} strokeWidth="1.5"/><path d="M3 21c0-4 2.7-6 6-6s6 2 6 6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M16 3a4 4 0 0 1 0 8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M21 21c0-3-1.5-5-4-6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></> },
  { id:'sessions', label:'История',  p:(c)=><><rect x="3" y="4" width="18" height="18" rx="3" stroke={c} strokeWidth="1.5"/><path d="M3 9h18M8 2v4M16 2v4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></> },
  { id:'profile',  label:'Профиль', p:(c)=><><circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></> },
];

function TabBar({ active, onNav }) {
  return (
    <div style={{height:'68px',display:'flex',justifyContent:'space-around',alignItems:'flex-start',paddingTop:'8px',borderTop:'1px solid rgba(255,255,255,0.08)',background:'#0A0A0A',flexShrink:0}}>
      {TABS.map(t=>(
        <div key={t.id} onClick={()=>onNav(t.id)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'5px',cursor:'pointer',padding:'6px 0'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{transition:'all 200ms'}}>{t.p(active===t.id?'#C9A227':'#9A9A9A')}</svg>
          <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'600',color:active===t.id?'#C9A227':'#9A9A9A',letterSpacing:'.06em',textTransform:'uppercase'}}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',fontWeight:'700',color:'#9A9A9A',letterSpacing:'.14em',textTransform:'uppercase',marginBottom:'10px'}}>
      {children}
    </div>
  );
}

function BackButton({ onBack }) {
  return (
    <div onClick={onBack} style={{width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
}

const QAIcons = {
  book:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
  list:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
  people:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="4" stroke={c} strokeWidth="1.5"/><path d="M3 21c0-4 2.7-6 6-6s6 2 6 6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M16 3a4 4 0 0 1 0 8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M21 21c0-3-1.5-5-4-6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>),
  card:(c)=>(<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke={c} strokeWidth="1.5"/><path d="M2 10h20" stroke={c} strokeWidth="1.5"/></svg>),
};

Object.assign(window, { TRAINERS, QRCodeSVG, GoldArcs, StatusBar, TabBar, SectionTitle, BackButton, QAIcons });
