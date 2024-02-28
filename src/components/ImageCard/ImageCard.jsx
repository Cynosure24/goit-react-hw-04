import css from './ImageCard.module.css';

export const ImageCard = ({ picSmall, picRegular, description, openModal }) => {
  return (
    <div 
    className={css.imageCard}
    onClick={() => openModal(picRegular, description)}
    >
      <img
        className={css.img}
        src={picSmall}
        alt={description}
        loading="lazy"
      />
    </div>
  );
};
