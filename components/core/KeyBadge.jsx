export function KeyBadge({ number, state = 'free', onClick, style }) {
  const [pressed, setPressed] = React.useState(false);

  const stateMap = {
    free:     { background: 'transparent',                   border: '1.5px solid rgba(201,162,39,0.6)', color: '#C9A227',  cursor: 'pointer' },
    taken:    { background: 'rgba(30,30,30,0.7)',            border: '1.5px solid rgba(60,60,60,0.4)',   color: '#383838',  cursor: 'not-allowed' },
    selected: { background: 'linear-gradient(135deg,#C9A227,#F5D77A)', border: '1.5px solid #F5D77A', color: '#0A0A0A', cursor: 'pointer', boxShadow: '0 0 16px rgba(201,162,39,0.55)' },
  };

  const st = stateMap[state] || stateMap.free;

  return (
    <div
      onClick={state !== 'taken' ? onClick : undefined}
      onPointerDown={() => state === 'free' && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        userSelect: 'none',
        transition: '150ms ease-out',
        transform: pressed ? 'scale(0.88)' : 'scale(1)',
        ...st,
        ...style,
      }}
    >
      {number}
    </div>
  );
}
