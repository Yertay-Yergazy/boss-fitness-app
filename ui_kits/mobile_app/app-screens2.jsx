(function() {
const { TRAINERS, GoldArcs, StatusBar, TabBar, SectionTitle, BackButton } = window;

function TrainersScreen({ nav }) {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{paddingTop:'8px',marginBottom:'18px'}}>
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'24px',letterSpacing:'.05em',color:'white',marginBottom:'2px'}}>ТРЕНЕРЫ</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A'}}>Выбери своего тренера</div>
        </div>
        {TRAINERS.map(t=>(
          <div key={t.id} onClick={()=>nav('trainer-detail',{trainer:t})} style={{display:'flex',alignItems:'center',gap:'14px',padding:'14px 16px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.15)',borderRadius:'16px',marginBottom:'10px',cursor:'pointer'}}>
            <div style={{width:'64px',height:'64px',borderRadius:'12px',overflow:'hidden',border:'2px solid rgba(201,162,39,0.55)',flexShrink:0}}><img src={t.image} alt={t.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/></div>
            <div style={{flex:1}}>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'14px',color:'#E8E8E8',marginBottom:'3px'}}>{t.name}</div>
              <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',marginBottom:'6px'}}>{t.specialty}</div>
              <div style={{display:'flex',gap:'1px'}}>{Array.from({length:5},(_,j)=><span key={j} style={{color:j<Math.floor(t.rating)?'#C9A227':'#333',fontSize:'10px'}}>★</span>)}</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}><path d="M9 18l6-6-6-6" stroke="rgba(201,162,39,0.5)" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </div>
        ))}
      </div>
      <TabBar active="trainers" onNav={nav} />
    </div>
  );
}

function TrainerProfileScreen({ nav, navData={} }) {
  const t = navData.trainer || TRAINERS[0];
  const [booked, setBooked] = React.useState(null);
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto'}}>
        <div style={{position:'relative',height:'255px',overflow:'hidden',flexShrink:0}}>
          <img src={t.image} alt={t.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,transparent 40%,rgba(0,0,0,0.88) 100%)'}}/>
          <div style={{position:'absolute',top:0,left:0,right:0,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 20px 0'}}>
            <BackButton onBack={()=>nav('trainers')} />
          </div>
          <div style={{position:'absolute',bottom:'16px',left:'20px',right:'20px'}}>
            <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'26px',letterSpacing:'.04em',color:'white',lineHeight:1,marginBottom:'3px'}}>{t.name}</div>
            <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#C9A227',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:'600'}}>{t.specialty}</div>
          </div>
        </div>
        <div style={{padding:'18px 18px 28px'}}>
          <div style={{display:'flex',gap:'12px',marginBottom:'20px'}}>
            {[{v:t.rating,l:'РЕЙТИНГ',u:null},{v:t.exp,l:'ЛЕТ ОПЫТА'},{v:'120+',l:'КЛИЕНТОВ'}].map((s,i)=>(
              <div key={i} style={{flex:1,background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.2)',borderRadius:'12px',padding:'12px 8px',textAlign:'center'}}>
                {i===0&&<div style={{display:'flex',justifyContent:'center',gap:'1px',marginBottom:'1px'}}>{Array.from({length:5},(_,j)=><span key={j} style={{color:j<Math.floor(t.rating)?'#C9A227':'#333',fontSize:'10px'}}>★</span>)}</div>}
                <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'22px',color:'#F5D77A',lineHeight:1}}>{s.v}</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'8px',color:'#9A9A9A',letterSpacing:'.06em',textTransform:'uppercase',marginTop:'3px'}}>{s.l}</div>
              </div>
            ))}
          </div>
          <SectionTitle>О ТРЕНЕРЕ</SectionTitle>
          <div style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'#9A9A9A',lineHeight:1.7,marginBottom:'18px'}}>{t.bio}</div>
          <SectionTitle>СЕРТИФИКАТЫ</SectionTitle>
          <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'22px'}}>
            {t.certs.map((cert,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 14px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.18)',borderRadius:'10px'}}>
                <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'rgba(201,162,39,0.12)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 7l-11 11-5-5" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#E8E8E8',fontWeight:'500'}}>{cert}</span>
              </div>
            ))}
          </div>
          <SectionTitle>СПЕЦИАЛИЗАЦИЯ</SectionTitle>
          <div style={{display:'flex',flexDirection:'column',gap:'6px',marginBottom:'22px'}}>
            {t.specs.map((sp,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#9A9A9A'}}>
                <span style={{width:'4px',height:'4px',borderRadius:'50%',background:'#C9A227',flexShrink:0}}/>
                {sp}
              </div>
            ))}
          </div>
          <SectionTitle>КОНТАКТЫ & РАСПИСАНИЕ</SectionTitle>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'22px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 14px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.18)',borderRadius:'10px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#C9A227" strokeWidth="1.5"/></svg>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',color:'#9A9A9A',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:'2px'}}>ТЕЛЕФОН</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'13px',color:'#E8E8E8',fontWeight:'600'}}>{t.phone}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 14px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.18)',borderRadius:'10px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#C9A227" strokeWidth="1.5"/><path d="M3 9h18M8 2v4M16 2v4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',color:'#9A9A9A',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:'2px'}}>РАСПИСАНИЕ</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'13px',color:'#E8E8E8',fontWeight:'600'}}>{t.schedule}</div>
              </div>
            </div>
          </div>
          <SectionTitle>ЗАПИСЬ</SectionTitle>
          {booked&&<div style={{padding:'11px',background:'rgba(201,162,39,0.1)',border:'1px solid rgba(201,162,39,0.4)',borderRadius:'12px',fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#F5D77A',textAlign:'center',marginBottom:'10px'}}>✓ Запись подтверждена! Ожидай SMS.</div>}
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <div onClick={()=>setBooked('group')} style={{padding:'15px',background:booked?'#1A1A1A':'linear-gradient(135deg,#C9A227,#F5D77A)',borderRadius:'14px',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',border:booked?'1px solid rgba(201,162,39,0.3)':'none',boxShadow:booked?'none':'0 0 16px rgba(201,162,39,0.3)'}}>
              <div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.06em',color:booked?'#C9A227':'#0A0A0A'}}>ГРУППОВОЕ ЗАНЯТИЕ</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:booked?'#9A9A9A':'rgba(0,0,0,0.5)',marginTop:'1px'}}>До 8 человек</div>
              </div>
              <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'17px',color:booked?'#F5D77A':'#0A0A0A'}}>{t.priceGroup.toLocaleString()} ₸</div>
            </div>
            <div onClick={()=>setBooked('ind')} style={{padding:'15px',background:'#1A1A1A',border:'1.5px solid rgba(201,162,39,0.45)',borderRadius:'14px',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
              <div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.06em',color:'#C9A227'}}>ИНДИВИДУАЛЬНОЕ</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A',marginTop:'1px'}}>Персональная программа</div>
              </div>
              <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'17px',color:'#F5D77A'}}>{t.priceInd.toLocaleString()} ₸</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileScreen({ nav }) {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'16px',marginBottom:'22px',position:'relative',overflow:'hidden',paddingBottom:'16px'}}>
          <GoldArcs style={{top:'-40px',left:'50%',transform:'translateX(-50%)',opacity:.6}} />
          <div style={{width:'88px',height:'88px',borderRadius:'50%',border:'3px solid #C9A227',background:'#1A1A1A',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Anton','Impact',sans-serif",fontSize:'30px',color:'#C9A227',marginBottom:'12px',boxShadow:'0 0 20px rgba(201,162,39,0.25)',position:'relative',zIndex:1}}>АИ</div>
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'21px',letterSpacing:'.04em',color:'white',marginBottom:'3px',position:'relative',zIndex:1}}>АЛЕКСЕЙ ИВАНОВ</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#9A9A9A',position:'relative',zIndex:1}}>+7 777 123 4567</div>
        </div>
        <div style={{background:'linear-gradient(135deg,#141414,#1A1A1A)',border:'1px solid rgba(201,162,39,0.4)',borderRadius:'16px',padding:'16px',marginBottom:'18px'}}>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'8px'}}>ТЕКУЩИЙ ТАРИФ</div>
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'19px',letterSpacing:'.04em',background:'linear-gradient(135deg,#C9A227,#F5D77A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',marginBottom:'6px'}}>СТАНДАРТ · БЕЗЛИМИТ</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'12px',color:'#E8E8E8'}}>Действует до <span style={{color:'#F5D77A',fontWeight:'700'}}>23.07.2026</span></div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <button onClick={()=>nav('plans')} style={{padding:'15px',background:'linear-gradient(135deg,#C9A227,#F5D77A)',border:'none',borderRadius:'14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',color:'#0A0A0A',cursor:'pointer',boxShadow:'0 0 16px rgba(201,162,39,0.3)'}}>ПРОДЛИТЬ АБОНЕМЕНТ</button>
          <button style={{padding:'15px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.3)',borderRadius:'14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',color:'#C9A227',cursor:'pointer'}}>ИСТОРИЯ АБОНЕМЕНТОВ</button>
          <button style={{padding:'15px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.3)',borderRadius:'14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',color:'#C9A227',cursor:'pointer'}}>НАСТРОЙКИ</button>
          <button style={{padding:'15px',background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.3)',borderRadius:'14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',letterSpacing:'.07em',textTransform:'uppercase',color:'#C81E1E',cursor:'pointer'}}>ВЫХОД</button>
        </div>
      </div>
      <TabBar active="profile" onNav={nav} />
    </div>
  );
}

function SubscriptionPlansScreen({ nav }) {
  const plans = [
    {name:'12 ЗАНЯТИЙ',icon:'○',price:35000,desc:'Месячный пакет',color:'#C9A227'},
    {name:'БЕЗЛИМИТ',icon:'∞',price:50000,desc:'Неограниченные тренировки',color:'#F5D77A'},
    {name:'РАЗОВОЕ',icon:'●',price:5000,desc:'Одно посещение',color:'#9A9A9A'},
  ];
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',background:'#0A0A0A'}}>
      <StatusBar />
      <div style={{flex:1,overflowY:'auto',padding:'0 18px 16px'}}>
        <div style={{paddingTop:'8px',marginBottom:'18px'}}>
          <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'24px',letterSpacing:'.05em',color:'white',marginBottom:'2px'}}>АБОНЕМЕНТЫ</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A'}}>Выбери свой тариф</div>
        </div>
        {plans.map((p,i)=>(
          <div key={i} onClick={()=>nav('home')} style={{background:'#1A1A1A',border:'1px solid rgba(201,162,39,0.22)',borderRadius:'16px',padding:'18px',marginBottom:'12px',cursor:'pointer',transition:'all 200ms'}}>
            <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'12px'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(201,162,39,0.1)',border:`2px solid ${p.color}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Anton','Impact',sans-serif",fontSize:'26px',color:p.color}}>{p.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'14px',color:'#E8E8E8',marginBottom:'2px'}}>{p.name}</div>
                <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A'}}>{p.desc}</div>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'24px',color:'#F5D77A'}}>{p.price.toLocaleString()} ₸</div>
              <button style={{padding:'8px 16px',background:p.color==='#F5D77A'?'linear-gradient(135deg,#C9A227,#F5D77A)':'transparent',border:`1.5px solid ${p.color}`,borderRadius:'10px',fontFamily:"'Montserrat',sans-serif",fontSize:'11px',fontWeight:'700',color:p.color==='#F5D77A'?'#0A0A0A':p.color,cursor:'pointer'}}>КУПИТЬ</button>
            </div>
          </div>
        ))}
      </div>
      <TabBar active="home" onNav={nav} />
    </div>
  );
}

function App() {
  const [screen, setScreen] = React.useState('home');
  const [navData, setNavData] = React.useState({});
  const nav = (s, d={}) => { setScreen(s); setNavData(d); };
  
  const screens = {
    home:           (<HomeScreen nav={nav} />),
    qr:             (<QRScreen nav={nav} />),
    keys:           (<KeyScreen nav={nav} />),
    success:        (<SuccessScreen nav={nav} navData={navData} />),
    trainers:       (<TrainersScreen nav={nav} />),
    'trainer-detail': (<TrainerProfileScreen nav={nav} navData={navData} />),
    sessions:       (<SessionsScreen nav={nav} />),
    profile:        (<ProfileScreen nav={nav} />),
    plans:          (<SubscriptionPlansScreen nav={nav} />),
  };
  return screens[screen];
}

Object.assign(window, { TrainersScreen, TrainerProfileScreen, ProfileScreen, SubscriptionPlansScreen, App });
})();
