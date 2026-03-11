<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Landing page (React + Vite)

Projeto de landing page pronto para desenvolvimento local e deploy no GitHub Pages.

## Rodar localmente

**Pré-requisito:** Node.js 20+

1. Instale dependências:
   ```bash
   npm install
   ```
2. (Opcional) Configure variáveis de ambiente com base em `.env.example`.
3. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```

## Build de produção

```bash
npm run build
```

## Deploy no GitHub Pages

Este repositório já inclui workflow em `.github/workflows/deploy-pages.yml`.

1. Faça push para a branch `main`.
2. No GitHub, vá em **Settings > Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Aguarde o workflow **Deploy to GitHub Pages** finalizar.

### Observação importante

O `vite.config.ts` está com `base: './'`, o que garante que os assets funcionem corretamente em subpastas (cenário comum do GitHub Pages em repositórios de projeto).
