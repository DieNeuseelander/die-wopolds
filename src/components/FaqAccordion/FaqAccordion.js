import React, {useState} from "react";
import {AnswerDiv, ButtonWrapper, IconButton, QuestionDiv, Wrapper} from "./FaqAccordion.styles"
import DownIcon from "../../images/icon_down.svg"


const FaqAccordion = ({faqContent}) => {

    const [accOpen, setAccOpen] = useState(false);

    return(
        <Wrapper>
            <QuestionDiv
                onClick={() => setAccOpen(prevState => !prevState)}
                onKeyDown={() => setAccOpen(prevState => !prevState)}
            >{
                faqContent.question}

                <ButtonWrapper>
                    <IconButton>
                        <img src={DownIcon} alt="unfold" className={accOpen? "questionVisible" : null}/>
                    </IconButton>
                </ButtonWrapper>

            </QuestionDiv>
            {accOpen &&
                <AnswerDiv>
                    <div>{faqContent.answer}</div>
                </AnswerDiv>
            }

        </Wrapper>
    )
}

export default FaqAccordion;