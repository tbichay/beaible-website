# Cloudflare Turnstile Setup

## 1. Cloudflare Account erstellen (falls nicht vorhanden)
- Gehe zu https://dash.cloudflare.com/
- Registriere dich oder logge dich ein

## 2. Turnstile Site Key erstellen
1. Gehe zu https://dash.cloudflare.com/
2. Klicke auf "Turnstile" im linken Menü
3. Klicke auf "Add site"
4. Fülle die Formulardaten aus:
   - **Site name**: beaible-consulting.de
   - **Domain**: beaible-consulting.de (oder deine Domain)
   - **Widget mode**: Managed (empfohlen)
5. Klicke auf "Create"

## 3. Keys in .env.local eintragen
Nach der Erstellung erhältst du:
- **Site Key** (public) - für Frontend
- **Secret Key** (private) - für Backend

Ersetze in der `.env.local` Datei:
```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=dein-site-key-hier
TURNSTILE_SECRET_KEY=dein-secret-key-hier
```

## 4. Development Mode
Ohne konfigurierte Keys funktioniert das System im Development Mode:
- Zeigt einen Debug-Button statt Turnstile
- Ermöglicht Testen ohne echte Turnstile-Konfiguration

## 5. Testing
Nach der Konfiguration:
1. Restart des Dev-Servers: `npm run dev`
2. Teste das Kontaktformular
3. Turnstile sollte unsichtbar oder als einfache Challenge erscheinen

## Sicherheitsvorteile
- **Kostenlos** bis 1 Million Requests/Monat
- **DSGVO-konform** 
- **Unsichtbar** für die meisten echten Nutzer
- **Enterprise-Grade** Bot-Schutz
- **Automatische** Dark/Light Mode Anpassung