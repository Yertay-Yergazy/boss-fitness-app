Dark container card with optional gold border. The base building block for every surface in the app.

```jsx
<Card variant="hero" padding="lg">
  <h2>Subscription content</h2>
</Card>
<Card variant="elevated" goldAccent interactive onClick={() => {}}>
  <p>Tappable card with gold left stripe</p>
</Card>
<Card variant="danger">
  <p>Expired or alert state</p>
</Card>
```

**Variants:** default, elevated (gradient + shadow), hero (gold glow border), danger (red tinted), subtle (minimal border)  
**goldAccent** — adds a 3px gold left stripe (good for list items)  
**interactive** — enables hover translateY(-1px) and enhanced shadow
