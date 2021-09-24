import React from 'react'
import { useHistory } from 'react-router-dom';

interface ICardContentProps {
  img?: string,
  price?: string,
  title?: string,
  layout_3?: boolean,
}

const CardContent: React.FC<ICardContentProps> = (props) => {
  const {img, price, title, layout_3} = props;
  const history = useHistory();
  return (
    <div className={`${layout_3?'card__content-1':'card__content'}`}>
      <div className="card__content--img">
        <img 
          src={img} alt="img" className="card__content--img-content"
          onClick={()=> { history.push(`/product/${title}`) }}
          style={{cursor:'pointer'}}
        />
      </div>
      <div className="card__content--title">{title}</div>
      <div className="card__content--price">
        <div className="card__content--price-current">{(price as string).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <div className="card__content--price-discount"> 399,000 </div>
      </div>
      <div className="card__content--button-wapper">
        <div className="card__content--button">
          CHỌN MUA
        </div>
      </div>
    </div>
  )
}

export default CardContent;