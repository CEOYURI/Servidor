import {conn}  from "../utils/conexao.js";


/*export const  CGestores =()=>{
    const query= "SELECT count(*) AS total FROM gestores"
    return new Promise ((resolve, reject)=>{
    conn.query(query,(err, data)=>{
        if(err)  reject (err);
        else resolve(data)

    })})

}*/
export const TodosSubGestores =()=>{
    const query= "SELECT *  FROM subgestores"
    return new Promise ((resolve, reject)=>{
    conn.query(query,(err, data)=>{
        if(err)  reject (err);
        else resolve(data)

    })})

}


export const ObterSubgestorId =(gestorId) =>{
    
    const query= "SELECT * FROM subgestores where id = ? "
    return new Promise ((resolve,reject )=>{
    conn.query(query,[gestorId], (err, data)=>{
        if(err)  reject (err);
        else resolve(data)

    })})
}
export const newSubGestores = (dados)=>{
    const query = "insert into subgestores (nome,email,nome_user,senha,telefone,gestor_id) value (?)"
    return new Promise((resolve, reject)=>{

      conn.query(query,[dados], (err)=>{
          if(err)  reject (err);
          else resolve("Sucess")
  })
  })
}


export const deleteSubGestor = (usuarioId)=>{
    const query = "DELETE  FROM subgestores where `id`=?";
    return new Promise ((resolve,reject)=>{
        conn.query(query,[usuarioId],(err)=>{
            if(err) reject(err)
            else resolve("SubGestor deletado com sucesso")
        })})

}

export const ActuaSubGestor = (dados,usuarioId)=>{
    const query = "UPDATE subgestores SET `nome` =?, `email`=?, `senha`=? , `telefone`=?  WHERE `id` = ?"
    return new Promise ((resolve,reject)=>{
        conn.query(query,[...dados, usuarioId],(err)=>{
            if(err) reject(err)
            else resolve("Actualizado")
        })})

}


// Verificar Subgestor
export const VerficarGestorFarmacia = (subgestor)=>{

    const query = "SELECT f.id AS farmacia_id, f.nome AS farmacia_nome FROM farmacias f JOIN gestores g ON f.id = g.farmacia_id JOIN subgestores sg ON g.id = sg.gestor_id WHERE sg.id = ?"
    return new Promise ((resolve,reject)=>{
        conn.query(query,[subgestor],(err)=>{
            if(err) reject(err)
            else resolve("Actualizado")
        })})


}