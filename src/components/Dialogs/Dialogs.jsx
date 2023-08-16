import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) =>{
    


    let delements = props.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>); 
    let melements = props.messages.map(m => <Message message={m.message}/>);
    
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