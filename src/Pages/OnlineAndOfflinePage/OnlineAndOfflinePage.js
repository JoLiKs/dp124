import React, { useContext } from 'react';
import { DeveloperTitleBlock, FeedbackComponent } from '../../Features';
import { BurstStarIcon, onlineAndOfflinePagesContent } from '../../Shared';
import frontend from '../../Shared/img/online-offline-photo-one.svg';
import python from '../../Shared/img/online-offline-photo-two.svg';
import java from '../../Shared/img/online-offline-photo-three.svg';
import testing from '../../Shared/img/online-offline-photo-four.svg';
import { CoursesContext } from '../../App';
import styles from './OnlineAndOfflinePage.module.scss';

const imgList = [frontend, python, java, testing];

const OnlineAndOfflinePage = ({ typeCourse }) => {
    const courses = useContext(CoursesContext);

    const formatCourses = typeCourse === 'offline' ? 'ofline' : typeCourse;

    const filtredTypesArray = courses?.filter(({ format }) => format === formatCourses);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    {onlineAndOfflinePagesContent[typeCourse].title} <BurstStarIcon />
                </h2>
                <p className={styles.description}>{onlineAndOfflinePagesContent[typeCourse].description}</p>
            </div>
            <div>
                {onlineAndOfflinePagesContent.coursesBlock.map(({ developer, titleJob, pathName }, index) => {
                    return (
                        <DeveloperTitleBlock
                            key={developer}
                            imgList={imgList}
                            developer={developer}
                            titleJob={titleJob}
                            pathName={pathName}
                            index={index}
                            filtredTypesArray={filtredTypesArray || []}
                        />
                    );
                })}
            </div>
            <FeedbackComponent />
        </div>
    );
};

export default OnlineAndOfflinePage;
