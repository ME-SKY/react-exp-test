import React, {useEffect, useMemo, useState} from "react";
import './Test.css'
import {Checkbox, CheckboxGroup} from 'rsuite';
import TextArea from "../ui-kit/text-area";

function Test(props) {
    const {questionNumber, toggleNext} = props;

    const question = props.questionData;

    const [plainTextAnswer, setPlainTextAnswer] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setSelectedOptions([]);  //flush the answers on question changed
    }, [question]);

    const availableOptions = useMemo(() => {
        return (question && question.options) ? question.options.map((option) =>
            <Checkbox className={'test-option'}
                      key={option}
                      value={option}>
                {option}
            </Checkbox>) : [];
    }, [question]);

    return (
        question && <div className='test'>
            <div className="test-content">
                <div className='test-question'>
                    <div className="question-text">
                        {questionNumber + 1}. {question.text}
                    </div>

                    <div className="question-image">
                        {/*some component that illustrates the image*/}
                    </div>
                </div>
                <div className='test-answer-options'>
                    {
                        question.type === 'test' && <CheckboxGroup id={`question-${questionNumber}`}
                                                                   value={selectedOptions.current}
                                                                   onChange={(answers) => setSelectedOptions(answers)}>{
                            availableOptions
                        }</CheckboxGroup>
                    }
                    {
                        question.type === 'question' && <TextArea value={plainTextAnswer} onChange={val => setPlainTextAnswer(val)} />
                    }
                </div>
                <div className="actions">
                    <button className={'action-button'} onClick={() => toggleNext(questionNumber + 1)}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default Test;
