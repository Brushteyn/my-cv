import styles from './Portfolio.module.scss';
import { useTranslation } from "react-i18next";

function Portfolio() {

  const { t } = useTranslation();

  const posts = t('posts', { returnObjects: true });

  return (
    <div className={styles.Portfolio}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{t("postsTitle")}</h3>
        <div className={styles.itemsWrapper}>
        {Object.entries(posts).map(
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
      </div>
    </div>
  );
}

export default Portfolio;
