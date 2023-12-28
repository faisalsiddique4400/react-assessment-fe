import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './index.scss';
const NotFound = () => {
    const navigate =useNavigate();
    const { t } = useTranslation('translation', {
        keyPrefix: 'NotFound',
    });
    return (
        <div className='emptylist-container'>
            <div className='emptylist-content'>
                <h2 className="">{t("title")}</h2>
            </div>

        </div>
    )
}

export default NotFound;
