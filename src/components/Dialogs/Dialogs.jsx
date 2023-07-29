import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem =  (props) =>{
        let path = "/dialogs/" + props.id;


    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
        return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) =>{
    let dData = [
        {id : 1, name: 'Salohiddin'},
        {id : 2, name: 'Abduqodir'},
        {id : 3, name: 'Ibrohim'},
        {id : 4, name: 'Shohjahon'},
        {id : 5, name: 'Xurshid'},
        {id : 6, name: 'Abror'}
    ]
    let mData = [
        {id : 1, message: 'Salom'},
        {id : 2, message: 'Ish;aring yaxshimi?'},
        {id : 3, message: "Zo'r"},
        {id : 4, message: "Zo'r"},
        {id : 5, message: "Zo'r"}
    ]
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dData[0].name} id={dData[0].id}/> 
                <DialogItem name={dData[1].name} id={dData[1].id}/> 
                {/* <DialogItem name={dData[2].name} id={dData[2].id}/> 
                <DialogItem name={dData[3].name} id={dData[3].id}/> 
                <DialogItem name={dData[4].name} id={dData[4].id}/> 
                <DialogItem name={dData[5].name} id={dData[5].id}/>  */}
            </div>
            <div className={s.messages}>
                <Message message="Salom"/>
                <Message message="Ishlaring yaxshimi?"/>
                {/* <Message message="Zo'r"/>
                <Message message="Zo'r"/>
                <Message message="Zo'r"/> */}
            </div>

        </div> 
    )
}
export default Dialogs;