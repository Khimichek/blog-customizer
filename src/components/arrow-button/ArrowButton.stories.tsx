import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	/* Название компонента и путь, по которому его нужно отобразить на витрине */
	title: 'components/ArrowButton',
	/* Передаём сам компонент */
	component: ArrowButton,
	/* satisfies помогает точнее определить тип */
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof ArrowButton>;

/* История */
export const ArrowButtonStory: Story = {
	args: {
        onClick: () => console.log('Button clicked'),
		isFormOpen: false
    }
};
