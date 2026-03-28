// Server-side helper to load translations (use in getServerSideProps only)
export function loadTranslations(locale: string, namespaces: string[] = ['common']) {
  const path = require('path')
  const fs = require('fs')
  const translations: Record<string, any> = {}
  
  for (const ns of namespaces) {
    try {
      const filePath = path.resolve(process.cwd(), `public/locales/${locale}/${ns}.json`)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      translations[ns] = JSON.parse(fileContent)
    } catch (error) {
      console.error(`Failed to load translation: ${locale}/${ns}`, error)
      translations[ns] = {}
    }
  }
  
  return namespaces.length === 1 ? translations[namespaces[0]] : translations
}
