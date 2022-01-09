import React from 'react';
import content from '../../content/content.json';
import "./style.scss"

const SkillList = () => {

    const keys = Object.keys(content);
    console.log(content)
    const firstArraySize = Math.floor(keys.length / 2);
    const firstArray = keys.slice(0,firstArraySize+1);
    const secondArraySize = keys.slice(firstArraySize+1, keys.length);
    return (
        <div className="skill-container">
            <ul> {
                firstArray.map((item) => {
                    return <li> {item}
                        <ul> {
                            content[item].map(values => {
                                return <li>{values}</li>
                        })
                        } </ul>
                    </li>
            })
            } </ul>
            <ul> {
                secondArraySize.map((item) => {
                    return <li> {item}
                        <ul> {
                            content[item].map(values => {
                                return <li>{values}</li>
                        })
                        } </ul>
                    </li>
            })
            } </ul>
        </div>
    );
}

export default SkillList;
