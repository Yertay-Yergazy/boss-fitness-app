export interface KeyBadgeProps {
  /** Locker number to display */
  number: number | string;
  /** free = gold outline / taken = gray / selected = gold fill */
  state?: 'free' | 'taken' | 'selected';
  onClick?: () => void;
  style?: React.CSSProperties;
}
