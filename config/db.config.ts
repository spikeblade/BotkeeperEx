import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface EnvironmentConfig {
    host: string,
    username: string,
    password: string,
    database: string,
    port: number,
    dialect: string
}

// Loading process.env as ENV interface

const getConfig = (): EnvironmentConfig => {
  return {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialect: 'postgres',
      port: process.env.DB_PORT,
  }
}

const getSanitizedConfig = (config: EnvironmentConfig): EnvironmentConfig => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config
}

const config = getSanitizedConfig(getConfig())

export default config
