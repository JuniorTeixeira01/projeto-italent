import lista  from "./data.js";

const cards = document.querySelectorAll('.card');

lista.map((item) =>{
    console.log(item.id)
    console.log(item.nome)
    console.log(item.descricao)
})





/* <div className='listas'>
                {selectClick.map((produto) =>
                <ItemIngrediente 
                key={produto.id}
                nome={produto.nome}
                imagem={produto.imagem}/>
                )}
            </div> */