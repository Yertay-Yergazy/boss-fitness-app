Gold progress bar for limited session packages. Automatically shifts color as sessions run low: gold → amber (≤4 remaining) → red (≤2 remaining).

```jsx
<ProgressBar current={5} total={12} />      {/* gold — plenty left */}
<ProgressBar current={9} total={12} />      {/* amber — getting low */}
<ProgressBar current={11} total={12} />     {/* red — almost gone */}
<ProgressBar current={12} total={12} showLabel={false} />  {/* no label */}
```

**Color states:** active (gold), warning (amber, ≤4 left), critical (red, ≤2 left), expired (gray, 0 left)
