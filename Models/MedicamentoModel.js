import {conn}  from "../utils/conexao.js";


export const Medicamento = (usuario, farma) =>{
   // const query = " SELECT m.* FROM medicamentos m JOIN farmacia_medicamentos fm ON m.id = fm.medicamento_id WHERE fm.farmacia_id = 3;";
   

   const query = "SELECT medicamentos.*, favoritos_medicamentos.id AS favorito_id from farmacia_medicamentos  join medicamentos on farmacia_medicamentos.medicamento_id = medicamentos.id LEFT join favoritos_medicamentos on favoritos_medicamentos.medicamento_id = medicamentos.id AND favoritos_medicamentos.usuario_id = ? where farmacia_medicamentos.farmacia_id = ?";
    return new Promise((resolve,reject)=>{

        conn.query(query,[usuario,farma],(err, result)=>{
            if(err)  reject (err);
            else resolve(result);
    })
    })
}


export const ComparaMedicamentos = (nome) =>{
    const query = "SELECT m.id AS id_med, m.nome, m.foto,m.disponibilidade AS nome_medicamento,f.nome AS nome_farmacia, f.id AS id_farma m.preco FROM  medicamentos m JOIN  farmacia_medicamentos fm ON m.id = fm.medicamento_id JOIN farmacias f ON fm.farmacia_id = f.id WHERE  m.nome = ? ORDER BY m.preco ASC";

    // ? 'Ibuprofeno'
    return new Promise((resolve, reject)=>{
        conn.query(query,[nome],(err, data)=>{
            if(err) reject(err);
            else resolve(data)
    })
    })
}

//// do lado do gestor

export const AddMedicamento = (dados,farmaId)=>{
    const query = "INSERT INTO medicamentos(id,nome, preco, data_validade, informacoes, tipo, imagem_path,disponibilidade) VALUES(?)";

    const q = "INSERT INTO farmacia_medicamentos(farmacia_id,medicamento_id) VALUES(?)";

    return new Promise((resolve,reject)=>{
    conn.query(query,[dados],(err)=>{
        if(err) {
             reject (err)
              }
        else {
            conn.query(q,[farmaId],(err)=>{
                if(err) reject(err);
                else resolve("medicamento adicionado")
            })
        }

    }) })
}

export const ActualizarMedi = (dados, id)=>{
    const query = "UPDATE medicamentos set nome=?, preco= ?, data_validade = ?, informações=?,tipo=?,imagem_path=?, disponibilidade=? where id=?";

    return new Promise ((resolve, reject)=>{
        conn.query(query, [dados,id], (err)=>{
            if(err) reject( err);
            else resolve("Medicamento actualizado")
        })
})
}


export const DisponivelMed = (dispo,id)=>{
    const query = "UPDATE medicamentos SET disponibilidade = ? WHERE id =?;"

    return new Promise ((resolve, reject)=>{
    conn.query(query, [dispo,id], (err)=>{
        if(err) reject( err);
        else resolve("Medicamento actualizado")
    })
})
  
}

export const DeletarMed = (id) =>{
    const query ="DELETE from medicamentos where id =?"

return new Promise ((resolve,reject) =>{
    conn.query(query,[id],(err)=>{
        if(err) reject( err);
        else resolve("Medicamento apagado com sucesso")

    })
})
    
}