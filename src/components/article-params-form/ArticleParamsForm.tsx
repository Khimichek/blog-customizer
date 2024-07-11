import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select/Select';
import {defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr, ArticleStateType, OptionType} from '../../constants/articleProps'
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ReactNode } from 'react';

import { useState, useRef } from 'react';
import clsx from "clsx";


import styles from './ArticleParamsForm.module.scss';


export type ArticleParamsFormProps = {
	initialSettings: ArticleStateType;
	setNewSettings: (data: ArticleStateType) => void;
};


export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const {initialSettings, setNewSettings} = props;

	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(initialSettings);;

	const handleClick = () => {
		setIsFormOpen(!isFormOpen);
	};

	const handleChange = (type: keyof ArticleStateType, value: OptionType) => {
		setFormState((prev)=>({
			...prev, [type]: value
		}))
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setNewSettings(formState);
	}
	return (
		<>
			<ArrowButton isFormOpen={isFormOpen} onClick={handleClick} />
			<aside className={clsx (styles.container, isFormOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					>

					<Text
						as='h2'
						size={31}
						weight={800}
						fontStyle='normal'
						uppercase={true}
						align='left'>Задайте параметры
					</Text>

					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder={defaultArticleState.fontFamilyOption.title}
						onChange={(option: OptionType)=> handleChange('fontFamilyOption', option)}
						//onClose: {}
						title='Шрифт'
					/>

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(option: OptionType)=> handleChange('fontSizeOption', option)}
						title='Размер шрифта'
					/>

					<Select
						selected={formState.fontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						onChange={(option: OptionType)=> handleChange('fontColor', option)}
						//onClose: {}
						title='Цвет шрифта'
					/>

					<Separator/>

					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						onChange={(option: OptionType)=> handleChange('backgroundColor', option)}
						//onClose: {}
						title='Цвет фона'
					/>

					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						onChange={(option: OptionType)=> handleChange('contentWidth', option)}
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
}