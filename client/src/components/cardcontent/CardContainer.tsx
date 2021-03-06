import React from 'react';
import CardContent from './CardContent';

interface ICardContainerProps {
  content?: any[];
  layout_3?: boolean;
}

const CardContainer: React.FC<ICardContainerProps> = (props) => {
  const data = props.content as any[];

  return (
    <div className="card__container">
      {data.length < 1 ? (
        <div className="text__error">Không có sản phẩm nào được tìm thấy</div>
      ) : (
        data.map((e, index) => (
          <CardContent
            key={index}
            id={e.id}
            title={e.name}
            price={e.price}
            discount={false}
            img={process.env.REACT_APP_API_URL + e?.productImg[0]?.imgPath}
            layout_3={props.layout_3}
          />
        ))
      )}
    </div>
  );
};

export default CardContainer;
