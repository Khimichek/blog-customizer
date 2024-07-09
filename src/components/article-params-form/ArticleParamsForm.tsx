import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select/Select';
import {defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr} from '../../constants/articleProps'
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import { useState } from 'react';
import clsx from "clsx";


import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleClick} />
			<aside className={clsx (styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>

					<Text
						as='h2'
						size={31}
						weight={800}
						fontStyle='normal'
						uppercase={true}
						align='left'>Задайте параметры
					</Text>

					<Select
						selected={defaultArticleState.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder={defaultArticleState.fontFamilyOption.title}
						//onChange=
						//onClose: {}
						title='Шрифт'
					/>

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						//onChange?: (value: OptionType) => void;
						title='Размер шрифта'
					/>

					<Select
						selected={defaultArticleState.fontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						//onChange=
						//onClose: {}
						title='Цвет шрифта'
					/>

					<Separator/>

					<Select
						selected={defaultArticleState.backgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						//onChange=
						//onClose: {}
						title='Цвет фона'
					/>

					<Select
						selected={defaultArticleState.contentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						//onChange=
						//onClose: {}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};