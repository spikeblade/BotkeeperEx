
import { Sequelize} from 'sequelize'
import config from '../config/db.config'

const sequelizeConnection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'postgres',
    port: config.port,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

export default sequelizeConnection;



