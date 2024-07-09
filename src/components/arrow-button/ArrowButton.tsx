import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from "clsx";

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
    onClick: (data: boolean) => void;
    isOpen: boolean;
};

export const ArrowButton = ({onClick, isOpen}: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role = 'button'
			aria-label = 'Открыть/Закрыть форму параметров статьи'
			tabIndex = {0}
			onClick = {() => onClick(!isOpen)}
			className = {clsx (styles.container, isOpen && styles.container_open)}>
			
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen && styles.arrow_open)}/>
		</div>
	);
};