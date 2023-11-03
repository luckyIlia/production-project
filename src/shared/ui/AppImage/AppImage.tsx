import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './AppImage.module.scss'
import { memo } from 'react'; 

interface AppImageProps {
    className?: string;
}

export const AppImage = memo((props: AppImageProps) => {
    const { className } = props;
    const {t} = useTranslation();
    
    return (
        <div className={classNames(cls.AppImage, {}, [className])}>

        </div>
    );
});


