import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) =>{
    
    let dialogs = [
        {id : 1, name: 'Salohiddin'},
        {id : 2, name: 'Abduqodir'},
        {id : 3, name: 'Ibrohim'},
        {id : 4, name: 'Shohjahon'},
        {id : 5, name: 'Xurshid'},
        {id : 6, name: 'Abror'}
    ]

    let messages = [
        {id : 1, message: 'Salom'},
        {id : 2, message: 'Ish;aring yaxshimi?'},
        {id : 3, message: "Zo'r"},
        {id : 4, message: "Zo'r"},
        {id : 5, message: "Zo'r"}
    ]

    let delements = dialogs.map (d => <DialogItem name={d.name} id={d.id}/>); 
    let melements = messages.map(m => <Message message={m.message}/>);
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {delements}
            </div>

            <div className={s.messages}>
                {melements}
            </div>
        </div> 
    )
}
export default Dialogs;