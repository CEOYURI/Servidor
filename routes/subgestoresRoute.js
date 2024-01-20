import express from 'express'
import { CTodosSubGestores, CriarSubGestor, ActualizarSubGestor, DeletaSubGestor, ObterSubGes } from '../controllers/subgestoresControllers.js'


const routerSubgestor = express.Router()

routerSubgestor.get("/subtodos", CTodosSubGestores)
routerSubgestor.get("/subtodos/:id", ObterSubGes)

routerSubgestor.post("/subcges", CriarSubGestor)

routerSubgestor.put("/subactuages/:id", ActualizarSubGestor)

routerSubgestor.delete("/subdelges/:id", DeletaSubGestor)

export default routerSubgestor;
