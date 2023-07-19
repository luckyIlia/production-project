import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import {memo, useMemo} from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption;
    value?: string;
    onCHange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
    } = props;

    const optionList = useMemo<SelectOption[]>(() => {
        return options?.map(opt => {
            <option
                className={cls.option}
                value={opt.value}
            >{opt}</option>
        })
    }, [])

    const mods: Mods = {

    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
            >
                <option className={cls.option}>123</option>
                <option className={cls.option}>123</option>
            </select>
        </div>
    );
});
