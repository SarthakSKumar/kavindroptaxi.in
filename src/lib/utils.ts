import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Google Ads event tracking helper
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, params);
  }
}

// Track phone call clicks
export function trackPhoneClick() {
  trackEvent('phone_call_click', {
    'event_category': 'engagement',
    'event_label': 'phone_call',
  });
}

// Track WhatsApp clicks
export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', {
    'event_category': 'engagement',
    'event_label': 'whatsapp_contact',
  });
}

// Track form step progression
export function trackFormStep(step: number) {
  trackEvent('form_step', {
    'event_category': 'form',
    'event_label': `step_${step}`,
    'value': step,
  });
}
