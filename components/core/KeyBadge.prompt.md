Circular locker key selector used in the check-in flow. Renders a 52×52px pill for each key number.

```jsx
<KeyBadge number={7} state="free" onClick={() => setKey(7)} />
<KeyBadge number={3} state="taken" />
<KeyBadge number={14} state="selected" onClick={() => setKey(14)} />
```

**States:** free (gold outline, tappable), taken (gray, disabled), selected (gold fill + glow)  
Assemble into a grid with `display:grid; grid-template-columns: repeat(6, 52px); gap: 10px`
