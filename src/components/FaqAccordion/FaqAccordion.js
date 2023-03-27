import React, {useState} from "react";
import {AnswerDiv, ButtonWrapper, IconButton, QuestionDiv, Wrapper} from "./FaqAccordion.styles"
import DownIcon from "../../images/icon_down_black.svg"



const FaqAccordion = ({faqContent}) => {

    const [accOpen, setAccOpen] = useState(false);

    const answer = faqContent.answer;

    return(
        <Wrapper>
            <QuestionDiv
                onClick={() => setAccOpen(prevState => !prevState)}
                onKeyDown={() => setAccOpen(prevState => !prevState)}
            >
                <div>
                    {faqContent.question}
                </div>

                <ButtonWrapper>
                    <IconButton>
                        <img src={DownIcon} alt="unfold" className={accOpen? "questionVisible" : null}/>
                    </IconButton>
                </ButtonWrapper>

            </QuestionDiv>
            {accOpen &&
                <AnswerDiv>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: faqContent.answer}}/>
                    </div>
                </AnswerDiv>
            }

        </Wrapper>
    )
}

export default FaqAccordion;