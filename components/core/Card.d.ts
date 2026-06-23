export interface CardProps {
  /** Visual depth/purpose of the card */
  variant?: 'default' | 'elevated' | 'hero' | 'danger' | 'subtle';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Adds a 3px gold left-border accent stripe */
  goldAccent?: boolean;
  /** Enables hover lift animation — set true when card is a tap target */
  interactive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
