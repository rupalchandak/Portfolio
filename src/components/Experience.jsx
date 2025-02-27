import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <p className={styles.heroSubText}>
        Work Experience
      </p>

     </motion.div>
    </>
  )
}

export default Experience