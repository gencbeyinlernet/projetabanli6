import type { EncryptedPayload, TrainerScript } from './types';

function fromBase64(value: string) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// Phone keyboards capitalize and swap ı/i, so the key is derived from a normalized form.
// The encrypt script must apply the same normalization.
export function normalizePassword(value: string) {
  return value.trim().normalize('NFC').toLocaleLowerCase('tr').replace(/ı/g, 'i');
}

// A wrong password fails AES-GCM authentication and rejects.
export async function decryptScript(password: string, payload: EncryptedPayload): Promise<TrainerScript> {
  const subtle = window.crypto.subtle;
  const material = await subtle.importKey('raw', new TextEncoder().encode(normalizePassword(password)), 'PBKDF2', false, ['deriveKey']);
  const key = await subtle.deriveKey(
    { name: 'PBKDF2', salt: fromBase64(payload.salt), iterations: payload.iterations, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
  const plain = await subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(payload.iv) }, key, fromBase64(payload.data));
  return JSON.parse(new TextDecoder().decode(plain)) as TrainerScript;
}
