import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('inmobiliariadb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;