(function() {
const { TRAINERS, QRCodeSVG, GoldArcs, StatusBar, TabBar, SectionTitle, BackButton, QAIcons } = window;

function HomeScreen({ nav }) {
  const actions = [
    { id:'trainers', icon:'book',   label:'Записаться\nк тренеру', gold:true },
    { id:'sessions', icon:'list',   label:'Мои\nзанятия',          gold:false },
    { id:'trainers', icon:'people', label:'Тренеры',               gold:false },
    { id:'plans',    icon:'card',   label:'Купить\nабонемент',      gold:true },
  ];
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'6px',marginBottom:'18px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'11px'}}>
            <div style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid rgba(201,162,39,0.6)',background:'#1A1A1A',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',color:'#C9A227',fontSize:'14px',flexShrink:0}}>АИ</div>
            <div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',fontWeight:'500',letterSpacing:'.07em',textTransform:'uppercase'}}>Добро пожаловать,</div>
              <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'20px',letterSpacing:'.05em',color:'white',lineHeight:1}}>АЛЕКСЕЙ</div>
            </div>
          </div>
          <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.22)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
        </div>

        <div style={{position:'relative',borderRadius:'20px',background:'linear-gradient(135deg,#141414,#1C1C1C)',border:'1px solid rgba(201,162,39,0.42)',boxShadow:'0 0 20px rgba(201,162,39,0.08),0 8px 32px rgba(0,0,0,0.6)',padding:'20px',overflow:'hidden',marginBottom:'14px'}}>
          <GoldArcs style={{top:'-80px',right:'-80px'}} />
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'12px',position:'relative',zIndex:1}}>
            <div>
              <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'19px',letterSpacing:'.04em',background:'linear-gradient(135deg,#C9A227,#F5D77A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1.1,marginBottom:'3px'}}>СТАНДАРТ · БЕЗЛИМИТ</div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'600',color:'#9A9A9A',letterSpacing:'.14em'}}>BOSS FITNESS · BF-2024-001</div>
            </div>
            <span style={{display:'inline-flex',alignItems:'center',gap:'3px',padding:'3px 9px',borderRadius:'99px',background:'rgba(201,162,39,0.12)',color:'#F5D77A',border:'1px solid rgba(201,162,39,0.33)',fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'700',letterSpacing:'.12em',textTransform:'uppercase',flexShrink:0,marginLeft:'8px'}}>● АКТИВЕН</span>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',position:'relative',zIndex:1}}>
            <div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',fontWeight:'500',textTransform:'uppercase',letterSpacing:'.04em',marginBottom:'2px'}}>Действует до</div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'16px',fontWeight:'800',color:'#F5D77A'}}>23.07.2026</div>
            </div>
            <div style={{padding:'7px',background:'white',borderRadius:'10px',border:'2px solid #C9A227',boxShadow:'0 0 10px rgba(201,162,39,0.25)'}}>
              <QRCodeSVG size={56}/>
            </div>
          </div>
        </div>

        <div onClick={()=>nav('qr')} style={{width:'100%',height:'56px',background:'linear-gradient(135deg,#C9A227,#F5D77A)',borderRadius:'18px',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',cursor:'pointer',boxShadow:'0 0 24px rgba(201,162,39,0.45)',marginBottom:'20px'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8"/><rect x="13" y="13" width="4" height="4" rx="1" fill="#0A0A0A"/><rect x="19" y="13" width="2" height="2" rx=".5" fill="#0A0A0A"/><rect x="13" y="19" width="2" height="2" rx=".5" fill="#0A0A0A"/><rect x="17" y="17" width="4" height="4" rx="1" fill="#0A0A0A"/></svg>
          <span style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'18px',letterSpacing:'.1em',color:'#0A0A0A'}}>ЧЕК-ИН</span>
        </div>

        <SectionTitle>БЫСТРЫЕ ДЕЙСТВИЯ</SectionTitle>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'22px'}}>
          {actions.map((a,i)=>(
            <div key={i} onClick={()=>nav(a.id)} style={{background:'#1A1A1A',border:`1px solid ${a.gold?'rgba(201,162,39,0.3)':'rgba(255,255,255,0.07)'}`,borderRadius:'14px',padding:'16px 14px',cursor:'pointer',display:'flex',flexDirection:'column',gap:'10px'}}>
              {QAIcons[a.icon](a.gold?'#C9A227':'#9A9A9A')}
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',fontWeight:'700',color:'#E8E8E8',lineHeight:1.35,whiteSpace:'pre-wrap'}}>{a.label}</div>
            </div>
          ))}
        </div>

        <SectionTitle>БЛИЖАЙШАЯ ЗАПИСЬ</SectionTitle>
        <div onClick={()=>nav('trainer-detail',{trainer:TRAINERS[0]})} style={{display:'flex',alignItems:'center',gap:'13px',padding:'14px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.22)',borderRadius:'16px',cursor:'pointer'}}>
          <div style={{width:'52px',height:'52px',borderRadius:'12px',overflow:'hidden',border:'1.5px solid rgba(201,162,39,0.5)',flexShrink:0}}><img src="../../assets/coach-1.png" alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/></div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'14px',color:'#E8E8E8',marginBottom:'1px'}}>{TRAINERS[0].name}</div>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A',marginBottom:'5px'}}>Ср, 25 июня · 10:00</div>
            <span style={{display:'inline-flex',alignItems:'center',gap:'3px',padding:'2px 8px',borderRadius:'99px',background:'rgba(201,162,39,0.1)',color:'#F5D77A',border:'1px solid rgba(201,162,39,0.28)',fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'700',letterSpacing:'.1em'}}>ИНДИВИДУАЛЬНАЯ</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}><path d="M9 18l6-6-6-6" stroke="rgba(201,162,39,0.5)" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
      </div>
      <TabBar active="home" onNav={nav} />
    </div>
  );
}

function QRScreen({ nav }) {
  const [phase, setPhase] = React.useState('idle');
  React.useEffect(()=>{
    if(phase==='scanning'){ const t=setTimeout(()=>setPhase('checking'),1800); return()=>clearTimeout(t); }
    if(phase==='checking'){ const t=setTimeout(()=>nav('keys'),1200); return()=>clearTimeout(t); }
  },[phase]);
  const cornerStyle = (pos) => {
    const s={position:'absolute',width:'28px',height:'28px',borderColor:'#C9A227',borderStyle:'solid',borderWidth:'0'};
    if(pos==='tl'){s.top=0;s.left=0;s.borderTopWidth='3px';s.borderLeftWidth='3px';s.borderTopLeftRadius='6px';}
    if(pos==='tr'){s.top=0;s.right=0;s.borderTopWidth='3px';s.borderRightWidth='3px';s.borderTopRightRadius='6px';}
    if(pos==='bl'){s.bottom=0;s.left=0;s.borderBottomWidth='3px';s.borderLeftWidth='3px';s.borderBottomLeftRadius='6px';}
    if(pos==='br'){s.bottom=0;s.right=0;s.borderBottomWidth='3px';s.borderRightWidth='3px';s.borderBottomRightRadius='6px';}
    return s;
  };
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <style>{`
        @keyframes bfScanLine{0%{top:8px;opacity:1}45%{opacity:1}50%{top:calc(100% - 8px);opacity:.7}100%{top:8px;opacity:1}}
        @keyframes bfCornerGlow{0%,100%{filter:drop-shadow(0 0 4px rgba(201,162,39,0.5))}50%{filter:drop-shadow(0 0 12px rgba(201,162,39,0.9))}}
      `}</style>
      <StatusBar />
      <div style={{flex:1,display:'flex',flexDirection:'column',padding:'0 20px 0'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'8px',marginBottom:'12px'}}>
          <BackButton onBack={()=>nav('home')} />
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'18px',letterSpacing:'.06em',color:'white'}}>ЧЕК-ИН</div>
          <div style={{width:'50px'}}/>
        </div>

        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',paddingTop:'16px',gap:'12px'}}>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',fontWeight:'600',color:'#9A9A9A',letterSpacing:'.1em',textTransform:'uppercase',textAlign:'center'}}>
            {phase==='idle'    && 'НАВЕДИ НА QR-КОД У ВХОДА'}
            {phase==='scanning'&& 'СКАНИРУЕМ...'}
            {phase==='checking'&& '● ПРОВЕРЯЕМ АБОНЕМЕНТ...'}
          </div>

          <div style={{position:'relative',width:'170px',height:'170px'}}>
            <div style={{position:'absolute',inset:0,borderRadius:'16px',background: phase==='idle'?'#0E0E0E':'rgba(201,162,39,0.04)',border:'1px solid rgba(201,162,39,0.15)',overflow:'hidden',transition:'background 400ms'}}>
              {phase!=='idle' && (
                <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',opacity:.18}}>
                  <QRCodeSVG size={160}/>
                </div>
              )}
              {phase==='scanning' && (
                <div style={{position:'absolute',left:'8px',right:'8px',height:'2px',background:'linear-gradient(90deg,transparent,#F5D77A,transparent)',borderRadius:'1px',animation:'bfScanLine 1.6s ease-in-out infinite',boxShadow:'0 0 8px rgba(245,215,122,0.8)'}}/>
              )}
              {phase==='checking' && (
                <div style={{position:'absolute',inset:0,background:'rgba(201,162,39,0.06)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none"><path d="M10 26l10 10L38 14" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
            </div>
            <div style={{...cornerStyle('tl'),animation:'bfCornerGlow 2s ease-in-out infinite'}}/>
            <div style={{...cornerStyle('tr'),animation:'bfCornerGlow 2s ease-in-out infinite',animationDelay:'0.5s'}}/>
            <div style={{...cornerStyle('bl'),animation:'bfCornerGlow 2s ease-in-out infinite',animationDelay:'1s'}}/>
            <div style={{...cornerStyle('br'),animation:'bfCornerGlow 2s ease-in-out infinite',animationDelay:'1.5s'}}/>
          </div>

          <div style={{height:'26px',transition:'opacity 300ms',opacity:phase==='checking'?1:0}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'4px 14px',borderRadius:'99px',background:'rgba(201,162,39,0.12)',border:'1px solid rgba(201,162,39,0.3)'}}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="#C9A227"/></svg>
              <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',fontWeight:'700',color:'#F5D77A',letterSpacing:'.08em'}}>BOSS FITNESS · ГЛАВНЫЙ ЗАЛ</span>
            </div>
          </div>

          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#555',textAlign:'center',lineHeight:1.7,marginTop:'-6px'}}>
            QR-код размещён на стойке ресепшена<br/>и у турникета на входе
          </div>
        </div>
      </div>
      <div style={{padding:'12px 20px 16px',background:'#0A0A0A',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div
          onClick={phase==='idle'?()=>setPhase('scanning'):undefined}
          style={{height:'56px',borderRadius:'16px',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',
            fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',
            background:phase==='idle'?'linear-gradient(135deg,#C9A227,#F5D77A)':'rgba(201,162,39,0.08)',
            color:phase==='idle'?'#0A0A0A':'#C9A227',
            border:phase==='idle'?'none':'1.5px solid rgba(201,162,39,0.3)',
            cursor:phase==='idle'?'pointer':'default',
            boxShadow:phase==='idle'?'0 0 24px rgba(201,162,39,0.4)':'none',
            transition:'all 250ms ease-out'}}>
          {phase==='idle' && <><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M23 7V1h-6M1 7V1h6M23 17v6h-6M1 17v6h6" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>СКАНИРОВАТЬ QR</>}
          {phase==='scanning' && '● Идёт сканирование...'}
          {phase==='checking' && '✓ QR распознан'}
        </div>
      </div>
    </div>
  );
}

function KeyScreen({ nav }) {
  const [sel, setSel] = React.useState(null);
  const taken = [3,7,11,15,21,27];
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{display:'flex',alignItems:'center',paddingTop:'8px',marginBottom:'10px'}}><BackButton onBack={()=>nav('qr')} /></div>
        <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'26px',letterSpacing:'.05em',color:'white',marginBottom:'4px'}}>ВЫБЕРИ КЛЮЧ</div>
        <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#9A9A9A',marginBottom:'22px'}}>Ключ закреплён за тобой на время тренировки</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:'10px',marginBottom:'20px'}}>
          {Array.from({length:32},(_,i)=>i+1).map(n=>{
            const taken_=taken.includes(n), isSel=sel===n;
            return (<div key={n} onClick={taken_?undefined:()=>setSel(n)} style={{height:'52px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',cursor:taken_?'not-allowed':'pointer',transition:'150ms ease-out',transform:isSel?'scale(1.1)':'scale(1)',background:isSel?'linear-gradient(135deg,#C9A227,#F5D77A)':taken_?'rgba(28,28,28,0.8)':'transparent',border:isSel?'1.5px solid #F5D77A':taken_?'1.5px solid rgba(50,50,50,0.5)':'1.5px solid rgba(201,162,39,0.55)',color:isSel?'#0A0A0A':taken_?'#333':'#C9A227',boxShadow:isSel?'0 0 16px rgba(201,162,39,0.5)':'none'}}>{n}</div>);
          })}
        </div>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',marginBottom:'8px',fontFamily:"'Montserrat',sans-serif",fontSize:'11px',fontWeight:'600',letterSpacing:'.06em',color:'#9A9A9A'}}>
          <span><span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',border:'1px solid rgba(201,162,39,0.55)',marginRight:'5px',verticalAlign:'middle'}}/>Свободен</span>
          <span><span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'rgba(28,28,28,0.8)',marginRight:'5px',verticalAlign:'middle'}}/>Занят</span>
          <span><span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'linear-gradient(135deg,#C9A227,#F5D77A)',marginRight:'5px',verticalAlign:'middle'}}/>Ваш</span>
        </div>
      </div>
      <div style={{padding:'12px 18px 16px',background:'#0A0A0A',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div onClick={sel?()=>nav('success',{keyNumber:sel}):undefined} style={{height:'56px',borderRadius:'16px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'14px',letterSpacing:'.07em',textTransform:'uppercase',background:sel?'linear-gradient(135deg,#C9A227,#F5D77A)':'#1E1E1E',color:sel?'#0A0A0A':'#444',cursor:sel?'pointer':'not-allowed',boxShadow:sel?'0 0 20px rgba(201,162,39,0.4)':'none',transition:'200ms ease-out'}}>
          {sel?`ПОДТВЕРДИТЬ — КЛЮЧ №${sel}`:'ВЫБЕРИ КЛЮЧ'}
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ nav, navData={} }) {
  const [cnt, setCnt] = React.useState(3);
  React.useEffect(()=>{ const t=setInterval(()=>setCnt(c=>{ if(c<=1){clearInterval(t);nav('home');return 0;} return c-1; }),1000); return ()=>clearInterval(t); },[]);
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A',alignItems:'center',justifyContent:'center',padding:'40px 24px'}}>
      <style>{`@keyframes bfPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.75;transform:scale(1.06)}}`}</style>
      <div style={{position:'relative',marginBottom:'28px'}}>
        <div style={{width:'100px',height:'100px',borderRadius:'50%',background:'rgba(201,162,39,0.1)',border:'2px solid rgba(201,162,39,0.4)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 40px rgba(201,162,39,0.25)',animation:'bfPulse 2s infinite'}}>
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none"><path d="M10 26l10 10L38 14" stroke="#C9A227" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{position:'absolute',inset:'-10px',borderRadius:'50%',border:'1px solid rgba(201,162,39,0.14)',animation:'bfPulse 2s infinite',animationDelay:'300ms'}}/>
      </div>
      <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'26px',letterSpacing:'.05em',color:'white',textAlign:'center',marginBottom:'5px'}}>ЗАНЯТИЕ ПОДТВЕРЖДЕНО</div>
      <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'13px',color:'#9A9A9A',marginBottom:'28px'}}>Добро пожаловать!</div>
      <div style={{background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.3)',borderRadius:'18px',padding:'20px 32px',textAlign:'center',marginBottom:'24px',width:'100%',maxWidth:'250px'}}>
        <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'6px'}}>ВАШ КЛЮЧ</div>
        <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'52px',letterSpacing:'.05em',background:'linear-gradient(135deg,#C9A227,#F5D77A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1}}>№{navData.keyNumber||14}</div>
        <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A',marginTop:'3px'}}>{new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
      </div>
      <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#555',textAlign:'center',marginBottom:'16px'}}>Переход на главную через {cnt} сек...</div>
      <div onClick={()=>nav('home')} style={{padding:'13px 28px',background:'transparent',border:'1.5px solid rgba(201,162,39,0.4)',borderRadius:'14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',color:'#C9A227',cursor:'pointer'}}>НА ГЛАВНУЮ</div>
    </div>
  );
}

function SessionsScreen({ nav }) {
  const sessions = [
    {date:'23 июня 2026',time:'09:15',key:8, type:'САМОСТ.',   trainer:null},
    {date:'21 июня 2026',time:'11:00',key:14,type:'ИНДИВИД.',  trainer:'Низами'},
    {date:'19 июня 2026',time:'09:30',key:5, type:'САМОСТ.',   trainer:null},
    {date:'17 июня 2026',time:'18:00',key:22,type:'ГРУПП.',    trainer:'Светлана'},
    {date:'14 июня 2026',time:'10:00',key:3, type:'САМОСТ.',   trainer:null},
    {date:'12 июня 2026',time:'11:30',key:17,type:'ИНДИВИД.',  trainer:'Низами'},
  ];
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{paddingTop:'8px',marginBottom:'18px'}}>
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'24px',letterSpacing:'.05em',color:'white',marginBottom:'2px'}}>ИСТОРИЯ</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A'}}>Посещений в этом месяце: <span style={{color:'#F5D77A',fontWeight:'700'}}>14</span></div>
        </div>
        {sessions.map((s,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px 14px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.15)',borderRadius:'14px',marginBottom:'8px'}}>
            <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(201,162,39,0.1)',border:'1.5px solid rgba(201,162,39,0.4)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 7l-11 11-5-5" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'13px',fontWeight:'700',color:'#E8E8E8',marginBottom:'1px'}}>{s.date} · {s.time}</div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A'}}>{s.trainer||'Самостоятельная тренировка'}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'3px',flexShrink:0}}>
              <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'700',color:s.type==='САМОСТ.'?'#9A9A9A':'#F5D77A',letterSpacing:'.1em'}}>{s.type}</span>
              <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#555'}}>Ключ №{s.key}</span>
            </div>
          </div>
        ))}
      </div>
      <TabBar active="sessions" onNav={nav} />
    </div>
  );
}

Object.assign(window, { HomeScreen, QRScreen, KeyScreen, SuccessScreen, SessionsScreen });
})();
