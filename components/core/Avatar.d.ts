export interface AvatarProps {
  /** Image URL — if absent shows initials */
  src?: string;
  /** Full name, used for initials fallback */
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  border?: 'gold' | 'strong' | 'white' | 'none';
  style?: React.CSSProperties;
}
