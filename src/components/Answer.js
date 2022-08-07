import React from 'react'

export default function Answer({ handleSubmitAnswer, formRef }) {
    return (
        <div>
            <form onSubmit={handleSubmitAnswer} ref={formRef}>
                <input className='answerInputBox' type="text" name='answer' placeholder='Write your answer here...' required /><br />
                <input className='submitButton' type="submit" value="Submit" />
            </form>
        </div>
    )
}
