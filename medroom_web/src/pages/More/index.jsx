import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import MoreList from './data';
import LeftMore from '../../components/LeftMore';
import RightMore from '../../components/RightMore';

const More = () => {
    const {slug} = useParams()
    const MoreData = MoreList[slug]

    return (
        <div className={styles.container}>
                <LeftMore data={MoreData}/>
                <RightMore data={MoreData.infoStaff}/>
        </div>
    );
};

export default More;