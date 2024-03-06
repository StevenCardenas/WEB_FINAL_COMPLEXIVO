import sequelize from './index.js';
import { DataTypes } from 'sequelize';

const Inmueble = sequelize.define('inmuebles', {
    id_inmueble: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre_inmueble: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    numHabitaciones: {
        type: DataTypes.INTEGER
    },
    tipoPropiedad: {
        type: DataTypes.STRING
    },
    costoMensual: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false, // Desactivar los campos createdAt y updatedAt
    tableName: 'inmuebles', // Nombre de la tabla en la base de datos
    freezeTableName: true, // Evitar que Sequelize pluralice el nombre de la tabla
    autoIncrement: false
});

export default Inmueble;