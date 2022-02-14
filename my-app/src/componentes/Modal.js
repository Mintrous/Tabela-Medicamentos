import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import Axios from 'axios'

function Modal({ showModal, setShowModal }){
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }
  
  const submitForm = () =>{
    Axios.post('http://localhost:5555/',
    {ean, cnpj, principio, laboratorio, registro, produto, apresentacao, classe})
    window.location.reload();
  }

  const [ean, setEan] = useState(0)
  const [cnpj, setCnpj] = useState(0)
  const [principio, setPrincipio] = useState('')
  const [laboratorio, setLaboratorio] = useState('')
  const [registro, setRegistro] = useState('')
  const [produto, setProdut] = useState('')
  const [apresentacao, setApresentacao] = useState('')
  const [classe, setClasse] = useState('')

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h2>Cadastrar Medicamento</h2>
                <input type="text" placeholder="EAN" onChange={(e)=>{setEan(e.target.value)}}></input>
                <input type="text" placeholder="CNPJ" onChange={(e)=>{setCnpj(e.target.value)}}></input>
                <input type="text" placeholder="Princípio Ativo" onChange={(e)=>{setPrincipio(e.target.value)}}></input>
                <input type="text" placeholder="Registro" onChange={(e)=>{setRegistro(e.target.value)}}></input>
                <input type="text" placeholder="Laboratório" onChange={(e)=>{setLaboratorio(e.target.value)}}></input>
                <input type="text" placeholder="Produto" onChange={(e)=>{setProdut(e.target.value)}}></input>
                <input type="text" placeholder="Apresentação" onChange={(e)=>{setApresentacao(e.target.value)}}></input>
                <input type="text" placeholder="Classe Terapêutica" onChange={(e)=>{setClasse(e.target.value)}}></input>
                <button onClick={()=>{
                  submitForm()
                  setShowModal(false)
                }}>Cadastrar</button>
              </ModalContent>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
export default Modal

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
`
const ModalWrapper = styled.div`
    width: 1000px;
    height: 800px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
    z-index: 1000;
    color: #000;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    input{
      width: 90%;
      padding: 10px;
      margin: 20px;
      outline: none;
    }
    button {
        margin-top: 8px;
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: 1px solid grey;
        border-radius: 4px;
        outline: none;
        font-size: 30px;
    }
`