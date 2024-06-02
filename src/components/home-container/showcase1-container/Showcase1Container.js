import React from 'react'
import './Showcase1Container.css';

export const Showcase1Container = (props) => {
  return <>
    <div data-testid="showcase-container" className="showcase1-container">
      <div className="showcase">
        <div className="subcol-containers">
          <span className={"num number" + (props.index + 1)}>{props.index + 1}</span>
          <img className={"showcase1pic showcase1pic" + (props.index + 1)} src={props.item.image} alt='pic' />
        </div>
        <div className="subcol-containers">
          <div className="feature-text ">
            <h1 className={"section-title section-title" + (props.index + 1)}>{props.item.title} </h1>
            <p className={"section-left section-left" + (props.index + 1)}>{props.item.content} </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
