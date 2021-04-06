import React,{Component} from "react";
import './UserOutput.css'
// class UserOutput extends Component {
//    
//    
//    
//     render() {
//         return (
//             <div className={'UserOutput'}>
//                 <p>Jag är en {this.props.animal}</p>
//                 <p>Som hoppar i gräset</p>
//             </div>
//         );
//     }
// }


const UserOutput = (props)=> {
    return (
            <div className={'UserOutput'}>
                <p>Jag är en {props.animal}</p>
                <p>Som hoppar i gräset</p>
            </div>
        );
    
}


export default UserOutput;