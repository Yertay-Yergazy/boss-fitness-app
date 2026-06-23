export function Card({
  variant = 'default',
  padding = 'md',
  goldAccent = false,
  interactive = false,
  children,
  onClick,
  style,
}) {
  const [hovered, setHovered] = React.useState(false);

  const variantMap = {
    default:  { background: '#1A1A1A', border: '1px solid rgba(201,162,39,0.22)' },
    elevated: { background: 'linear-gradient(135deg, #1A1A1A, #222)', border: '1px solid rgba(201,162,39,0.32)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' },
    hero:     { background: 'linear-gradient(135deg, #141414, #1C1C1C)', border: '1px solid rgba(201,162,39,0.5)', boxShadow: '0 0 20px rgba(201,162,39,0.1), 0 4px 24px rgba(0,0,0,0.6)' },
    danger:   { background: 'linear-gradient(135deg, #200808, #1A0505)', border: '1px solid rgba(227,36,43,0.45)', boxShadow: '0 0 16px rgba(227,36,43,0.1)' },
    subtle:   { background: '#161616', border: '1px solid rgba(255,255,255,0.06)' },
  };

  const paddingMap = {
    none: '0',
    sm:   '12px',
    md:   '20px',
    lg:   '28px',
    xl:   '36px',
  };

  const vr = variantMap[variant] || variantMap.default;
  const isClickable = !!(onClick || interactive);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => isClickable && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        padding: paddingMap[padding] || paddingMap.md,
        cursor: isClickable ? 'pointer' : 'default',
        transition: '200ms ease-out',
        transform: hovered && isClickable ? 'translateY(-1px)' : 'none',
        boxShadow: hovered && isClickable ? '0 8px 32px rgba(0,0,0,0.6), 0 0 16px rgba(201,162,39,0.08)' : undefined,
        ...vr,
        ...style,
      }}
    >
      {goldAccent && (
        <div style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: '3px',
          background: 'linear-gradient(180deg, #F5D77A 0%, #C9A227 100%)',
          borderRadius: '16px 0 0 16px',
        }} />
      )}
      {children}
    </div>
  );
}
