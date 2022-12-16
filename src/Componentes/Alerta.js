import Alert from 'react-bootstrap/Alert';

function Alerta(props){
    return(
        <Alert key="exito" variant="info">
            {props.message}
        </Alert>
  
    )
}

export default Alerta;