export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = true,
  icon,
  children,
  onClick,
  style,
}) {
  const [pressed, setPressed] = React.useState(false);

  const sizeMap = {
    sm: { height: '40px', padding: '0 16px', fontSize: '11px', borderRadius: '12px', gap: '6px' },
    md: { height: '52px', padding: '0 24px', fontSize: '13px', borderRadius: '16px', gap: '8px' },
    lg: { height: '60px', padding: '0 32px', fontSize: '15px', borderRadius: '18px', gap: '10px' },
  };

  const variantMap = {
    primary: {
      base:     { background: 'linear-gradient(135deg, #C9A227 0%, #F5D77A 55%, #C9A227 100%)', color: '#0A0A0A', border: 'none', boxShadow: '0 0 14px rgba(201,162,39,0.35)' },
      pressed:  { boxShadow: '0 0 28px rgba(201,162,39,0.65)' },
      disabled: { background: '#252525', color: '#444', border: 'none', boxShadow: 'none' },
    },
    secondary: {
      base:     { background: 'transparent', color: '#C9A227', border: '1.5px solid #C9A227', boxShadow: 'none' },
      pressed:  { background: 'rgba(201,162,39,0.07)', boxShadow: '0 0 16px rgba(201,162,39,0.2)' },
      disabled: { background: 'transparent', color: '#444', border: '1.5px solid #333', boxShadow: 'none' },
    },
    danger: {
      base:     { background: 'linear-gradient(135deg, #C81E1E 0%, #E3242B 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 0 12px rgba(227,36,43,0.3)' },
      pressed:  { boxShadow: '0 0 24px rgba(227,36,43,0.6)' },
      disabled: { background: '#252525', color: '#444', border: 'none', boxShadow: 'none' },
    },
    ghost: {
      base:     { background: 'transparent', color: '#E8E8E8', border: '1px solid rgba(255,255,255,0.18)', boxShadow: 'none' },
      pressed:  { background: 'rgba(255,255,255,0.06)' },
      disabled: { background: 'transparent', color: '#444', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'none' },
    },
  };

  const sz = sizeMap[size] || sizeMap.md;
  const vr = variantMap[variant] || variantMap.primary;
  const appliedStyle = disabled ? vr.disabled : { ...vr.base, ...(pressed ? vr.pressed : {}) };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '700',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        transition: 'all 150ms ease-out',
        transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
        outline: 'none',
        userSelect: 'none',
        flexShrink: 0,
        ...sz,
        ...appliedStyle,
        ...style,
      }}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
      {children}
    </button>
  );
}
