export interface ProgressBarProps {
  /** Sessions consumed so far */
  current: number;
  /** Total sessions in the package */
  total: number;
  /** Show the label row above the bar */
  showLabel?: boolean;
  style?: React.CSSProperties;
}
