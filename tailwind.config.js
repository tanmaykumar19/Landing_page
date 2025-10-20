export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			colors: {
				bull: {
					DEFAULT: '#10b981',
					dark: '#059669',
					light: '#34d399'
				},
				bear: {
					DEFAULT: '#ef4444',
					dark: '#dc2626',
					light: '#f87171'
				}
			},
			backgroundImage: {
				'grid-dark':
					'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
				'hero-gradient':
					'radial-gradient(1200px 600px at 80% -10%, rgba(16,185,129,0.20), transparent), radial-gradient(800px 400px at 10% 10%, rgba(99,102,241,0.18), transparent), radial-gradient(700px 400px at 50% 120%, rgba(239,68,68,0.15), transparent)'
			}
		}
	},
	plugins: []
}
