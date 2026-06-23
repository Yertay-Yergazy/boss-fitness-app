Trainer card used in both the trainers list screen (list variant) and the grid overview (grid variant).

```jsx
{/* Scrollable list */}
<TrainerCard
  name="Дмитрий Волков"
  specialty="Силовые тренировки"
  rating={4.9}
  imageSrc="/assets/coach-1.png"
  variant="list"
  onClick={() => openProfile(trainer)}
/>

{/* Grid layout */}
<div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
  <TrainerCard variant="grid" name="Анастасия Ким" specialty="Фитнес" rating={4.8} imageSrc="/assets/coach-2.png" />
</div>
```

**Variants:** list (horizontal, compact — good for full-width screens), grid (square card with photo hero — good for 2-column grids)  
**Hover state:** border brightens + card lifts
