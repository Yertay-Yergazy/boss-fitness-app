export function ProgressBar({ current = 0, total = 12, showLabel = true, style }) {
  const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0;
  const remaining = Math.max(0, total - current);

  const urgency = remaining === 0 ? 'expired' : remaining <= 2 ? 'critical' : remaining <= 4 ? 'warning' : 'active';
  const colors = {
    active:   { bar: '#C9A227', glow: 'rgba(201,162,39,0.45)', text: '#F5D77A' },
    warning:  { bar: '#F0A500', glow: 'rgba(240,165,0,0.4)',   text: '#F0A500' },
    critical: { bar: '#E3242B', glow: 'rgba(227,36,43,0.45)',  text: '#E3242B' },
    expired:  { bar: '#555',    glow: 'transparent',           text: '#9A9A9A' },
  };
  const c = colors[urgency];

  return (
    <div style={{ ...style }}>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '7px' }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: '600', color: '#9A9A9A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Осталось занятий
          </span>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '14px', fontWeight: '800', color: c.text }}>
            {remaining}
            <span style={{ fontSize: '11px', color: '#9A9A9A', fontWeight: '500', marginLeft: '3px' }}>/ {total}</span>
          </span>
        </div>
      )}
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.09)', borderRadius: '99px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${c.bar}BB, ${c.bar})`,
          borderRadius: '99px',
          boxShadow: `0 0 8px ${c.glow}`,
          transition: '600ms ease-out',
        }} />
      </div>
    </div>
  );
}
