export function Badge({ status = 'active', size = 'md', dot = true, children, style }) {
  const variantMap = {
    active:   { background: 'rgba(201,162,39,0.13)', color: '#F5D77A', border: '1px solid rgba(201,162,39,0.38)' },
    expiring: { background: 'rgba(240,165,0,0.12)',  color: '#F0A500', border: '1px solid rgba(240,165,0,0.35)' },
    expired:  { background: 'rgba(227,36,43,0.12)',  color: '#E3242B', border: '1px solid rgba(227,36,43,0.35)' },
    inactive: { background: 'rgba(80,80,80,0.14)',   color: '#9A9A9A', border: '1px solid rgba(80,80,80,0.28)' },
    success:  { background: 'rgba(34,197,94,0.12)',  color: '#4ade80', border: '1px solid rgba(34,197,94,0.28)' },
    info:     { background: 'rgba(96,165,250,0.12)', color: '#93c5fd', border: '1px solid rgba(96,165,250,0.28)' },
  };

  const sizeMap = {
    sm: { fontSize: '9px',  padding: '3px 8px',  letterSpacing: '0.12em' },
    md: { fontSize: '10px', padding: '4px 10px', letterSpacing: '0.10em' },
    lg: { fontSize: '12px', padding: '5px 14px', letterSpacing: '0.08em' },
  };

  const vr = variantMap[status] || variantMap.inactive;
  const sz = sizeMap[size] || sizeMap.md;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      borderRadius: '9999px',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: '700',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...sz,
      ...vr,
      ...style,
    }}>
      {dot && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {children}
    </span>
  );
}
