import React from 'react'
import './Showcase2Container.css';

export const Showcase2Container = (props) => {
    return <>
        <div data-testid="showcase-container" className="showcase2-container">
            <div className="showcase">
                <div className="subcol-containers txt-container">
                    <div className="feature-text mobfeaturetext">
                        <h1 className="section-title"><div className="section-title-span">{props.item.title} </div></h1>
                        <p className="section-left">{props.item.content} </p>
                    </div>
                </div>
                <div className="subcol-containers imgContainer">
                    {props.item.showdowImage &&
                        <img className="showdowImage" src={props.item.showdowImage} alt='pic' />
                    }
                    <img className="showcase1pic img" src={props.item.image} alt='pic' style={{ position: 'relative' }} />
                    <span className={"num number" + (props.index + 1)}>{props.index + 1}</span>
                </div>
            </div>
        </div>
    </>
}
