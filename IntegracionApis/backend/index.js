const express = require("express");
const Mestudiantes = require("./modelos/Mestudiantes");

const app = express();

app.use(express.json());

app.get("/mestudiantes", async (req, res) => {
  try {
    const mestudiantes = await Mestudiantes.findAll();

    if (mestudiantes.length > 0) {
      return res.status(200).json({
        message: "registros de maestros obtenidos correctamente",
        data: mestudiantes,
      });
    } else {
      res.status(400).json({
        message: "No se encontraron registros de maestros",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los registros de maestros",
      error: error.message,
    });
  }
});

app.post("/mestudiantes", async (req, res) => {
  try {
    const mestudiante = await Mestudiantes.create(req.body);

    if (mestudiante) {
      return res.status(200).json({
        message: "Registro de maestro creado correctamente",
        data: mestudiante,
      });
    } else {
      res.status(400).json({
        message: "Error al crear el registro de maestro",
        error: "No se pudo crear el registro de maestro",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el registro de maestro",
      error: error.message,
    });
  }
});

app.put("/mestudiantes/:id", async (req, res) => {
  try {
    const mestudiante = await Mestudiantes.update(req.body, {
      where: {
        idMaestro: req.params.id,
      },
    });

    if (mestudiante) {
      return res.status(200).json({
        message: "registro de maestro actualizado correctamente",
        data: mestudiante,
      });
    } else {
      res.status(400).json({
        message: "Error al actualizar el registro de maestro",
        error: "No se pudo actualizar el registro de maestro",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el registro de maestro",
      error: error.message,
    });
  }
});

app.delete("/mestudiantes/:id", async (req, res) => {
  try {
    const mestudiante = await Mestudiantes.destroy({
      where: {
        idMaestro: req.params.id,
      },
    });

    if (mestudiante) {
      return res.status(200).json({
        message: "Registro de maestro eliminado correctamente",
        data: mestudiante,
      });
    } else {
      res.status(400).json({
        message: "Error al eliminar el registro de maestro",
        error: "No se pudo eliminar el registro de maestro",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el registro de maestro",
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});
