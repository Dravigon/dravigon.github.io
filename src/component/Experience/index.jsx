import React, { PureComponent } from 'react'

const Experience = React.forwardRef((props,ref)=>{
    return (
        <div className="card-75 experience card-sm-100" ref={ref}>
                <div className="title">My Hobby projects</div>
                <div>Whatsapp analyser</div>
                <div>Letter</div>
                <div>Tortinental</div>
                <div>Sudoku solver</div>
                <div>
                    <a href="https://github.com/Dravigon/">For more please visit my github--></a>
                </div>
            </div>
    )
});

export default Experience;