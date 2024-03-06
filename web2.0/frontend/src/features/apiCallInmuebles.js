import axios from "axios";
import BASEURL from "../proxy.js";
//Obtiene todos los usuarios
export const getInmuebles = async () => {
  try {
    const res = await axios.get(`${BASEURL}/api/inmueble/find/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

//Obtiene los usuarios por idinventario
export const getInmueble = async (id_inmueble) => {
  try {
    const res = await axios.get(`${BASEURL}/api/inmueble/find/` + id_inmueble);
    return res.data
  } catch (err) {
    return {error: err.message}
  }
};

export const createInmueble = async (inmueble) => {
  try {
    const res = await axios.post(`${BASEURL}/api/inmueble/create/`, inmueble);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const updateInmueble = async (inmueble, id_inmueble) => {
  try {
    const res = await axios.put(
      `${BASEURL}/api/inmueble/update/` + id_inmueble,
      inmueble
    );
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
export const deleteInmueble = async (id_inmueble) => {
  try {
    const res = await axios.delete(
      `${BASEURL}/api/inmueble/delete/` + id_inmueble
    );
    window.location.reload()
    return res.data;
  } catch (err) {
    return { error: err };
  }
};
