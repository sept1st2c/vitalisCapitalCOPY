export const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5 }
};

export const stagger = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.3, staggerChildren: 0.2 }
};

export const fadeIn = (
	direction: 'up' | 'down' | 'left' | 'right',
	delay: number
) => ({
	hidden: {
		y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
		x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
		opacity: 0
	},
	show: {
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1.25,
			delay: delay
		}
	}
});

export const scaleIn = {
	initial: { opacity: 0, scale: 0.9 },
	whileInView: { opacity: 1, scale: 1 },
	viewport: { once: true },
	transition: { duration: 0.5 }
};
