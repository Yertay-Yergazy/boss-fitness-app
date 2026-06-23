/**
 * @startingPoint section="Components" subtitle="Primary/secondary/danger/ghost buttons in 3 sizes" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Height preset — sm:40px  md:52px  lg:60px */
  size?: 'sm' | 'md' | 'lg';
  /** Stretches to 100% width (default true for mobile) */
  fullWidth?: boolean;
  /** Disables interaction and shows muted style */
  disabled?: boolean;
  /** Optional icon node rendered before label */
  icon?: React.ReactNode;
  /** Button label */
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
