# Yashas Gaikwad — Developer Portfolio

A futuristic dark-themed personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Quick Customization

1. **Profile Photograph**:
   - Place your photo inside `public/` (for example `public/profile.jpg`).
   - Update `identity.profileImage` in `src/data/portfolio.ts` to `"/profile.jpg"`.
   - You can also click **Preview Photo** in the Hero section to preview an image directly in the browser.

2. **Resume PDF**:
   - Replace `public/Yashas_Gaikwad_Resume.pdf` with your actual resume PDF (keep the same filename or update `resume.fileUrl` in `src/data/portfolio.ts`).

3. **Project Links, Screenshots & Social Channels**:
   - Edit `src/data/portfolio.ts` to replace placeholder `githubUrl`, `liveUrl`, `thumbnail`, `socialLinks`, and achievement slots (`Hackathon Participation`, `Technical Certificates`).

4. **Working Contact Form**:
   - Copy `.env.example` to `.env`.
   - Set `VITE_CONTACT_ENDPOINT` to your Formspree / Web3Forms endpoint or deploy `api/contact.ts` with `RESEND_API_KEY` and `CONTACT_TO_EMAIL` set.

5. **Originkit Cursor Ring Field**:
   - Once the `originkit` MCP server is connected and `originkit: get cursor-ring-field` is run, import and mount `<CursorRingField />` in `src/App.tsx` at the marked slot.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

