import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import LeftMore from '../../components/LeftMore';
import { useTranslation } from 'react-i18next';

const More = () => {
    const {slug} = useParams();
    const { t } = useTranslation('more');
    const MoreList = t('data', {returnObjects: true});
    const MoreData = MoreList[slug]

    return (
        <div className={styles.container}>
                <LeftMore data={MoreData}/>
        </div>
    );
};

export default More;