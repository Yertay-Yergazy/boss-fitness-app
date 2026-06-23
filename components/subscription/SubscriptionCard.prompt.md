The hero membership card — replaces physical membership cards. Gold metallic style with decorative arc pattern, QR code, and status indicator. Automatically switches to a red expired style with a renew CTA when status is "expired".

```jsx
<SubscriptionCard
  type="unlimited"
  status="active"
  planName="СТАНДАРТ · БЕЗЛИМИТ"
  dateTo="23.07.2026"
  clientName="ALEXEI"
  clientId="BF-2024-001"
/>

<SubscriptionCard
  type="limited"
  status="expiring"
  planName="12 ЗАНЯТИЙ"
  sessionsUsed={10}
  sessionsTotal={12}
/>

<SubscriptionCard
  type="unlimited"
  status="expired"
  planName="СТАНДАРТ · БЕЗЛИМИТ"
  dateTo="23.01.2026"
  onRenew={() => navigate('renew')}
/>
```

**Types:** unlimited (shows expiry date), limited (shows progress bar + counter), single (one-time)  
**Statuses:** active (gold), expiring (amber tint), expired (red — shows renew CTA instead of QR)
