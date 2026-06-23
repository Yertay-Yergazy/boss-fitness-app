export function TrainerCard({
  name = 'Тренер',
  specialty = 'Фитнес',
  rating = 4.8,
  imageSrc,
  variant = 'list',
  onClick,
  style,
}) {
  const [hovered, setHovered] = React.useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 0.5 < rating);

  if (variant === 'grid') {
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? '#202020' : '#1A1A1A',
          border: `1px solid ${hovered ? 'rgba(201,162,39,0.5)' : 'rgba(201,162,39,0.2)'}`,
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: '200ms ease-out',
          transform: hovered ? 'translateY(-2px)' : 'none',
          boxShadow: hovered ? '0 12px 28px rgba(0,0,0,0.55)' : '0 4px 12px rgba(0,0,0,0.3)',
          ...style,
        }}
      >
        <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: '#111', position: 'relative' }}>
          {imageSrc
            ? <img src={imageSrc} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat',sans-serif", fontWeight: '700', color: '#C9A227', fontSize: '32px' }}>{name[0]}</div>
          }
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }} />
        </div>
        <div style={{ padding: '14px' }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: '700', fontSize: '15px', color: '#E8E8E8', marginBottom: '2px' }}>{name}</div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#9A9A9A', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '8px' }}>{specialty}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {stars.map((filled, i) => <span key={i} style={{ color: filled ? '#C9A227' : '#333', fontSize: '13px' }}>★</span>)}
            <span style={{ marginLeft: '5px', fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#9A9A9A', fontWeight: '600' }}>{rating}</span>
          </div>
        </div>
      </div>
    );
  }

  // list variant
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 16px',
        background: hovered ? '#202020' : '#1A1A1A',
        border: `1px solid ${hovered ? 'rgba(201,162,39,0.48)' : 'rgba(201,162,39,0.2)'}`,
        borderRadius: '14px',
        cursor: 'pointer',
        transition: '200ms ease-out',
        transform: hovered ? 'translateX(2px)' : 'none',
        ...style,
      }}
    >
      <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(201,162,39,0.6)', flexShrink: 0, background: '#222' }}>
        {imageSrc
          ? <img src={imageSrc} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat',sans-serif", fontWeight: '700', color: '#C9A227', fontSize: '18px' }}>{name[0]}</div>
        }
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: '700', fontSize: '15px', color: '#E8E8E8', marginBottom: '2px' }}>{name}</div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#9A9A9A', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px' }}>{specialty}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {stars.map((filled, i) => <span key={i} style={{ color: filled ? '#C9A227' : '#333', fontSize: '12px' }}>★</span>)}
          <span style={{ marginLeft: '4px', fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#9A9A9A', fontWeight: '600' }}>{rating}</span>
        </div>
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3l5 5-5 5" stroke="rgba(201,162,39,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
