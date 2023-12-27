import React from 'react'
import './index.scss';
import { useTranslation } from 'react-i18next';
const EmptyList = () => {
    const { t } = useTranslation('translation', {
        keyPrefix: 'Empty List',
    });
    return (
        <div className='emptylist-container'>
            <div className='emptylist-content'>
                <h2 className="">{t("title")}</h2>
                <button type="submit">{t("btn text")}</button>
            </div>

        </div>
    )
}

export default EmptyList;
