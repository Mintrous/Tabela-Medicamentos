import React, {useRef,useState} from 'react';
import styled from 'styled-components'
import Axios from 'axios'

function Modal2({ showModal2, setShowModal2, info }){

  const modalRef = useRef();
  
  const [novoid,setnovoid] = useState(0)
  const [id,setid] = useState(0)

  const closeModal2 = e => {
    if (modalRef.current === e.target) {
      setShowModal2(false);
    }
  }

  const deleteMed = () =>{
    Axios.delete(`http://localhost:5555/${info}`)
    window.location.reload();
  }

  const updateMed = () =>{
    Axios.put(`http://localhost:5555/`, {id,novoid})
    window.location.reload();
    console.log(id)
    console.log(novoid)
  }

  return (
    <>
      {showModal2 ? (
        <Background onClick={closeModal2} ref={modalRef}>
            <ModalWrapper showModal2={showModal2}>
              <ModalContent>
                <Delete onClick={()=>{
                    deleteMed()
                    setShowModal2(false)
                }}>Excluir medicamento
                </Delete>
                <Update onClick={()=>{
                    document.getElementById('novoean').style.display = 'block'
                    document.getElementById('butao').style.display = 'flex'
                    setid(info)
                }}>Atualizar medicamento  
                </Update>
                <NovoEan placeholder="Digite o novo EAN" id="novoean" onChange={(e)=>{setnovoid(e.target.value)}}></NovoEan>
                <Butao id="butao" onClick={()=>{
                    updateMed()
                    setShowModal2(false)
                }}>Atualizar
                </Butao>
              </ModalContent>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
export default Modal2

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
`
const ModalWrapper = styled.div`
    width: 500px;
    height: 350px;
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
    margin: 20px;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`
const Delete = styled.div`
    :hover{
      background-color: rgba(255, 51, 51, .9);
    }
    transition: 0.3s;
    background-color: rgba(255, 51, 51, .8);
    border-radius: 4px;
    cursor: pointer;
    width: 60%;
    text-align: center;
    margin: 20px;
` 

const Update = styled.div`
    :hover{
      background-color: rgb(51, 153, 255, .9);
    }
    transition: 0.3s;
    background-color: rgb(51, 153, 255, .8);
    border-radius: 4px;
    cursor: pointer;
    width: 60%;
    text-align: center;
    maring-bottom: 15px;
`

const NovoEan = styled.input`
    width: 60%;
    margin-top: 50px;
    padding: 10px;
    display: none;
`

const Butao = styled.div`
    :hover{
      background-color: rgba(51, 204, 51, .9);
    }
    background-color: rgba(51, 204, 51, .6);
    transition: 0.3s;
    display: none;
    border-radius: 4px;
    margin: 20px;
    padding: 0 10px 0 10px;
    cursor: pointer;
`