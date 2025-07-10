import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					light: 'hsl(var(--success-light))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(215 25% 15%), hsl(215 25% 25%))',
				'gradient-accent': 'linear-gradient(135deg, hsl(45 95% 55%), hsl(45 95% 65%))',
				'gradient-surface': 'linear-gradient(180deg, hsl(0 0% 100%), hsl(215 15% 98%))',
				'gradient-hero': 'linear-gradient(135deg, hsl(215 25% 8%) 0%, hsl(215 25% 15%) 50%, hsl(215 25% 20%) 100%)'
			},
			boxShadow: {
				'premium-sm': '0 1px 2px 0 hsl(215 25% 15% / 0.05)',
				'premium-md': '0 4px 6px -1px hsl(215 25% 15% / 0.1), 0 2px 4px -1px hsl(215 25% 15% / 0.06)',
				'premium-lg': '0 10px 15px -3px hsl(215 25% 15% / 0.1), 0 4px 6px -2px hsl(215 25% 15% / 0.05)',
				'premium-xl': '0 20px 25px -5px hsl(215 25% 15% / 0.1), 0 10px 10px -5px hsl(215 25% 15% / 0.04)',
				'glow': '0 0 40px hsl(45 95% 55% / 0.3)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				bounceSubtle: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 40px hsl(45 95% 55% / 0.3)' },
					'50%': { boxShadow: '0 0 60px hsl(45 95% 55% / 0.4)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out',
				'slide-up': 'slideUp 0.3s ease-out',
				'bounce-subtle': 'bounceSubtle 0.3s ease-out',
				'scale-in': 'scaleIn 0.2s ease-out',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
