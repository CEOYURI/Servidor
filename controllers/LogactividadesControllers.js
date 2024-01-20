import { addLog, ObterLog } from "../Models/logactividadesModels.js"


export const criaLog = async (req, res) =>{
    
    const ad = 'administrador'
    const detalhes = "acção realizada pelo administrador"
    const {tipo} = req.body
    const values = [
        ad,
        req.body.usuario,
        req.body.caminho,
        detalhes
    ]
    const data = await addLog(values,tipo)
    res.status(200).json({data})
}

export const ObterLogactividades = async (req, res) =>{

    const tipo  = "administrador"
    const {admin} = req.params
   
    const data = await ObterLog(tipo,admin)

    res.status(200).json({data})
}

