import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components'

function Header(){
    return(
        <Head>
            <h1>GAFio</h1>
            <Monstro>
                <Notificacao>
                    <h1>Notificações</h1>
                    <NotificationsNoneIcon></NotificationsNoneIcon>
                </Notificacao>
                
                <Usuario>
                    <h1>Usuário</h1>
                    <PersonIcon></PersonIcon>
                </Usuario>
            </Monstro>  
        </Head>
    )
}export default Header

const Head = styled.div`
    h1{
        padding: 15px;
        justify-content: center;
        font-size: 28px;
        color: #f5f5f5;
    }
    background-image: linear-gradient(90deg,#426980,#bad6ff);
    display: flex;
    justify-content: space-between;
    height: 70px;
`
const Notificacao = styled.div`
    margin-right: 10px;
    border: 1px solid grey;
    cursor: pointer;
    display: flex;
    align-items: center;  
    padding: 10px; 
    border-radius: 4px;
    transition: transform 0.3s;
`
const Usuario = styled.div`
    display: flex;
    margin-left: 10px;
    border: 1px solid grey;
    cursor: pointer;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
`
const Monstro = styled.div`
    color: #f5f5f5;
    font-size: 24px;
    display: flex;
    padding: 10px;
`