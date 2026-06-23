export interface BadgeProps {
  /** Controls color scheme */
  status?: 'active' | 'expiring' | 'expired' | 'inactive' | 'success' | 'info';
  size?: 'sm' | 'md' | 'lg';
  /** Show the small dot indicator before text */
  dot?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
