import styles from './Portfolio.module.scss';
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Portfolio() {

  const { t } = useTranslation();

  const posts = t('posts', { returnObjects: true });

  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMore = (e) => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 4)

    if(visiblePosts === 20) {
      e.target.style.display = "none";
    };
  };


  return (
    <div className={styles.Portfolio}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{t("postsTitle")}</h3>
        <div className={styles.itemsWrapper}>
          {Object.entries(posts).reverse().slice(0, visiblePosts).map(
            (post, i) => (
              <div className={styles.item} key={i}>
              <div className="container">
                <div className={styles.inner}>
                  <img src={post[1].img} alt="img" className={styles.image}/>
                  <div className={styles.info}>
                    <h3 className={styles.subtitle}>{post[1].title}</h3>
                    <div className={styles.badgeList}>
                      <span className={styles.badge}>{post[1].tags.year}</span>
                      <span className={styles.badge}>{post[1].tags.techno1}</span>
                      <span className={styles.badge}>{post[1].tags.techno2}</span>
                      <span className={styles.badge}>{post[1].tags.techno3}</span>
                    </div>
                    <p className={styles.description}>{post[1].text}</p>
                    <div><a href={post[1].url} target="_blank" rel="noreferrer" className={styles.button}>{post[1].btn}</a></div>
                  </div>
                </div>
              </div>
            </div>
            )
          )}
        </div>
        {

          <button className={styles.loadMoreBtn} onClick={loadMore}>{t("loadMoreBtn")}</button>
        }
        
      </div>
    </div>
  );
}

export default Portfolio;
