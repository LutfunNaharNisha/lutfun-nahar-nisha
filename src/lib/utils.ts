/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build a tel: link from a display phone number. */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

/** Build a wa.me link from an international number (digits only, no "+"). */
export function toWhatsAppHref(number: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}
