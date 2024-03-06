import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('inmobiliariadb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
await sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
 .catch(err => {
 console.error('Unable to connect to the database:', err);
});

export default sequelize;