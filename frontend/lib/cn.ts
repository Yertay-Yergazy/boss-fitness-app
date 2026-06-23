/** Склеивает CSS Module классы, отбрасывая falsy значения. Замена clsx без лишней зависимости (KISS). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
