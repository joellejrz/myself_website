# MYSÉLF — Website Deployment Guide (Cloudflare Pages)

Dieses Dokument erklärt dir Schritt für Schritt, wie du die fertige Website auf **Cloudflare Pages** veröffentlichst.

## 1. Vorbereitung (GitHub)
Cloudflare Pages funktioniert am besten, wenn dein Code auf GitHub liegt. 
1. Erstelle ein neues, privates Repository auf GitHub.
2. Lade deinen Code dort hoch (Push).

## 2. Cloudflare Pages einrichten
1. Logge dich in dein [Cloudflare Dashboard](https://dash.cloudflare.com/) ein.
2. Gehe zu **Workers & Pages** -> **Overview** -> **Create** -> **Pages** -> **Connect to Git**.
3. Wähle dein GitHub-Repository aus.

## 3. Build-Einstellungen
Nutze diese exakten Einstellungen im Cloudflare Dashboard:

*   **Framework Preset**: `Next.js`
*   **Build command**: `npm run build`
*   **Build output directory**: `out`

## 4. Umgebungsvariablen (Environment Variables)
Falls du später APIs (wie Mailchimp/Brevo) nutzt, kannst du sie dort unter **Settings** -> **Environment variables** hinterlegen.

## 5. Domain verknüpfen
Sobald die Seite live ist (unter einer `*.pages.dev` Adresse), kannst du unter **Custom domains** deine eigene Domain (z.B. `thisismyself.com`) verknüpfen. Cloudflare kümmert sich automatisch um das SSL-Zertifikat.

---

**Hinweis:** Die Seite ist so vorkonfiguriert (`output: 'export'`), dass sie extrem schnell lädt und keine Server-Kosten verursacht!
