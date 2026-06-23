/**
 * @startingPoint section="Components" subtitle="Hero membership card with QR code" viewport="700x380"
 */
export interface SubscriptionCardProps {
  /** unlimited = date-based / limited = session counter / single = one-time */
  type?: 'unlimited' | 'limited' | 'single';
  status?: 'active' | 'expiring' | 'expired';
  /** e.g. "СТАНДАРТ · БЕЗЛИМИТ" or "12 ЗАНЯТИЙ" */
  planName?: string;
  /** Display date for unlimited plans */
  dateTo?: string;
  /** Used sessions for limited plans */
  sessionsUsed?: number;
  /** Total sessions for limited plans */
  sessionsTotal?: number;
  clientName?: string;
  clientId?: string;
  /** Show the embedded QR code */
  showQR?: boolean;
  /** Callback for the "Renew" CTA shown when expired */
  onRenew?: () => void;
  style?: React.CSSProperties;
}
