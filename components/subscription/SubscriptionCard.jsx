function QRCodeInner({ size = 130 }) {
  const cell = size / 21;
  const mods = [];
  const addFinder = (sr, sc) => {
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
      if (r===0||r===6||c===0||c===6||r>=2&&r<=4&&c>=2&&c<=4) mods.push([sr+r, sc+c]);
    }
  };
  addFinder(0,0); addFinder(0,14); addFinder(14,0);
  [[6,8],[6,10],[6,12],[8,6],[10,6],[12,6]].forEach(m=>mods.push(m));
  [[8,8],[8,11],[8,14],[8,16],[8,18],[9,9],[9,13],[9,17],
   [10,8],[10,12],[10,15],[10,19],[11,9],[11,11],[11,16],[11,18],
   [12,8],[12,10],[12,13],[12,17],[13,9],[13,12],[13,15],[13,19],
   [14,10],[14,13],[14,16],[15,9],[15,11],[15,14],[15,18],
   [16,10],[16,12],[16,15],[16,19],[17,9],[17,13],[17,16],
   [18,10],[18,14],[18,17],[19,11],[19,15],[20,10],[20,13]
  ].forEach(m=>mods.push(m));
  return (
    <svg width={size} height={size} style={{ display:'block', borderRadius: 3 }}>
      <rect width={size} height={size} fill="white"/>
      {mods.map(([r,c],i) => (
        <rect key={i} x={c*cell+0.5} y={r*cell+0.5} width={cell-0.5} height={cell-0.5} fill="#080808"/>
      ))}
    </svg>
  );
}

export function SubscriptionCard({
  type = 'unlimited',
  status = 'active',
  planName = 'СТАНДАРТ · БЕЗЛИМИТ',
  dateTo = '23.07.2026',
  sessionsUsed = 5,
  sessionsTotal = 12,
  clientName = 'ALEXEI',
  clientId = 'BF-2024-001',
  showQR = true,
  onRenew,
  style,
}) {
  const isExpired = status === 'expired';
  const isExpiring = status === 'expiring';
  const accent = isExpired ? '#E3242B' : '#C9A227';
  const accentLight = isExpired ? '#F04040' : '#F5D77A';
  const borderAlpha = isExpired ? 0.5 : 0.45;
  const statusLabel = { active:'АКТИВЕН', expiring:'ИСТЕКАЕТ', expired:'ПРОСРОЧЕН' }[status];
  const statusColor = { active:'#F5D77A', expiring:'#F0A500', expired:'#E3242B' }[status];
  const statusBg    = { active:'rgba(201,162,39,0.12)', expiring:'rgba(240,165,0,0.12)', expired:'rgba(227,36,43,0.12)' }[status];

  return (
    <div style={{
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      background: isExpired
        ? 'linear-gradient(135deg, #1A0505 0%, #100303 100%)'
        : 'linear-gradient(135deg, #141414 0%, #1C1C1C 60%, #111 100%)',
      border: `1px solid rgba(${isExpired?'227,36,43':'201,162,39'},${borderAlpha})`,
      boxShadow: `0 0 24px rgba(${isExpired?'227,36,43':'201,162,39'},0.10), 0 8px 32px rgba(0,0,0,0.6)`,
      padding: '22px 20px 20px',
      ...style,
    }}>
      {/* Arc decoration */}
      <svg style={{position:'absolute',top:-40,right:-40,opacity:0.12,pointerEvents:'none'}} width="240" height="240" viewBox="0 0 240 240">
        <circle cx="120" cy="120" r="100" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="8 5"/>
        <circle cx="120" cy="120" r="78"  fill="none" stroke={accentLight} strokeWidth="1" strokeDasharray="4 8"/>
        <circle cx="120" cy="120" r="120" fill="none" stroke={accent} strokeWidth="0.75" strokeDasharray="12 4"/>
      </svg>

      {/* Header */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'14px',position:'relative',zIndex:1}}>
        <div>
          <div style={{
            fontFamily:"'Anton','Impact',sans-serif",
            fontSize:'21px',
            letterSpacing:'0.04em',
            background:`linear-gradient(135deg,${accent},${accentLight})`,
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            lineHeight:1.1, marginBottom:'3px',
          }}>{planName}</div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'600',color:'#9A9A9A',letterSpacing:'0.14em',textTransform:'uppercase'}}>
            BOSS FITNESS · {clientId}
          </div>
        </div>
        <span style={{
          display:'inline-flex',alignItems:'center',gap:'4px',
          padding:'3px 9px',borderRadius:'99px',
          background:statusBg,color:statusColor,
          border:`1px solid ${statusColor}44`,
          fontFamily:"'Montserrat',sans-serif",fontSize:'9px',fontWeight:'700',
          letterSpacing:'0.12em',textTransform:'uppercase',whiteSpace:'nowrap',
        }}>
          ● {statusLabel}
        </span>
      </div>

      {/* Duration / sessions */}
      <div style={{position:'relative',zIndex:1,marginBottom:'14px'}}>
        {type === 'unlimited' ? (
          <div style={{display:'flex',gap:'6px',alignItems:'baseline'}}>
            <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'11px',color:'#9A9A9A',fontWeight:'500',textTransform:'uppercase',letterSpacing:'0.04em'}}>
              {isExpired?'Истёк':'Действует до'}
            </span>
            <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'16px',fontWeight:'800',color:isExpired?'#E3242B':'#F5D77A'}}>
              {dateTo}
            </span>
          </div>
        ) : (
          <div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px'}}>
              <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',fontWeight:'600',letterSpacing:'0.07em',textTransform:'uppercase'}}>Осталось</span>
              <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:'14px',fontWeight:'800',color:accentLight}}>
                {sessionsTotal-sessionsUsed} <span style={{fontSize:'10px',color:'#9A9A9A',fontWeight:'500'}}>/ {sessionsTotal}</span>
              </span>
            </div>
            <div style={{height:'5px',background:'rgba(255,255,255,0.08)',borderRadius:'99px',overflow:'hidden'}}>
              <div style={{height:'100%',width:`${(sessionsUsed/sessionsTotal)*100}%`,background:`linear-gradient(90deg,${accent},${accentLight})`,borderRadius:'99px',boxShadow:`0 0 8px ${accent}80`}}/>
            </div>
          </div>
        )}
      </div>

      {/* QR */}
      {showQR && !isExpired && (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',position:'relative',zIndex:1}}>
          <div style={{padding:'10px',background:'white',borderRadius:'12px',border:`2px solid ${accent}`,boxShadow:`0 0 14px ${accent}44`}}>
            <QRCodeInner size={120}/>
          </div>
          <div style={{fontFamily:"'Montserrat',sans-serif",fontSize:'10px',color:'#9A9A9A',letterSpacing:'0.04em',textAlign:'center'}}>
            {clientName} · Покажи на входе для сканирования
          </div>
        </div>
      )}

      {/* Expired CTA */}
      {isExpired && (
        <div onClick={onRenew} style={{
          marginTop:'14px',position:'relative',zIndex:1,
          padding:'14px',background:'linear-gradient(135deg,#C81E1E,#E3242B)',
          borderRadius:'14px',textAlign:'center',
          fontFamily:"'Montserrat',sans-serif",fontWeight:'700',fontSize:'13px',
          letterSpacing:'0.07em',textTransform:'uppercase',color:'white',
          cursor:'pointer',boxShadow:'0 0 16px rgba(227,36,43,0.4)',
        }}>
          ПРОДЛИТЬ АБОНЕМЕНТ
        </div>
      )}
    </div>
  );
}
