export interface QRCodeSVGProps {
  size?: number;
}

const DATA_DOTS: Array<[number, number]> = [
  [6, 8], [6, 10], [6, 12], [8, 6], [10, 6], [12, 6], [8, 8], [8, 11], [8, 14], [8, 16], [8, 18],
  [9, 9], [9, 13], [9, 17], [10, 8], [10, 12], [10, 15], [10, 19], [11, 9], [11, 11], [11, 16],
  [11, 18], [12, 8], [12, 10], [12, 13], [12, 17], [13, 9], [13, 12], [13, 15], [13, 19], [14, 10],
  [14, 13], [14, 16], [15, 9], [15, 11], [15, 14], [15, 18], [16, 10], [16, 12], [16, 15], [16, 19],
  [17, 9], [17, 13], [17, 16], [18, 10], [18, 14], [18, 17], [19, 11], [19, 15], [20, 10], [20, 13],
];

function finderPattern(startRow: number, startCol: number): Array<[number, number]> {
  const cells: Array<[number, number]> = [];
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const isRing = r === 0 || r === 6 || c === 0 || c === 6;
      const isCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
      if (isRing || isCore) cells.push([startRow + r, startCol + c]);
    }
  }
  return cells;
}

/** Декоративный QR-код (не настоящий скан-таргет — визуальный элемент макета). Перенесено из app-shared.jsx. */
export function QRCodeSVG({ size = 130 }: QRCodeSVGProps) {
  const cell = size / 21;
  const cells = [...finderPattern(0, 0), ...finderPattern(0, 14), ...finderPattern(14, 0), ...DATA_DOTS];

  return (
    <svg width={size} height={size} style={{ display: "block", borderRadius: 3 }}>
      <rect width={size} height={size} fill="white" />
      {cells.map(([row, col], i) => (
        <rect key={i} x={col * cell + 0.5} y={row * cell + 0.5} width={cell - 0.5} height={cell - 0.5} fill="#080808" />
      ))}
    </svg>
  );
}
