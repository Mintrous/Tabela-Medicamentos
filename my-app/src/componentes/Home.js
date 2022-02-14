import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Modal2 from './Modal2'
import Axios from 'axios'

function Home(){
    const [item, setItem] = useState([])
    const [showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev => !prev);
    }

    const [id,setId] = useState(0)

    const [showModal2, setShowModal2] = useState(false)
    const openModal2 = () =>{
        setShowModal2(prev => !prev);}

    useEffect(()=>{
        Axios.get('http://localhost:5555/').then((response)=>{
            setItem(response.data)
        })
    }, [])
  
    return (
            <Monstro>
                <Opcoes id="opcoes">
                    <Cadastrar id="cadastrar" onClick={openModal}>
                        <span>Cadastrar Medicamento</span>
                    </Cadastrar>
                    <Buscar>
                        <span>Buscar medicamento específico</span>
                    </Buscar>
                </Opcoes>
                
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} info={id}/>
                <Title>
                    <span>Tabela de Medicamentos</span>
                </Title>
                <table id="table">
                    <thead>                        
                        <tr>
                            <th>Código</th>
                            <th>Principio Ativo</th>
                            <th>CNPJ</th>
                            <th>Laboratório</th>
                            <th>Registro</th>
                            <th>Produto</th>
                            <th>Apresentação</th>
                            <th>Classe Terapêutica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((itens) =>
                                <tr>
                                    <td onClick={()=>{
                                        openModal2()
                                        setId(itens.id)
                                    }}>
                                        {itens.id}
                                    </td>
                                    <td>
                                        {itens.principio_ativo}
                                    </td>
                                    <td>
                                        {itens.cnpj}
                                    </td>
                                    <td>
                                        {itens.lab}
                                    </td>
                                    <td>
                                        {itens.registro}
                                    </td>
                                    <td>
                                        {itens.produto}
                                    </td>
                                    <td>
                                        {itens.apresentacao}
                                    </td>
                                    <td>
                                        {itens.classe}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </Monstro>
    )
}

export default Home

const Cadastrar = styled.div`
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
    border: 1px solid grey;
    cursor: pointer;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    color: grey;
`
const Buscar = styled.div`
    margin-left: 10px;
    border: 1px solid grey;
    cursor: pointer;
    display: flex;
    align-items: center;  
    padding: 10px; 
    border-radius: 4px;
    transition: transform 0.3s;
    color: grey;
`

const Monstro = styled.div`
    color: #f5f5f5;
    font-size: 24px;
    display: flex;
    padding: 10px;
    margin: 40px;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;

    table{
        width: 100%;
        color: grey;
        border: 1px solid gray;
        border-radius: 5px;
    }


    th, td {
        border-bottom: 1px solid rgba(82, 82, 82, .1);
        font-weight: 300;
        text-align: center;
        padding: 8px;
        font-size: 14px;
        text-transform: uppercase;
    }

    th{
        font-weight: 500;
        font-size: 16px;
        width: 50px;
    }
    td{
        padding: 20px;
        :hover{
            cursor: pointer;
            background-color: rgba(82, 82, 82, .3);
        }
    }
`
const Opcoes = styled.div`
    color: #f5f5f5;
    font-size: 24px;
    display: flex;
    padding: 10px;
    margin: 40px;
`

const Title = styled.div`
    align-items: center;
    width: 100%;
    height: 50px;
    color: grey;
    display: flex;
    span{
        margin-left: 30px;
    }
`