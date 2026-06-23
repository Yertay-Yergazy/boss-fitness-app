export interface TrainerCardProps {
  name: string;
  specialty: string;
  rating?: number;
  imageSrc?: string;
  /** list = horizontal row / grid = square card with photo */
  variant?: 'list' | 'grid';
  onClick?: () => void;
  style?: React.CSSProperties;
}
