import {useLocation} from 'react-router-dom';

function UD1() {
    const location = useLocation()
    const name=location.state.name

    return (
        <div>
            <div style={{padding:10}}>
            <h1 style={{textAlign:'center'}}> Wellcome {name}</h1>
            </div>
            
        </div>
    );
}

export default UD1;