/* @ds-bundle: {"format":3,"namespace":"BOSSFITNESSDesignSystem_d95146","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"KeyBadge","sourcePath":"components/core/KeyBadge.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"SubscriptionCard","sourcePath":"components/subscription/SubscriptionCard.jsx"},{"name":"TrainerCard","sourcePath":"components/trainers/TrainerCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"5f1d3fd40412","components/core/Badge.jsx":"f6fd1afa0bd1","components/core/Button.jsx":"3f8ea13e428e","components/core/Card.jsx":"a786745ee24e","components/core/KeyBadge.jsx":"e6bee23150ea","components/core/ProgressBar.jsx":"ca8207be4706","components/subscription/SubscriptionCard.jsx":"025c99a3e127","components/trainers/TrainerCard.jsx":"301a1654a11b","ui_kits/mobile_app/app-screens1.jsx":"9366d7c59ca8","ui_kits/mobile_app/app-screens2.jsx":"b22295ac3f3e","ui_kits/mobile_app/app-shared.jsx":"95eb1e12f563"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BOSSFITNESSDesignSystem_d95146 = window.BOSSFITNESSDesignSystem_d95146 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = '',
  size = 'md',
  border = 'gold',
  style
}) {
  const sizeMap = {
    xs: {
      width: '28px',
      height: '28px',
      fontSize: '10px'
    },
    sm: {
      width: '36px',
      height: '36px',
      fontSize: '13px'
    },
    md: {
      width: '48px',
      height: '48px',
      fontSize: '16px'
    },
    lg: {
      width: '72px',
      height: '72px',
      fontSize: '24px'
    },
    xl: {
      width: '96px',
      height: '96px',
      fontSize: '32px'
    },
    '2xl': {
      width: '120px',
      height: '120px',
      fontSize: '40px'
    }
  };
  const borderMap = {
    gold: '2px solid rgba(201,162,39,0.65)',
    strong: '2.5px solid #C9A227',
    white: '2px solid rgba(255,255,255,0.25)',
    none: 'none'
  };
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const sz = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...sz,
      border: borderMap[border] || borderMap.gold,
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#1A1A1A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: '700',
      color: '#C9A227',
      fontSize: sz.fontSize
    }
  }, initials || '?'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  status = 'active',
  size = 'md',
  dot = true,
  children,
  style
}) {
  const variantMap = {
    active: {
      background: 'rgba(201,162,39,0.13)',
      color: '#F5D77A',
      border: '1px solid rgba(201,162,39,0.38)'
    },
    expiring: {
      background: 'rgba(240,165,0,0.12)',
      color: '#F0A500',
      border: '1px solid rgba(240,165,0,0.35)'
    },
    expired: {
      background: 'rgba(227,36,43,0.12)',
      color: '#E3242B',
      border: '1px solid rgba(227,36,43,0.35)'
    },
    inactive: {
      background: 'rgba(80,80,80,0.14)',
      color: '#9A9A9A',
      border: '1px solid rgba(80,80,80,0.28)'
    },
    success: {
      background: 'rgba(34,197,94,0.12)',
      color: '#4ade80',
      border: '1px solid rgba(34,197,94,0.28)'
    },
    info: {
      background: 'rgba(96,165,250,0.12)',
      color: '#93c5fd',
      border: '1px solid rgba(96,165,250,0.28)'
    }
  };
  const sizeMap = {
    sm: {
      fontSize: '9px',
      padding: '3px 8px',
      letterSpacing: '0.12em'
    },
    md: {
      fontSize: '10px',
      padding: '4px 10px',
      letterSpacing: '0.10em'
    },
    lg: {
      fontSize: '12px',
      padding: '5px 14px',
      letterSpacing: '0.08em'
    }
  };
  const vr = variantMap[status] || variantMap.inactive;
  const sz = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = true,
  icon,
  children,
  onClick,
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const sizeMap = {
    sm: {
      height: '40px',
      padding: '0 16px',
      fontSize: '11px',
      borderRadius: '12px',
      gap: '6px'
    },
    md: {
      height: '52px',
      padding: '0 24px',
      fontSize: '13px',
      borderRadius: '16px',
      gap: '8px'
    },
    lg: {
      height: '60px',
      padding: '0 32px',
      fontSize: '15px',
      borderRadius: '18px',
      gap: '10px'
    }
  };
  const variantMap = {
    primary: {
      base: {
        background: 'linear-gradient(135deg, #C9A227 0%, #F5D77A 55%, #C9A227 100%)',
        color: '#0A0A0A',
        border: 'none',
        boxShadow: '0 0 14px rgba(201,162,39,0.35)'
      },
      pressed: {
        boxShadow: '0 0 28px rgba(201,162,39,0.65)'
      },
      disabled: {
        background: '#252525',
        color: '#444',
        border: 'none',
        boxShadow: 'none'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: '#C9A227',
        border: '1.5px solid #C9A227',
        boxShadow: 'none'
      },
      pressed: {
        background: 'rgba(201,162,39,0.07)',
        boxShadow: '0 0 16px rgba(201,162,39,0.2)'
      },
      disabled: {
        background: 'transparent',
        color: '#444',
        border: '1.5px solid #333',
        boxShadow: 'none'
      }
    },
    danger: {
      base: {
        background: 'linear-gradient(135deg, #C81E1E 0%, #E3242B 100%)',
        color: '#FFFFFF',
        border: 'none',
        boxShadow: '0 0 12px rgba(227,36,43,0.3)'
      },
      pressed: {
        boxShadow: '0 0 24px rgba(227,36,43,0.6)'
      },
      disabled: {
        background: '#252525',
        color: '#444',
        border: 'none',
        boxShadow: 'none'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: '#E8E8E8',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: 'none'
      },
      pressed: {
        background: 'rgba(255,255,255,0.06)'
      },
      disabled: {
        background: 'transparent',
        color: '#444',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'none'
      }
    }
  };
  const sz = sizeMap[size] || sizeMap.md;
  const vr = variantMap[variant] || variantMap.primary;
  const appliedStyle = disabled ? vr.disabled : {
    ...vr.base,
    ...(pressed ? vr.pressed : {})
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onPointerDown: () => !disabled && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    disabled: disabled,
    style: {
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
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'default',
  padding = 'md',
  goldAccent = false,
  interactive = false,
  children,
  onClick,
  style
}) {
  const [hovered, setHovered] = React.useState(false);
  const variantMap = {
    default: {
      background: '#1A1A1A',
      border: '1px solid rgba(201,162,39,0.22)'
    },
    elevated: {
      background: 'linear-gradient(135deg, #1A1A1A, #222)',
      border: '1px solid rgba(201,162,39,0.32)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
    },
    hero: {
      background: 'linear-gradient(135deg, #141414, #1C1C1C)',
      border: '1px solid rgba(201,162,39,0.5)',
      boxShadow: '0 0 20px rgba(201,162,39,0.1), 0 4px 24px rgba(0,0,0,0.6)'
    },
    danger: {
      background: 'linear-gradient(135deg, #200808, #1A0505)',
      border: '1px solid rgba(227,36,43,0.45)',
      boxShadow: '0 0 16px rgba(227,36,43,0.1)'
    },
    subtle: {
      background: '#161616',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  };
  const paddingMap = {
    none: '0',
    sm: '12px',
    md: '20px',
    lg: '28px',
    xl: '36px'
  };
  const vr = variantMap[variant] || variantMap.default;
  const isClickable = !!(onClick || interactive);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => isClickable && setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      padding: paddingMap[padding] || paddingMap.md,
      cursor: isClickable ? 'pointer' : 'default',
      transition: '200ms ease-out',
      transform: hovered && isClickable ? 'translateY(-1px)' : 'none',
      boxShadow: hovered && isClickable ? '0 8px 32px rgba(0,0,0,0.6), 0 0 16px rgba(201,162,39,0.08)' : undefined,
      ...vr,
      ...style
    }
  }, goldAccent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '3px',
      background: 'linear-gradient(180deg, #F5D77A 0%, #C9A227 100%)',
      borderRadius: '16px 0 0 16px'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyBadge.jsx
try { (() => {
function KeyBadge({
  number,
  state = 'free',
  onClick,
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const stateMap = {
    free: {
      background: 'transparent',
      border: '1.5px solid rgba(201,162,39,0.6)',
      color: '#C9A227',
      cursor: 'pointer'
    },
    taken: {
      background: 'rgba(30,30,30,0.7)',
      border: '1.5px solid rgba(60,60,60,0.4)',
      color: '#383838',
      cursor: 'not-allowed'
    },
    selected: {
      background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
      border: '1.5px solid #F5D77A',
      color: '#0A0A0A',
      cursor: 'pointer',
      boxShadow: '0 0 16px rgba(201,162,39,0.55)'
    }
  };
  const st = stateMap[state] || stateMap.free;
  return /*#__PURE__*/React.createElement("div", {
    onClick: state !== 'taken' ? onClick : undefined,
    onPointerDown: () => state === 'free' && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
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
      ...style
    }
  }, number);
}
Object.assign(__ds_scope, { KeyBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function ProgressBar({
  current = 0,
  total = 12,
  showLabel = true,
  style
}) {
  const pct = total > 0 ? Math.min(100, current / total * 100) : 0;
  const remaining = Math.max(0, total - current);
  const urgency = remaining === 0 ? 'expired' : remaining <= 2 ? 'critical' : remaining <= 4 ? 'warning' : 'active';
  const colors = {
    active: {
      bar: '#C9A227',
      glow: 'rgba(201,162,39,0.45)',
      text: '#F5D77A'
    },
    warning: {
      bar: '#F0A500',
      glow: 'rgba(240,165,0,0.4)',
      text: '#F0A500'
    },
    critical: {
      bar: '#E3242B',
      glow: 'rgba(227,36,43,0.45)',
      text: '#E3242B'
    },
    expired: {
      bar: '#555',
      glow: 'transparent',
      text: '#9A9A9A'
    }
  };
  const c = colors[urgency];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '10px',
      fontWeight: '600',
      color: '#9A9A9A',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043D\u044F\u0442\u0438\u0439"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '14px',
      fontWeight: '800',
      color: c.text
    }
  }, remaining, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: '#9A9A9A',
      fontWeight: '500',
      marginLeft: '3px'
    }
  }, "/ ", total))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      background: 'rgba(255,255,255,0.09)',
      borderRadius: '99px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: `linear-gradient(90deg, ${c.bar}BB, ${c.bar})`,
      borderRadius: '99px',
      boxShadow: `0 0 8px ${c.glow}`,
      transition: '600ms ease-out'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/subscription/SubscriptionCard.jsx
try { (() => {
function QRCodeInner({
  size = 130
}) {
  const cell = size / 21;
  const mods = [];
  const addFinder = (sr, sc) => {
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
      if (r === 0 || r === 6 || c === 0 || c === 6 || r >= 2 && r <= 4 && c >= 2 && c <= 4) mods.push([sr + r, sc + c]);
    }
  };
  addFinder(0, 0);
  addFinder(0, 14);
  addFinder(14, 0);
  [[6, 8], [6, 10], [6, 12], [8, 6], [10, 6], [12, 6]].forEach(m => mods.push(m));
  [[8, 8], [8, 11], [8, 14], [8, 16], [8, 18], [9, 9], [9, 13], [9, 17], [10, 8], [10, 12], [10, 15], [10, 19], [11, 9], [11, 11], [11, 16], [11, 18], [12, 8], [12, 10], [12, 13], [12, 17], [13, 9], [13, 12], [13, 15], [13, 19], [14, 10], [14, 13], [14, 16], [15, 9], [15, 11], [15, 14], [15, 18], [16, 10], [16, 12], [16, 15], [16, 19], [17, 9], [17, 13], [17, 16], [18, 10], [18, 14], [18, 17], [19, 11], [19, 15], [20, 10], [20, 13]].forEach(m => mods.push(m));
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    fill: "white"
  }), mods.map(([r, c], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: c * cell + 0.5,
    y: r * cell + 0.5,
    width: cell - 0.5,
    height: cell - 0.5,
    fill: "#080808"
  })));
}
function SubscriptionCard({
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
  style
}) {
  const isExpired = status === 'expired';
  const isExpiring = status === 'expiring';
  const accent = isExpired ? '#E3242B' : '#C9A227';
  const accentLight = isExpired ? '#F04040' : '#F5D77A';
  const borderAlpha = isExpired ? 0.5 : 0.45;
  const statusLabel = {
    active: 'АКТИВЕН',
    expiring: 'ИСТЕКАЕТ',
    expired: 'ПРОСРОЧЕН'
  }[status];
  const statusColor = {
    active: '#F5D77A',
    expiring: '#F0A500',
    expired: '#E3242B'
  }[status];
  const statusBg = {
    active: 'rgba(201,162,39,0.12)',
    expiring: 'rgba(240,165,0,0.12)',
    expired: 'rgba(227,36,43,0.12)'
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      background: isExpired ? 'linear-gradient(135deg, #1A0505 0%, #100303 100%)' : 'linear-gradient(135deg, #141414 0%, #1C1C1C 60%, #111 100%)',
      border: `1px solid rgba(${isExpired ? '227,36,43' : '201,162,39'},${borderAlpha})`,
      boxShadow: `0 0 24px rgba(${isExpired ? '227,36,43' : '201,162,39'},0.10), 0 8px 32px rgba(0,0,0,0.6)`,
      padding: '22px 20px 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      top: -40,
      right: -40,
      opacity: 0.12,
      pointerEvents: 'none'
    },
    width: "240",
    height: "240",
    viewBox: "0 0 240 240"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "100",
    fill: "none",
    stroke: accent,
    strokeWidth: "1.5",
    strokeDasharray: "8 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "78",
    fill: "none",
    stroke: accentLight,
    strokeWidth: "1",
    strokeDasharray: "4 8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "120",
    fill: "none",
    stroke: accent,
    strokeWidth: "0.75",
    strokeDasharray: "12 4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '14px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Anton','Impact',sans-serif",
      fontSize: '21px',
      letterSpacing: '0.04em',
      background: `linear-gradient(135deg,${accent},${accentLight})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.1,
      marginBottom: '3px'
    }
  }, planName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '9px',
      fontWeight: '600',
      color: '#9A9A9A',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "BOSS FITNESS \xB7 ", clientId)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '3px 9px',
      borderRadius: '99px',
      background: statusBg,
      color: statusColor,
      border: `1px solid ${statusColor}44`,
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '9px',
      fontWeight: '700',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, "\u25CF ", statusLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      marginBottom: '14px'
    }
  }, type === 'unlimited' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '11px',
      color: '#9A9A9A',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, isExpired ? 'Истёк' : 'Действует до'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '16px',
      fontWeight: '800',
      color: isExpired ? '#E3242B' : '#F5D77A'
    }
  }, dateTo)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '10px',
      color: '#9A9A9A',
      fontWeight: '600',
      letterSpacing: '0.07em',
      textTransform: 'uppercase'
    }
  }, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '14px',
      fontWeight: '800',
      color: accentLight
    }
  }, sessionsTotal - sessionsUsed, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: '#9A9A9A',
      fontWeight: '500'
    }
  }, "/ ", sessionsTotal))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '5px',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '99px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${sessionsUsed / sessionsTotal * 100}%`,
      background: `linear-gradient(90deg,${accent},${accentLight})`,
      borderRadius: '99px',
      boxShadow: `0 0 8px ${accent}80`
    }
  })))), showQR && !isExpired && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px',
      background: 'white',
      borderRadius: '12px',
      border: `2px solid ${accent}`,
      boxShadow: `0 0 14px ${accent}44`
    }
  }, /*#__PURE__*/React.createElement(QRCodeInner, {
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '10px',
      color: '#9A9A9A',
      letterSpacing: '0.04em',
      textAlign: 'center'
    }
  }, clientName, " \xB7 \u041F\u043E\u043A\u0430\u0436\u0438 \u043D\u0430 \u0432\u0445\u043E\u0434\u0435 \u0434\u043B\u044F \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F")), isExpired && /*#__PURE__*/React.createElement("div", {
    onClick: onRenew,
    style: {
      marginTop: '14px',
      position: 'relative',
      zIndex: 1,
      padding: '14px',
      background: 'linear-gradient(135deg,#C81E1E,#E3242B)',
      borderRadius: '14px',
      textAlign: 'center',
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: '700',
      fontSize: '13px',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'white',
      cursor: 'pointer',
      boxShadow: '0 0 16px rgba(227,36,43,0.4)'
    }
  }, "\u041F\u0420\u041E\u0414\u041B\u0418\u0422\u042C \u0410\u0411\u041E\u041D\u0415\u041C\u0415\u041D\u0422"));
}
Object.assign(__ds_scope, { SubscriptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/subscription/SubscriptionCard.jsx", error: String((e && e.message) || e) }); }

// components/trainers/TrainerCard.jsx
try { (() => {
function TrainerCard({
  name = 'Тренер',
  specialty = 'Фитнес',
  rating = 4.8,
  imageSrc,
  variant = 'list',
  onClick,
  style
}) {
  const [hovered, setHovered] = React.useState(false);
  const stars = Array.from({
    length: 5
  }, (_, i) => i + 0.5 < rating);
  if (variant === 'grid') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: hovered ? '#202020' : '#1A1A1A',
        border: `1px solid ${hovered ? 'rgba(201,162,39,0.5)' : 'rgba(201,162,39,0.2)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: '200ms ease-out',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 12px 28px rgba(0,0,0,0.55)' : '0 4px 12px rgba(0,0,0,0.3)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        aspectRatio: '1/1',
        overflow: 'hidden',
        background: '#111',
        position: 'relative'
      }
    }, imageSrc ? /*#__PURE__*/React.createElement("img", {
      src: imageSrc,
      alt: name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        color: '#C9A227',
        fontSize: '32px'
      }
    }, name[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '15px',
        color: '#E8E8E8',
        marginBottom: '2px'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        marginBottom: '8px'
      }
    }, specialty), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '2px'
      }
    }, stars.map((filled, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: filled ? '#C9A227' : '#333',
        fontSize: '13px'
      }
    }, "\u2605")), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: '5px',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A',
        fontWeight: '600'
      }
    }, rating))));
  }

  // list variant
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid rgba(201,162,39,0.6)',
      flexShrink: 0,
      background: '#222'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: '700',
      color: '#C9A227',
      fontSize: '18px'
    }
  }, name[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: '700',
      fontSize: '15px',
      color: '#E8E8E8',
      marginBottom: '2px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '10px',
      color: '#9A9A9A',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: '5px'
    }
  }, specialty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px'
    }
  }, stars.map((filled, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: filled ? '#C9A227' : '#333',
      fontSize: '12px'
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px',
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '11px',
      color: '#9A9A9A',
      fontWeight: '600'
    }
  }, rating))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3l5 5-5 5",
    stroke: "rgba(201,162,39,0.5)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { TrainerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trainers/TrainerCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/app-screens1.jsx
try { (() => {
(function () {
  const {
    TRAINERS,
    QRCodeSVG,
    GoldArcs,
    StatusBar,
    TabBar,
    SectionTitle,
    BackButton,
    QAIcons
  } = window;
  function HomeScreen({
    nav
  }) {
    const actions = [{
      id: 'trainers',
      icon: 'book',
      label: 'Записаться\nк тренеру',
      gold: true
    }, {
      id: 'sessions',
      icon: 'list',
      label: 'Мои\nзанятия',
      gold: false
    }, {
      id: 'trainers',
      icon: 'people',
      label: 'Тренеры',
      gold: false
    }, {
      id: 'plans',
      icon: 'card',
      label: 'Купить\nабонемент',
      gold: true
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '6px',
        marginBottom: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '11px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '2px solid rgba(201,162,39,0.6)',
        background: '#1A1A1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        color: '#C9A227',
        fontSize: '14px',
        flexShrink: 0
      }
    }, "\u0410\u0418"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        fontWeight: '500',
        letterSpacing: '.07em',
        textTransform: 'uppercase'
      }
    }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C,"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '20px',
        letterSpacing: '.05em',
        color: 'white',
        lineHeight: 1
      }
    }, "\u0410\u041B\u0415\u041A\u0421\u0415\u0419"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
      stroke: "#C9A227",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0",
      stroke: "#C9A227",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderRadius: '20px',
        background: 'linear-gradient(135deg,#141414,#1C1C1C)',
        border: '1px solid rgba(201,162,39,0.42)',
        boxShadow: '0 0 20px rgba(201,162,39,0.08),0 8px 32px rgba(0,0,0,0.6)',
        padding: '20px',
        overflow: 'hidden',
        marginBottom: '14px'
      }
    }, /*#__PURE__*/React.createElement(GoldArcs, {
      style: {
        top: '-80px',
        right: '-80px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '19px',
        letterSpacing: '.04em',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1.1,
        marginBottom: '3px'
      }
    }, "\u0421\u0422\u0410\u041D\u0414\u0410\u0420\u0422 \xB7 \u0411\u0415\u0417\u041B\u0418\u041C\u0418\u0422"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        fontWeight: '600',
        color: '#9A9A9A',
        letterSpacing: '.14em'
      }
    }, "BOSS FITNESS \xB7 BF-2024-001")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        padding: '3px 9px',
        borderRadius: '99px',
        background: 'rgba(201,162,39,0.12)',
        color: '#F5D77A',
        border: '1px solid rgba(201,162,39,0.33)',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        fontWeight: '700',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        flexShrink: 0,
        marginLeft: '8px'
      }
    }, "\u25CF \u0410\u041A\u0422\u0418\u0412\u0415\u041D")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        marginBottom: '2px'
      }
    }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '16px',
        fontWeight: '800',
        color: '#F5D77A'
      }
    }, "23.07.2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '7px',
        background: 'white',
        borderRadius: '10px',
        border: '2px solid #C9A227',
        boxShadow: '0 0 10px rgba(201,162,39,0.25)'
      }
    }, /*#__PURE__*/React.createElement(QRCodeSVG, {
      size: 56
    })))), /*#__PURE__*/React.createElement("div", {
      onClick: () => nav('qr'),
      style: {
        width: '100%',
        height: '56px',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        boxShadow: '0 0 24px rgba(201,162,39,0.45)',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "8",
      height: "8",
      rx: "1.5",
      stroke: "#0A0A0A",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "13",
      width: "8",
      height: "8",
      rx: "1.5",
      stroke: "#0A0A0A",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "3",
      width: "8",
      height: "8",
      rx: "1.5",
      stroke: "#0A0A0A",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "13",
      width: "4",
      height: "4",
      rx: "1",
      fill: "#0A0A0A"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19",
      y: "13",
      width: "2",
      height: "2",
      rx: ".5",
      fill: "#0A0A0A"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "19",
      width: "2",
      height: "2",
      rx: ".5",
      fill: "#0A0A0A"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "17",
      width: "4",
      height: "4",
      rx: "1",
      fill: "#0A0A0A"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '18px',
        letterSpacing: '.1em',
        color: '#0A0A0A'
      }
    }, "\u0427\u0415\u041A-\u0418\u041D")), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0411\u042B\u0421\u0422\u0420\u042B\u0415 \u0414\u0415\u0419\u0421\u0422\u0412\u0418\u042F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '22px'
      }
    }, actions.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => nav(a.id),
      style: {
        background: '#1A1A1A',
        border: `1px solid ${a.gold ? 'rgba(201,162,39,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        padding: '16px 14px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, QAIcons[a.icon](a.gold ? '#C9A227' : '#9A9A9A'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        fontWeight: '700',
        color: '#E8E8E8',
        lineHeight: 1.35,
        whiteSpace: 'pre-wrap'
      }
    }, a.label)))), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0411\u041B\u0418\u0416\u0410\u0419\u0428\u0410\u042F \u0417\u0410\u041F\u0418\u0421\u042C"), /*#__PURE__*/React.createElement("div", {
      onClick: () => nav('trainer-detail', {
        trainer: TRAINERS[0]
      }),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '13px',
        padding: '14px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.22)',
        borderRadius: '16px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1.5px solid rgba(201,162,39,0.5)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/coach-1.png",
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        color: '#E8E8E8',
        marginBottom: '1px'
      }
    }, TRAINERS[0].name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A',
        marginBottom: '5px'
      }
    }, "\u0421\u0440, 25 \u0438\u044E\u043D\u044F \xB7 10:00"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        padding: '2px 8px',
        borderRadius: '99px',
        background: 'rgba(201,162,39,0.1)',
        color: '#F5D77A',
        border: '1px solid rgba(201,162,39,0.28)',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        fontWeight: '700',
        letterSpacing: '.1em'
      }
    }, "\u0418\u041D\u0414\u0418\u0412\u0418\u0414\u0423\u0410\u041B\u042C\u041D\u0410\u042F")), /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18l6-6-6-6",
      stroke: "rgba(201,162,39,0.5)",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    })))), /*#__PURE__*/React.createElement(TabBar, {
      active: "home",
      onNav: nav
    }));
  }
  function QRScreen({
    nav
  }) {
    const [phase, setPhase] = React.useState('idle');
    React.useEffect(() => {
      if (phase === 'scanning') {
        const t = setTimeout(() => setPhase('checking'), 1800);
        return () => clearTimeout(t);
      }
      if (phase === 'checking') {
        const t = setTimeout(() => nav('keys'), 1200);
        return () => clearTimeout(t);
      }
    }, [phase]);
    const cornerStyle = pos => {
      const s = {
        position: 'absolute',
        width: '28px',
        height: '28px',
        borderColor: '#C9A227',
        borderStyle: 'solid',
        borderWidth: '0'
      };
      if (pos === 'tl') {
        s.top = 0;
        s.left = 0;
        s.borderTopWidth = '3px';
        s.borderLeftWidth = '3px';
        s.borderTopLeftRadius = '6px';
      }
      if (pos === 'tr') {
        s.top = 0;
        s.right = 0;
        s.borderTopWidth = '3px';
        s.borderRightWidth = '3px';
        s.borderTopRightRadius = '6px';
      }
      if (pos === 'bl') {
        s.bottom = 0;
        s.left = 0;
        s.borderBottomWidth = '3px';
        s.borderLeftWidth = '3px';
        s.borderBottomLeftRadius = '6px';
      }
      if (pos === 'br') {
        s.bottom = 0;
        s.right = 0;
        s.borderBottomWidth = '3px';
        s.borderRightWidth = '3px';
        s.borderBottomRightRadius = '6px';
      }
      return s;
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes bfScanLine{0%{top:8px;opacity:1}45%{opacity:1}50%{top:calc(100% - 8px);opacity:.7}100%{top:8px;opacity:1}}
        @keyframes bfCornerGlow{0%,100%{filter:drop-shadow(0 0 4px rgba(201,162,39,0.5))}50%{filter:drop-shadow(0 0 12px rgba(201,162,39,0.9))}}
      `), /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '8px',
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onBack: () => nav('home')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '18px',
        letterSpacing: '.06em',
        color: 'white'
      }
    }, "\u0427\u0415\u041A-\u0418\u041D"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '50px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '16px',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        fontWeight: '600',
        color: '#9A9A9A',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        textAlign: 'center'
      }
    }, phase === 'idle' && 'НАВЕДИ НА QR-КОД У ВХОДА', phase === 'scanning' && 'СКАНИРУЕМ...', phase === 'checking' && '● ПРОВЕРЯЕМ АБОНЕМЕНТ...'), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '170px',
        height: '170px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '16px',
        background: phase === 'idle' ? '#0E0E0E' : 'rgba(201,162,39,0.04)',
        border: '1px solid rgba(201,162,39,0.15)',
        overflow: 'hidden',
        transition: 'background 400ms'
      }
    }, phase !== 'idle' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .18
      }
    }, /*#__PURE__*/React.createElement(QRCodeSVG, {
      size: 160
    })), phase === 'scanning' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '8px',
        right: '8px',
        height: '2px',
        background: 'linear-gradient(90deg,transparent,#F5D77A,transparent)',
        borderRadius: '1px',
        animation: 'bfScanLine 1.6s ease-in-out infinite',
        boxShadow: '0 0 8px rgba(245,215,122,0.8)'
      }
    }), phase === 'checking' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(201,162,39,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "52",
      height: "52",
      viewBox: "0 0 48 48",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 26l10 10L38 14",
      stroke: "#C9A227",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...cornerStyle('tl'),
        animation: 'bfCornerGlow 2s ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...cornerStyle('tr'),
        animation: 'bfCornerGlow 2s ease-in-out infinite',
        animationDelay: '0.5s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...cornerStyle('bl'),
        animation: 'bfCornerGlow 2s ease-in-out infinite',
        animationDelay: '1s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...cornerStyle('br'),
        animation: 'bfCornerGlow 2s ease-in-out infinite',
        animationDelay: '1.5s'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '26px',
        transition: 'opacity 300ms',
        opacity: phase === 'checking' ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 14px',
        borderRadius: '99px',
        background: 'rgba(201,162,39,0.12)',
        border: '1px solid rgba(201,162,39,0.3)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
      fill: "#C9A227"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        fontWeight: '700',
        color: '#F5D77A',
        letterSpacing: '.08em'
      }
    }, "BOSS FITNESS \xB7 \u0413\u041B\u0410\u0412\u041D\u042B\u0419 \u0417\u0410\u041B"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#555',
        textAlign: 'center',
        lineHeight: 1.7,
        marginTop: '-6px'
      }
    }, "QR-\u043A\u043E\u0434 \u0440\u0430\u0437\u043C\u0435\u0449\u0451\u043D \u043D\u0430 \u0441\u0442\u043E\u0439\u043A\u0435 \u0440\u0435\u0441\u0435\u043F\u0448\u0435\u043D\u0430", /*#__PURE__*/React.createElement("br", null), "\u0438 \u0443 \u0442\u0443\u0440\u043D\u0438\u043A\u0435\u0442\u0430 \u043D\u0430 \u0432\u0445\u043E\u0434\u0435"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 16px',
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: phase === 'idle' ? () => setPhase('scanning') : undefined,
      style: {
        height: '56px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        background: phase === 'idle' ? 'linear-gradient(135deg,#C9A227,#F5D77A)' : 'rgba(201,162,39,0.08)',
        color: phase === 'idle' ? '#0A0A0A' : '#C9A227',
        border: phase === 'idle' ? 'none' : '1.5px solid rgba(201,162,39,0.3)',
        cursor: phase === 'idle' ? 'pointer' : 'default',
        boxShadow: phase === 'idle' ? '0 0 24px rgba(201,162,39,0.4)' : 'none',
        transition: 'all 250ms ease-out'
      }
    }, phase === 'idle' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M23 7V1h-6M1 7V1h6M23 17v6h-6M1 17v6h6",
      stroke: "#0A0A0A",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), "\u0421\u041A\u0410\u041D\u0418\u0420\u041E\u0412\u0410\u0422\u042C QR"), phase === 'scanning' && '● Идёт сканирование...', phase === 'checking' && '✓ QR распознан')));
  }
  function KeyScreen({
    nav
  }) {
    const [sel, setSel] = React.useState(null);
    const taken = [3, 7, 11, 15, 21, 27];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onBack: () => nav('qr')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '26px',
        letterSpacing: '.05em',
        color: 'white',
        marginBottom: '4px'
      }
    }, "\u0412\u042B\u0411\u0415\u0420\u0418 \u041A\u041B\u042E\u0427"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#9A9A9A',
        marginBottom: '22px'
      }
    }, "\u041A\u043B\u044E\u0447 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D \u0437\u0430 \u0442\u043E\u0431\u043E\u0439 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6,1fr)',
        gap: '10px',
        marginBottom: '20px'
      }
    }, Array.from({
      length: 32
    }, (_, i) => i + 1).map(n => {
      const taken_ = taken.includes(n),
        isSel = sel === n;
      return /*#__PURE__*/React.createElement("div", {
        key: n,
        onClick: taken_ ? undefined : () => setSel(n),
        style: {
          height: '52px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Montserrat',sans-serif",
          fontWeight: '700',
          fontSize: '13px',
          cursor: taken_ ? 'not-allowed' : 'pointer',
          transition: '150ms ease-out',
          transform: isSel ? 'scale(1.1)' : 'scale(1)',
          background: isSel ? 'linear-gradient(135deg,#C9A227,#F5D77A)' : taken_ ? 'rgba(28,28,28,0.8)' : 'transparent',
          border: isSel ? '1.5px solid #F5D77A' : taken_ ? '1.5px solid rgba(50,50,50,0.5)' : '1.5px solid rgba(201,162,39,0.55)',
          color: isSel ? '#0A0A0A' : taken_ ? '#333' : '#C9A227',
          boxShadow: isSel ? '0 0 16px rgba(201,162,39,0.5)' : 'none'
        }
      }, n);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '8px',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '.06em',
        color: '#9A9A9A'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid rgba(201,162,39,0.55)',
        marginRight: '5px',
        verticalAlign: 'middle'
      }
    }), "\u0421\u0432\u043E\u0431\u043E\u0434\u0435\u043D"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'rgba(28,28,28,0.8)',
        marginRight: '5px',
        verticalAlign: 'middle'
      }
    }), "\u0417\u0430\u043D\u044F\u0442"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        marginRight: '5px',
        verticalAlign: 'middle'
      }
    }), "\u0412\u0430\u0448"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 18px 16px',
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: sel ? () => nav('success', {
        keyNumber: sel
      }) : undefined,
      style: {
        height: '56px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        background: sel ? 'linear-gradient(135deg,#C9A227,#F5D77A)' : '#1E1E1E',
        color: sel ? '#0A0A0A' : '#444',
        cursor: sel ? 'pointer' : 'not-allowed',
        boxShadow: sel ? '0 0 20px rgba(201,162,39,0.4)' : 'none',
        transition: '200ms ease-out'
      }
    }, sel ? `ПОДТВЕРДИТЬ — КЛЮЧ №${sel}` : 'ВЫБЕРИ КЛЮЧ')));
  }
  function SuccessScreen({
    nav,
    navData = {}
  }) {
    const [cnt, setCnt] = React.useState(3);
    React.useEffect(() => {
      const t = setInterval(() => setCnt(c => {
        if (c <= 1) {
          clearInterval(t);
          nav('home');
          return 0;
        }
        return c - 1;
      }), 1000);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px'
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes bfPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.75;transform:scale(1.06)}}`), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginBottom: '28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'rgba(201,162,39,0.1)',
        border: '2px solid rgba(201,162,39,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 40px rgba(201,162,39,0.25)',
        animation: 'bfPulse 2s infinite'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "46",
      height: "46",
      viewBox: "0 0 48 48",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 26l10 10L38 14",
      stroke: "#C9A227",
      strokeWidth: "3.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '-10px',
        borderRadius: '50%',
        border: '1px solid rgba(201,162,39,0.14)',
        animation: 'bfPulse 2s infinite',
        animationDelay: '300ms'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '26px',
        letterSpacing: '.05em',
        color: 'white',
        textAlign: 'center',
        marginBottom: '5px'
      }
    }, "\u0417\u0410\u041D\u042F\u0422\u0418\u0415 \u041F\u041E\u0414\u0422\u0412\u0415\u0420\u0416\u0414\u0415\u041D\u041E"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '13px',
        color: '#9A9A9A',
        marginBottom: '28px'
      }
    }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '18px',
        padding: '20px 32px',
        textAlign: 'center',
        marginBottom: '24px',
        width: '100%',
        maxWidth: '250px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        marginBottom: '6px'
      }
    }, "\u0412\u0410\u0428 \u041A\u041B\u042E\u0427"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '52px',
        letterSpacing: '.05em',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1
      }
    }, "\u2116", navData.keyNumber || 14), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A',
        marginTop: '3px'
      }
    }, new Date().toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit'
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#555',
        textAlign: 'center',
        marginBottom: '16px'
      }
    }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0447\u0435\u0440\u0435\u0437 ", cnt, " \u0441\u0435\u043A..."), /*#__PURE__*/React.createElement("div", {
      onClick: () => nav('home'),
      style: {
        padding: '13px 28px',
        background: 'transparent',
        border: '1.5px solid rgba(201,162,39,0.4)',
        borderRadius: '14px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: '#C9A227',
        cursor: 'pointer'
      }
    }, "\u041D\u0410 \u0413\u041B\u0410\u0412\u041D\u0423\u042E"));
  }
  function SessionsScreen({
    nav
  }) {
    const sessions = [{
      date: '23 июня 2026',
      time: '09:15',
      key: 8,
      type: 'САМОСТ.',
      trainer: null
    }, {
      date: '21 июня 2026',
      time: '11:00',
      key: 14,
      type: 'ИНДИВИД.',
      trainer: 'Низами'
    }, {
      date: '19 июня 2026',
      time: '09:30',
      key: 5,
      type: 'САМОСТ.',
      trainer: null
    }, {
      date: '17 июня 2026',
      time: '18:00',
      key: 22,
      type: 'ГРУПП.',
      trainer: 'Светлана'
    }, {
      date: '14 июня 2026',
      time: '10:00',
      key: 3,
      type: 'САМОСТ.',
      trainer: null
    }, {
      date: '12 июня 2026',
      time: '11:30',
      key: 17,
      type: 'ИНДИВИД.',
      trainer: 'Низами'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: '8px',
        marginBottom: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '24px',
        letterSpacing: '.05em',
        color: 'white',
        marginBottom: '2px'
      }
    }, "\u0418\u0421\u0422\u041E\u0420\u0418\u042F"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A'
      }
    }, "\u041F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F5D77A',
        fontWeight: '700'
      }
    }, "14"))), sessions.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.15)',
        borderRadius: '14px',
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(201,162,39,0.1)',
        border: '1.5px solid rgba(201,162,39,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 7l-11 11-5-5",
      stroke: "#C9A227",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '13px',
        fontWeight: '700',
        color: '#E8E8E8',
        marginBottom: '1px'
      }
    }, s.date, " \xB7 ", s.time), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A'
      }
    }, s.trainer || 'Самостоятельная тренировка')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '3px',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        fontWeight: '700',
        color: s.type === 'САМОСТ.' ? '#9A9A9A' : '#F5D77A',
        letterSpacing: '.1em'
      }
    }, s.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#555'
      }
    }, "\u041A\u043B\u044E\u0447 \u2116", s.key))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "sessions",
      onNav: nav
    }));
  }
  Object.assign(window, {
    HomeScreen,
    QRScreen,
    KeyScreen,
    SuccessScreen,
    SessionsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/app-screens1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/app-screens2.jsx
try { (() => {
(function () {
  const {
    TRAINERS,
    GoldArcs,
    StatusBar,
    TabBar,
    SectionTitle,
    BackButton
  } = window;
  function TrainersScreen({
    nav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: '8px',
        marginBottom: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '24px',
        letterSpacing: '.05em',
        color: 'white',
        marginBottom: '2px'
      }
    }, "\u0422\u0420\u0415\u041D\u0415\u0420\u042B"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A'
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0440\u0435\u043D\u0435\u0440\u0430")), TRAINERS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => nav('trainer-detail', {
        trainer: t
      }),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 16px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.15)',
        borderRadius: '16px',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '2px solid rgba(201,162,39,0.55)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: t.image,
      alt: t.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        color: '#E8E8E8',
        marginBottom: '3px'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        marginBottom: '6px'
      }
    }, t.specialty), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1px'
      }
    }, Array.from({
      length: 5
    }, (_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        color: j < Math.floor(t.rating) ? '#C9A227' : '#333',
        fontSize: '10px'
      }
    }, "\u2605")))), /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18l6-6-6-6",
      stroke: "rgba(201,162,39,0.5)",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    }))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "trainers",
      onNav: nav
    }));
  }
  function TrainerProfileScreen({
    nav,
    navData = {}
  }) {
    const t = navData.trainer || TRAINERS[0];
    const [booked, setBooked] = React.useState(null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '255px',
        overflow: 'hidden',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: t.image,
      alt: t.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,transparent 40%,rgba(0,0,0,0.88) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(BackButton, {
      onBack: () => nav('trainers')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '20px',
        right: '20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '26px',
        letterSpacing: '.04em',
        color: 'white',
        lineHeight: 1,
        marginBottom: '3px'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#C9A227',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        fontWeight: '600'
      }
    }, t.specialty))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 18px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px',
        marginBottom: '20px'
      }
    }, [{
      v: t.rating,
      l: 'РЕЙТИНГ',
      u: null
    }, {
      v: t.exp,
      l: 'ЛЕТ ОПЫТА'
    }, {
      v: '120+',
      l: 'КЛИЕНТОВ'
    }].map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.2)',
        borderRadius: '12px',
        padding: '12px 8px',
        textAlign: 'center'
      }
    }, i === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1px',
        marginBottom: '1px'
      }
    }, Array.from({
      length: 5
    }, (_, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        color: j < Math.floor(t.rating) ? '#C9A227' : '#333',
        fontSize: '10px'
      }
    }, "\u2605"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '22px',
        color: '#F5D77A',
        lineHeight: 1
      }
    }, s.v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '8px',
        color: '#9A9A9A',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        marginTop: '3px'
      }
    }, s.l)))), /*#__PURE__*/React.createElement(SectionTitle, null, "\u041E \u0422\u0420\u0415\u041D\u0415\u0420\u0415"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Inter',sans-serif",
        fontSize: '13px',
        color: '#9A9A9A',
        lineHeight: 1.7,
        marginBottom: '18px'
      }
    }, t.bio), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0421\u0415\u0420\u0422\u0418\u0424\u0418\u041A\u0410\u0422\u042B"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '22px'
      }
    }, t.certs.map((cert, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.18)',
        borderRadius: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        background: 'rgba(201,162,39,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 7l-11 11-5-5",
      stroke: "#C9A227",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#E8E8E8',
        fontWeight: '500'
      }
    }, cert)))), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0421\u041F\u0415\u0426\u0418\u0410\u041B\u0418\u0417\u0410\u0426\u0418\u042F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        marginBottom: '22px'
      }
    }, t.specs.map((sp, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#9A9A9A'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: '#C9A227',
        flexShrink: 0
      }
    }), sp))), /*#__PURE__*/React.createElement(SectionTitle, null, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B & \u0420\u0410\u0421\u041F\u0418\u0421\u0410\u041D\u0418\u0415"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.18)',
        borderRadius: '10px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      stroke: "#C9A227",
      strokeWidth: "1.5"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        color: '#9A9A9A',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        marginBottom: '2px'
      }
    }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '13px',
        color: '#E8E8E8',
        fontWeight: '600'
      }
    }, t.phone))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.18)',
        borderRadius: '10px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      stroke: "#C9A227",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 2v4M16 2v4",
      stroke: "#C9A227",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px',
        color: '#9A9A9A',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        marginBottom: '2px'
      }
    }, "\u0420\u0410\u0421\u041F\u0418\u0421\u0410\u041D\u0418\u0415"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '13px',
        color: '#E8E8E8',
        fontWeight: '600'
      }
    }, t.schedule)))), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0417\u0410\u041F\u0418\u0421\u042C"), booked && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '11px',
        background: 'rgba(201,162,39,0.1)',
        border: '1px solid rgba(201,162,39,0.4)',
        borderRadius: '12px',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#F5D77A',
        textAlign: 'center',
        marginBottom: '10px'
      }
    }, "\u2713 \u0417\u0430\u043F\u0438\u0441\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430! \u041E\u0436\u0438\u0434\u0430\u0439 SMS."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setBooked('group'),
      style: {
        padding: '15px',
        background: booked ? '#1A1A1A' : 'linear-gradient(135deg,#C9A227,#F5D77A)',
        borderRadius: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        border: booked ? '1px solid rgba(201,162,39,0.3)' : 'none',
        boxShadow: booked ? 'none' : '0 0 16px rgba(201,162,39,0.3)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.06em',
        color: booked ? '#C9A227' : '#0A0A0A'
      }
    }, "\u0413\u0420\u0423\u041F\u041F\u041E\u0412\u041E\u0415 \u0417\u0410\u041D\u042F\u0422\u0418\u0415"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: booked ? '#9A9A9A' : 'rgba(0,0,0,0.5)',
        marginTop: '1px'
      }
    }, "\u0414\u043E 8 \u0447\u0435\u043B\u043E\u0432\u0435\u043A")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '17px',
        color: booked ? '#F5D77A' : '#0A0A0A'
      }
    }, t.priceGroup.toLocaleString(), " \u20B8")), /*#__PURE__*/React.createElement("div", {
      onClick: () => setBooked('ind'),
      style: {
        padding: '15px',
        background: '#1A1A1A',
        border: '1.5px solid rgba(201,162,39,0.45)',
        borderRadius: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.06em',
        color: '#C9A227'
      }
    }, "\u0418\u041D\u0414\u0418\u0412\u0418\u0414\u0423\u0410\u041B\u042C\u041D\u041E\u0415"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A',
        marginTop: '1px'
      }
    }, "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '17px',
        color: '#F5D77A'
      }
    }, t.priceInd.toLocaleString(), " \u20B8"))))));
  }
  function ProfileScreen({
    nav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '16px',
        marginBottom: '22px',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement(GoldArcs, {
      style: {
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: .6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        border: '3px solid #C9A227',
        background: '#1A1A1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '30px',
        color: '#C9A227',
        marginBottom: '12px',
        boxShadow: '0 0 20px rgba(201,162,39,0.25)',
        position: 'relative',
        zIndex: 1
      }
    }, "\u0410\u0418"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '21px',
        letterSpacing: '.04em',
        color: 'white',
        marginBottom: '3px',
        position: 'relative',
        zIndex: 1
      }
    }, "\u0410\u041B\u0415\u041A\u0421\u0415\u0419 \u0418\u0412\u0410\u041D\u041E\u0412"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#9A9A9A',
        position: 'relative',
        zIndex: 1
      }
    }, "+7 777 123 4567")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg,#141414,#1A1A1A)',
        border: '1px solid rgba(201,162,39,0.4)',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        marginBottom: '8px'
      }
    }, "\u0422\u0415\u041A\u0423\u0429\u0418\u0419 \u0422\u0410\u0420\u0418\u0424"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '19px',
        letterSpacing: '.04em',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '6px'
      }
    }, "\u0421\u0422\u0410\u041D\u0414\u0410\u0420\u0422 \xB7 \u0411\u0415\u0417\u041B\u0418\u041C\u0418\u0422"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '12px',
        color: '#E8E8E8'
      }
    }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F5D77A',
        fontWeight: '700'
      }
    }, "23.07.2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => nav('plans'),
      style: {
        padding: '15px',
        background: 'linear-gradient(135deg,#C9A227,#F5D77A)',
        border: 'none',
        borderRadius: '14px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: '#0A0A0A',
        cursor: 'pointer',
        boxShadow: '0 0 16px rgba(201,162,39,0.3)'
      }
    }, "\u041F\u0420\u041E\u0414\u041B\u0418\u0422\u042C \u0410\u0411\u041E\u041D\u0415\u041C\u0415\u041D\u0422"), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: '15px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '14px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: '#C9A227',
        cursor: 'pointer'
      }
    }, "\u0418\u0421\u0422\u041E\u0420\u0418\u042F \u0410\u0411\u041E\u041D\u0415\u041C\u0415\u041D\u0422\u041E\u0412"), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: '15px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '14px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: '#C9A227',
        cursor: 'pointer'
      }
    }, "\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0418"), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: '15px',
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '14px',
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: '#C81E1E',
        cursor: 'pointer'
      }
    }, "\u0412\u042B\u0425\u041E\u0414"))), /*#__PURE__*/React.createElement(TabBar, {
      active: "profile",
      onNav: nav
    }));
  }
  function SubscriptionPlansScreen({
    nav
  }) {
    const plans = [{
      name: '12 ЗАНЯТИЙ',
      icon: '○',
      price: 35000,
      desc: 'Месячный пакет',
      color: '#C9A227'
    }, {
      name: 'БЕЗЛИМИТ',
      icon: '∞',
      price: 50000,
      desc: 'Неограниченные тренировки',
      color: '#F5D77A'
    }, {
      name: 'РАЗОВОЕ',
      icon: '●',
      price: 5000,
      desc: 'Одно посещение',
      color: '#9A9A9A'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0A0A0A'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 18px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: '8px',
        marginBottom: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '24px',
        letterSpacing: '.05em',
        color: 'white',
        marginBottom: '2px'
      }
    }, "\u0410\u0411\u041E\u041D\u0415\u041C\u0415\u041D\u0422\u042B"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        color: '#9A9A9A'
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u0439 \u0442\u0430\u0440\u0438\u0444")), plans.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => nav('home'),
      style: {
        background: '#1A1A1A',
        border: '1px solid rgba(201,162,39,0.22)',
        borderRadius: '16px',
        padding: '18px',
        marginBottom: '12px',
        cursor: 'pointer',
        transition: 'all 200ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'rgba(201,162,39,0.1)',
        border: `2px solid ${p.color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '26px',
        color: p.color
      }
    }, p.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        color: '#E8E8E8',
        marginBottom: '2px'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '10px',
        color: '#9A9A9A'
      }
    }, p.desc))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Anton','Impact',sans-serif",
        fontSize: '24px',
        color: '#F5D77A'
      }
    }, p.price.toLocaleString(), " \u20B8"), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: '8px 16px',
        background: p.color === '#F5D77A' ? 'linear-gradient(135deg,#C9A227,#F5D77A)' : 'transparent',
        border: `1.5px solid ${p.color}`,
        borderRadius: '10px',
        fontFamily: "'Montserrat',sans-serif",
        fontSize: '11px',
        fontWeight: '700',
        color: p.color === '#F5D77A' ? '#0A0A0A' : p.color,
        cursor: 'pointer'
      }
    }, "\u041A\u0423\u041F\u0418\u0422\u042C"))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "home",
      onNav: nav
    }));
  }
  function App() {
    const [screen, setScreen] = React.useState('home');
    const [navData, setNavData] = React.useState({});
    const nav = (s, d = {}) => {
      setScreen(s);
      setNavData(d);
    };
    const screens = {
      home: /*#__PURE__*/React.createElement(HomeScreen, {
        nav: nav
      }),
      qr: /*#__PURE__*/React.createElement(QRScreen, {
        nav: nav
      }),
      keys: /*#__PURE__*/React.createElement(KeyScreen, {
        nav: nav
      }),
      success: /*#__PURE__*/React.createElement(SuccessScreen, {
        nav: nav,
        navData: navData
      }),
      trainers: /*#__PURE__*/React.createElement(TrainersScreen, {
        nav: nav
      }),
      'trainer-detail': /*#__PURE__*/React.createElement(TrainerProfileScreen, {
        nav: nav,
        navData: navData
      }),
      sessions: /*#__PURE__*/React.createElement(SessionsScreen, {
        nav: nav
      }),
      profile: /*#__PURE__*/React.createElement(ProfileScreen, {
        nav: nav
      }),
      plans: /*#__PURE__*/React.createElement(SubscriptionPlansScreen, {
        nav: nav
      })
    };
    return screens[screen];
  }
  Object.assign(window, {
    TrainersScreen,
    TrainerProfileScreen,
    ProfileScreen,
    SubscriptionPlansScreen,
    App
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/app-screens2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/app-shared.jsx
try { (() => {
const TRAINERS = [{
  id: 1,
  name: 'Низами',
  specialty: 'БОДИБИЛДИНГ · СИЛОВЫЕ',
  rating: 5.0,
  image: '../../assets/coach-1.png',
  bio: 'МС РК по бодибилдингу. 20 лет тренерского стажа. Абсолютный чемпион Казахстана, Кыргызстана, Алматы и Средней Азии по бодибилдингу. Чемпион Средней Азии по становой тяге. Многократный призер международных турниров (Mr. Olympia Amateur). Дипломированный тренер КАСиТ. Нутрициолог.',
  certs: ['МС РК по бодибилдингу', 'Диплом КАСиТ — Казахская Академия Спорта и Туризма', 'Тренер национального уровня', 'Нутрициолог'],
  exp: '20',
  schedule: 'Пн / Ср / Пт · Вт / Чт / Сб — 14:00–23:00',
  phone: '8 775 900 00 79',
  specs: ['Набор веса и мышечный рельеф', 'Силовые показатели и ОФП', 'ЛФК и реабилитация после травм', 'Кардиотренинг', 'Подготовка к соревнованиям', 'Онлайн-сопровождение', 'Спортивное питание и БАДы'],
  priceGroup: 20000,
  priceInd: 30000
}, {
  id: 2,
  name: 'Светлана',
  specialty: 'ФИТНЕС · ПОХУДЕНИЕ · ЛФК',
  rating: 4.9,
  image: '../../assets/coach-2.png',
  bio: 'Тренер с индивидуальным подходом к каждому клиенту. Специализируется на похудении, наборе мышечной массы, восстановлении после родов и тренировках для беременных. Работает с грыжами и проблемами со спиной. Консультирует по спортивному питанию.',
  certs: ['Сертифицированный персональный тренер', 'Нутрициолог — спортивное питание', 'Тренировки для беременных и послеродовое восстановление'],
  exp: '5+',
  schedule: 'Пн / Ср / Пт',
  phone: '+7 777 319 66 11',
  specs: ['Похудение и жиросжигание', 'Набор мышечной массы', 'Тренировки для беременных', 'Восстановление после родов', 'Грыжи и проблемы со спиной', 'Детские тренировки', 'Коррекция фигуры и осанки', 'Спортивное питание'],
  priceGroup: 20000,
  priceInd: 25000
}];
function QRCodeSVG({
  size = 130
}) {
  const c = size / 21,
    m = [];
  const f = (sr, sc) => {
    for (let r = 0; r < 7; r++) for (let cc = 0; cc < 7; cc++) if (r === 0 || r === 6 || cc === 0 || cc === 6 || r >= 2 && r <= 4 && cc >= 2 && cc <= 4) m.push([sr + r, sc + cc]);
  };
  f(0, 0);
  f(0, 14);
  f(14, 0);
  [[6, 8], [6, 10], [6, 12], [8, 6], [10, 6], [12, 6], [8, 8], [8, 11], [8, 14], [8, 16], [8, 18], [9, 9], [9, 13], [9, 17], [10, 8], [10, 12], [10, 15], [10, 19], [11, 9], [11, 11], [11, 16], [11, 18], [12, 8], [12, 10], [12, 13], [12, 17], [13, 9], [13, 12], [13, 15], [13, 19], [14, 10], [14, 13], [14, 16], [15, 9], [15, 11], [15, 14], [15, 18], [16, 10], [16, 12], [16, 15], [16, 19], [17, 9], [17, 13], [17, 16], [18, 10], [18, 14], [18, 17], [19, 11], [19, 15], [20, 10], [20, 13]].forEach(v => m.push(v));
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    fill: "white"
  }), m.map(([r, cc], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: cc * c + .5,
    y: r * c + .5,
    width: c - .5,
    height: c - .5,
    fill: "#080808"
  })));
}
function GoldArcs({
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "280",
    height: "280",
    viewBox: "0 0 280 280",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "140",
    r: "120",
    fill: "none",
    stroke: "#C9A227",
    strokeWidth: "1.5",
    strokeDasharray: "8 5",
    opacity: ".18"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "140",
    r: "96",
    fill: "none",
    stroke: "#F5D77A",
    strokeWidth: "1",
    strokeDasharray: "4 8",
    opacity: ".12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "140",
    r: "142",
    fill: "none",
    stroke: "#C9A227",
    strokeWidth: ".75",
    strokeDasharray: "14 4",
    opacity: ".10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 50 140 A 90 90 0 0 1 140 50",
    fill: "none",
    stroke: "#C9A227",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    opacity: ".22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 230 140 A 90 90 0 0 1 140 230",
    fill: "none",
    stroke: "#C9A227",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    opacity: ".14"
  }));
}
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 22px 8px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '14px',
      fontWeight: '600',
      color: '#E8E8E8'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '118px',
      height: '32px',
      background: '#000',
      borderRadius: '18px',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "8",
    width: "3",
    height: "4",
    rx: ".5",
    fill: "#E8E8E8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5.5",
    width: "3",
    height: "6.5",
    rx: ".5",
    fill: "#E8E8E8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "3",
    height: "9",
    rx: ".5",
    fill: "#E8E8E8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "12",
    rx: ".5",
    fill: "#E8E8E8",
    opacity: ".3"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    fill: "#E8E8E8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.2 6.8A3.5 3.5 0 0 1 10.8 6.8",
    stroke: "#E8E8E8",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.8 4.4A6.5 6.5 0 0 1 13.2 4.4",
    stroke: "#E8E8E8",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    opacity: ".5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: ".5",
    y: ".5",
    width: "21",
    height: "11",
    rx: "2.5",
    stroke: "#E8E8E8",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22.5",
    y: "3.5",
    width: "2",
    height: "5",
    rx: "1",
    fill: "#E8E8E8",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "17",
    height: "8",
    rx: "1.5",
    fill: "#E8E8E8"
  }))));
}
const TABS = [{
  id: 'home',
  label: 'Главная',
  p: c => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22V12h6v10",
    stroke: c,
    strokeWidth: "1.5"
  }))
}, {
  id: 'trainers',
  label: 'Тренеры',
  p: c => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21c0-4 2.7-6 6-6s6 2 6 6",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3a4 4 0 0 1 0 8",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21c0-3-1.5-5-4-6",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
}, {
  id: 'sessions',
  label: 'История',
  p: c => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "3",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
}, {
  id: 'profile',
  label: 'Профиль',
  p: c => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
}];
function TabBar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '68px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      paddingTop: '8px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      background: '#0A0A0A',
      flexShrink: 0
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    onClick: () => onNav(t.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
      cursor: 'pointer',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      transition: 'all 200ms'
    }
  }, t.p(active === t.id ? '#C9A227' : '#9A9A9A')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '9px',
      fontWeight: '600',
      color: active === t.id ? '#C9A227' : '#9A9A9A',
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, t.label))));
}
function SectionTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '10px',
      fontWeight: '700',
      color: '#9A9A9A',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginBottom: '10px'
    }
  }, children);
}
function BackButton({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6",
    stroke: "#C9A227",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
const QAIcons = {
  book: c => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })),
  list: c => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })),
  people: c => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21c0-4 2.7-6 6-6s6 2 6 6",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3a4 4 0 0 1 0 8",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21c0-3-1.5-5-4-6",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })),
  card: c => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20",
    stroke: c,
    strokeWidth: "1.5"
  }))
};
Object.assign(window, {
  TRAINERS,
  QRCodeSVG,
  GoldArcs,
  StatusBar,
  TabBar,
  SectionTitle,
  BackButton,
  QAIcons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/app-shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KeyBadge = __ds_scope.KeyBadge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SubscriptionCard = __ds_scope.SubscriptionCard;

__ds_ns.TrainerCard = __ds_scope.TrainerCard;

})();
