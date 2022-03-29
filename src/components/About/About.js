import s from './About.module.scss';
import Description from './Description/Description';
import Factbox from './Factbox/Factbox';
import Introduction from './Introduction/Introduction';
import Skillbox from './Skillbox/Skillbox';

function About() {
  return (
    <div className={s.About}>
      <Introduction/>
      <Factbox/>
      <Description/>
      <Skillbox/>
    </div>
  );
}

export default About;
