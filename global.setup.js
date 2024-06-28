import { setCredentials } from '@evinced/js-playwright-sdk'

async function globalSetup(config) {
  try {
    await setCredentials({
      serviceId: process.env.EVINCED_SERVICE_ID,
      secret: process.env.EVINCED_API_KEY,
    })
  } catch (error) {
    throw new Error(
      'Evinced SDK authorization failure. Check env EVINCED_SERVICE_ID and EVINCED_API_KEY'
    )
  }
}

export default globalSetup
