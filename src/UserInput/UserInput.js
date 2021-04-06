import React, {Component} from "react";
//
// class UserInput extends Component {
//     render() {
//        
//         const style={
//            
//             backgroundColor:'blue'
//            
//         }
//        
//         return (
//             <div>
//                 <input style={style} onChange={this.props.change} value={this.props.animal} type="text"/>
//             </div>
//         );
//     }
// }
//
// export default UserInput;
//

 const UserInput =(props)=>{

    const style = {

            backgroundColor:'blue'

        }

        return (
            <div>
                <input style={style} onChange={props.change} value={props.animal} type="text"/>
            </div>
        );    
}

export default UserInput;