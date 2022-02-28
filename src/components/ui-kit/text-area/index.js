import React from 'react';
import './text-area.css'
import Input from "rsuite/Input";

function UITextArea(props) {
    return (
        <div className={'ui-text-area'}>
            <Input as={'textarea'} {...props} classPrefix={'t-area'}/>
        </div>
    );
}


export default UITextArea;
