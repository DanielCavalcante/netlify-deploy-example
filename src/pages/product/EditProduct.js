import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'

const EditProdut = (props) => {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        buscarProduto()
    }, [])

    const buscarProduto = async () => {
        const resposta = await axios.get(`http://localhost:3001/produtos/${id}`)
        setTitulo(resposta.data.titulo)
        setDescricao(resposta.data.descricao)
        setPreco(resposta.data.preco)
    }

    const editarProduto = async (event) => {
        event.preventDefault()
        const produto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco 
        }
        const resposta = await axios.put(`http://localhost:3001/produtos/${id}`, produto)
        if (resposta.status == 200) {
            navigate("/products");
        }
    }

    return (
        <div>
            <h1>Editar produto</h1>
            <Link to="/products">
                <button>
                    Voltar
                </button>
            </Link> 
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nome do produto" 
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição do produto" 
                    value={descricao} 
                    onChange={(event) => setDescricao(event.target.value)}
                />
            </div>
            <div>
                <label>Preço:</label>
                <input 
                    type="text" 
                    name="preco" 
                    placeholder="Preço do produto" 
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                />
            </div>
            <button onClick={(e) => editarProduto(e)}>Atualizar</button>
        </div>
    )
}

export default EditProdut