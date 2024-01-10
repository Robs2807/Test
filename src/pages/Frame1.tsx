import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.section2Parent}>
      <div className={styles.section2}>
        <div className={styles.popularExercises}>Popular Exercises</div>
        <div className={styles.seeMoreExercises}>SEE MORE EXERCISES</div>
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-6@2x.png" />
          <div className={styles.treadmill}>Treadmill</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupChild} alt="" src="/group-61@2x.png" />
          <div className={styles.treadmill}>Running</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupChild} alt="" src="/group-62@2x.png" />
          <div className={styles.treadmill}>Stretching</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <img className={styles.groupChild} alt="" src="/group-63@2x.png" />
          <div className={styles.treadmill}>Lifting</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
        <div className={styles.groupParent2}>
          <img className={styles.groupChild} alt="" src="/group-64@2x.png" />
          <div className={styles.treadmill}>Yoga</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
        <div className={styles.groupParent3}>
          <img className={styles.groupChild} alt="" src="/group-65@2x.png" />
          <div className={styles.treadmill}>PushUp</div>
          <div className={styles.estCalories}>{`250 est calories `}</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.svg"
            />
            <div className={styles.div}>58:24</div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3Child} />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.getStarted}>Get Started</div>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur
          adipiscing.
        </div>
        <img className={styles.section3Item} alt="" src="/group-141@2x.png" />
        <div className={styles.workoutProgramMadeContainer}>
          <p className={styles.workout}>Workout</p>
          <p className={styles.workout}>Program</p>
          <p className={styles.workout}>Made</p>
          <p className={styles.workout}>For You</p>
        </div>
        <img className={styles.section3Inner} alt="" src="/group-146@2x.png" />
        <img className={styles.section3Child1} alt="" src="/group-147@2x.png" />
        <img className={styles.section3Child2} alt="" src="/group-142@2x.png" />
        <div className={styles.samanthaWilliamParent}>
          <div className={styles.samanthaWilliam}>Samantha William</div>
          <div className={styles.trainer}>Trainer</div>
        </div>
        <div className={styles.karenSummerParent}>
          <div className={styles.samanthaWilliam}>Karen Summer</div>
          <div className={styles.trainer}>Trainer</div>
        </div>
        <div className={styles.jonathanWiseParent}>
          <div className={styles.samanthaWilliam}>Jonathan Wise</div>
          <div className={styles.trainer}>Trainer</div>
        </div>
      </div>
      <div className={styles.graphicDesignParent}>
        <div className={styles.graphicDesign}>Workout at Home</div>
        <div className={styles.courses}>15 videos</div>
        <div className={styles.div6}>01</div>
        <img className={styles.groupChild8} alt="" src="/group-4@2x.png" />
        <img className={styles.pathIcon} alt="" src="/path@2x.svg" />
        <div className={styles.photography}>Stay Strong and Fit</div>
        <div className={styles.courses1}>48 videos</div>
        <div className={styles.div7}>02</div>
        <img className={styles.groupChild9} alt="" src="/group-4@2x.png" />
        <img className={styles.pathIcon1} alt="" src="/path@2x.svg" />
        <div className={styles.illustration}>High Intensity</div>
        <div className={styles.courses2}>25 videos</div>
        <div className={styles.div8}>03</div>
        <img className={styles.groupChild10} alt="" src="/group-4@2x.png" />
        <img className={styles.pathIcon2} alt="" src="/path@2x.svg" />
        <img className={styles.pathIcon3} alt="" src="/path@2x.svg" />
        <div className={styles.webDevelopment}>Simple Workout</div>
        <div className={styles.webDevelopment1}>Burn Calories</div>
        <img className={styles.groupChild11} alt="" src="/group-5@2x.png" />
        <div className={styles.courses3}>35 videos</div>
        <div className={styles.courses4}>35 videos</div>
        <div className={styles.div9}>04</div>
        <div className={styles.div10}>05</div>
        <img className={styles.groupChild12} alt="" src="/group-4@2x.png" />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.section1}>
          <img className={styles.section1Child} alt="" src="/group-2@2x.png" />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild13} />
            <div className={styles.groupChild14} />
            <div className={styles.new}>NEW</div>
            <div className={styles.highIntensityWorkout}>
              High Intensity workout to burn calories
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.getStarted1}>Get Started</div>
          </button>
          <div className={styles.button2}>
            <div className={styles.preview}>Preview</div>
          </div>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <div className={styles.div11}>38:14</div>
            <div className={styles.time}>TIME</div>
            <div className={styles.div12}>165</div>
            <div className={styles.estCalories6}>EST CALORIES</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.workout1}>WORKOUT</div>
          <div className={styles.trainers}>TRAINERS</div>
          <div className={styles.pricing}>PRICING</div>
          <div className={styles.login}>LOGIN</div>
          <div className={styles.exercises}>EXERCISES</div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
