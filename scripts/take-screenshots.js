import fs from 'fs/promises'
import path from 'path'
import puppeteer from 'puppeteer'

const apps = [
  {
    name: 'Hamburgueria do Chefinho',
    url: 'https://hamburgueriadochefinho.com.br/',
    output: 'chefinho.png',
  },
  {
    name: 'Pizzaria Condor',
    url: 'https://pizzariacondor.com.br/',
    output: 'condor.png',
  },
  {
    name: 'Clickin Burger',
    url: 'https://clickinburger.netlify.app/',
    output: 'clickinburger.png',
  },
  {
    name: "ASAT'S Burguer",
    url: 'https://asatsburguer.netlify.app/',
    output: 'asats.png',
  },
]

const outputDir = path.resolve('public', 'apps')
const mobileUserAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
const viewport = {
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  isMobile: true,
}

async function ensureOutputDirectory() {
  await fs.mkdir(outputDir, { recursive: true })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function captureAppScreenshot(browser, app, index, total) {
  const page = await browser.newPage()
  try {
    console.log(`(${index}/${total}) Abrindo ${app.name}: ${app.url}`)
    await page.setViewport(viewport)
    await page.setUserAgent(mobileUserAgent)

    try {
      await page.goto(app.url, { waitUntil: 'networkidle2', timeout: 30000 })
    } catch (error) {
      console.warn(`⚠️  Falha no networkidle2 para ${app.name}, tentando domcontentloaded... (${error.message || error})`)
      await page.goto(app.url, { waitUntil: 'domcontentloaded', timeout: 60000 })
    }

    await sleep(3000)
    await page.evaluate(() => window.scrollTo(0, 0))

    const outputPath = path.join(outputDir, app.output)
    await page.screenshot({ path: outputPath, type: 'png' })
    console.log(`✅ Screenshot salva em public/apps/${app.output}`)
    return true
  } catch (error) {
    console.error(`❌ Falha ao capturar ${app.name}:`, error.message || error)
    return false
  } finally {
    await page.close()
  }
}

async function main() {
  console.log('Iniciando captura de screenshots dos apps...')
  await ensureOutputDirectory()

  const browser = await puppeteer.launch()
  let successCount = 0

  try {
    for (const [index, app] of apps.entries()) {
      const result = await captureAppScreenshot(browser, app, index + 1, apps.length)
      if (result) successCount += 1
    }
  } finally {
    await browser.close()
  }

  console.log('\nResumo:')
  console.log(`- Total de apps: ${apps.length}`)
  console.log(`- Screenshots geradas: ${successCount}`)
  console.log(`- Falhas: ${apps.length - successCount}`)

  if (successCount === apps.length) {
    console.log('Todos os screenshots foram gerados com sucesso!')
  } else {
    console.log('Algumas capturas falharam. Veja os erros acima e execute novamente se necessário.')
  }
}

main().catch((error) => {
  console.error('Erro inesperado ao executar o script:', error)
  process.exit(1)
})
