import React from 'react';
import Message from './Message/Message';
import SubMessage from './Message/SubMessage/SubMessage';

function MessageScroll(props){
    return ( 
        <>
        <Message user='Anonymous' editable={false} message = 'NICE VID' likes ={25}/>
        <div className='bottomBar'>
        <div className = 'loader'/>
        </div>
        </>
     );
}   
 
export default MessageScroll;