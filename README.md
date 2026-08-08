# Charlesyyun.github.io

Unified bilingual academic website for Yun (Charles) Ye and the Traffic Safety and Intelligence Laboratory (TSI Lab), based solely on [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio).

## Routes

- English personal site: `/`
- Chinese personal site: `/zh-cn/`
- English TSI Lab site: `/tsilab/`
- Chinese TSI Lab site: `/zh-cn/tsilab/`
- Legacy Chinese URL: `/cn_charlesyyun.github.io/` redirects to `/zh-cn/`

Publications, news, team records, and gallery metadata live in `_data`. Images are shared from `assets/img`.

## Local development

```bash
docker compose up
```

The GitHub Actions workflow builds the site and publishes the generated `_site` directory to the `gh-pages` branch.
