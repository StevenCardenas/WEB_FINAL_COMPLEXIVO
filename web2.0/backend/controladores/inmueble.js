import Inmueble from '../modelo/inmueble.js';
await Inmueble.sync();

export const getInmuebles = async (req, res) => {
    try {
        const inmueble = await Inmueble.findAll({
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad','costoMensual']
        });
        return res.json({ data: inmueble });
    } catch (error) {
        return res.json({ error: error.message });
    }
};
export const getInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findOne({
            where: {
                id_inmueble: req.params.id_inmueble
            },
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad','costoMensual']
        });
        if (!inmueble) {
            return res.status(404).json({ error: 'No se ha encontrado ningún inmueble' });
        }
        return res.json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const createInmueble = async (req, res) => {
    try {
        const { nombre_inmueble, direccion, numHabitaciones, tipoPropiedad, costoMensual } = req.body;
        const inmueble = await Inmueble.create({
            nombre_inmueble,
            direccion,
            numHabitaciones,
            tipoPropiedad,
            costoMensual
        }, {
            // Evitar que se incluya el campo id en la consulta de inserción
            fields: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad','costoMensual']
        });
        return res.status(201).json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const updateInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findOne({
            where: {
                id_inmueble: req.params.id_inmueble
            },
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad','costoMensual']
        });
        if (!inmueble) {
            return res.status(404).json({ error: 'No se ha encontrado ningún inmueble' });
        }
        const { nombre_inmueble, direccion, numHabitaciones, tipoPropiedad, costoMensual } = req.body;
        await inmueble.update({
            nombre_inmueble,
            direccion,
            numHabitaciones,
            tipoPropiedad,
            costoMensual
        }, {
            // Evitar que se incluya el campo id en la consulta de inserción
            fields: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad','costoMensual']
        });
        return res.json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const deleteInmueble = async (req, res) => {
    try {
      const inmueble = await Inmueble.findByPk(req.params.id_inmueble);
      if (!inmueble) {
        return res.status(404).json({ error: 'No se ha encontrado ningún inmueble' });
      }
      await inmueble.destroy();
      return res.json({ data: inmueble });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };