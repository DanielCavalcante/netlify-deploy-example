import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListProducts = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        recuperarProdutos()
    }, [])

    const recuperarProdutos = async () => {
        const resposta = await axios.get('http://localhost:3001/produtos')
        setProdutos(resposta.data)
    }

    const deletarProduto = async (id) => {
        const resposta = await axios.delete(`http://localhost:3001/produtos/${id}`)
        setProdutos(resposta.data)
    }

    const preencheTabela = () => {
        return produtos.map((produto) => (
            <tr>
                <td>{produto._id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>
                    <Link to={`/products/edit/${produto._id}`} produto={produto}>
                        <button>Editar</button>
                    </Link>
                    <button onClick={() => deletarProduto(produto._id)}>Excluir</button>
                </td>
            </tr>
          ))
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <Link to="/products/create">
                    <button>
                        Cadastrar
                    </button>
                </Link>
            </div>
            {produtos.length > 0 ? <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome do produto</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {preencheTabela()}
                </tbody>
            </table> : "Carregando produtos..."}
            
        </div>
    )
}

export default ListProducts