import s from './Portfolio.module.scss';

function Portfolio(props) {
  let allPosts = props.posts.map(function(item) {
    return (
      <div className={s.item}>
        <div className="container">
          <div className={s.inner}>
            <img src={item.img} alt="img" className={s.image}/>
            <div className={s.info}>
              <h3 className={s.subtitle}>{item.title}</h3>
              <div className={s.badgeList}>
                <span className={s.badge}>{item.tags.year}</span>
                <span className={s.badge}>{item.tags.techno1}</span>
                <span className={s.badge}>{item.tags.techno2}</span>
                <span className={s.badge}>{item.tags.techno3}</span>
              </div>
              <p className={s.description}>{item.text}</p>
              <div><a href={item.link} target="_blank" rel="noreferrer" className={s.button}>Перейти на сайт</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={s.Portfolio}>
      <div className={s.inner}>
        <h3 className={s.title}>Некоторые из моих работ:</h3>
        <div className={s.itemsWrapper}>{ allPosts }</div>        
      </div>
    </div>
  );
}

export default Portfolio;
