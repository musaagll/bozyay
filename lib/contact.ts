import contact from "../content/iletisim.json";

// Phone and WhatsApp are edited from the Gomp panel (content/iletisim.json);
// every format the site needs is derived from those two values.
const digits = contact.phone.replace(/\D/g, "");
// "0531 501 25 84" → "905315012584"
const international = digits.startsWith("0") ? `90${digits.slice(1)}` : digits;

export const PHONE_DISPLAY = contact.phone;
export const PHONE_HREF = `tel:+${international}`;
/** Schema.org style: +90-531-501-25-84 */
export const PHONE_SCHEMA = `+${international.slice(0, 2)}-${international.slice(2, 5)}-${international.slice(5, 8)}-${international.slice(8, 10)}-${international.slice(10)}`;
export const WHATSAPP_URL = `https://wa.me/${contact.whatsappNumber}`;
