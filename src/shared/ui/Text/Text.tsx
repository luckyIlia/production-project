import {classNames} from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'


interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

export const Text = ({className}: TextProps) => {

    return (
        <div className={classNames(cls.Text, {}, [className])}>
            <p className={cls.title}></p>
            <p></p>
        </div>
    );
};


