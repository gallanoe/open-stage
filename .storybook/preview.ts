import type { Preview, SvelteRenderer } from '@storybook/svelte-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		},
	},
	decorators: [
		withThemeByClassName<SvelteRenderer>({
			themes: {
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light'
		})
	]
};

export default preview;
