export function Avatar({ src, name = '', size = 'md', border = 'gold', style }) {
  const sizeMap = {
    xs:   { width: '28px', height: '28px', fontSize: '10px' },
    sm:   { width: '36px', height: '36px', fontSize: '13px' },
    md:   { width: '48px', height: '48px', fontSize: '16px' },
    lg:   { width: '72px', height: '72px', fontSize: '24px' },
    xl:   { width: '96px', height: '96px', fontSize: '32px' },
    '2xl':{ width: '120px',height: '120px',fontSize: '40px' },
  };

  const borderMap = {
    gold:   '2px solid rgba(201,162,39,0.65)',
    strong: '2.5px solid #C9A227',
    white:  '2px solid rgba(255,255,255,0.25)',
    none:   'none',
  };

  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const sz = sizeMap[size] || sizeMap.md;

  return (
    <div style={{
      ...sz,
      border: borderMap[border] || borderMap.gold,
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#1A1A1A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...style,
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        : <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: '700', color: '#C9A227', fontSize: sz.fontSize }}>
            {initials || '?'}
          </span>
      }
    </div>
  );
}
