import fs from 'node:fs'
import path from 'node:path'
import { Sequelize, DataTypes } from 'sequelize'
const dbConfig = require("../config/db.config.ts");

const db: any = {}
const basename = path.basename(__filename)

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'postgres',
    port: dbConfig.port,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize;

module.exports = db;



