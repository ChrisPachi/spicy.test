'use strict';

/**
 * Tailwind CSS config for Spicy Web test project
 * chris.coinbox@gmail.com
 **/

 const plugin = require('tailwindcss/plugin');

 module.exports = {
	purge: [
		'./templates/**/*.html'
	],
	darkMode: false,
    theme: {
		extend: {

			colors: {
				russet: {
					light: '#d9664c',
					DEFAULT: '#d9664c',
					dark: '#af5243'
				},
				beige: {
					light: '#f7f1e2',
					DEFAULT: '#f7f1e2',
					dark: '#e1dad0'
				},
				charcoal: {
					light: '#33302d',
					DEFAULT: '#33302d',
					dark: '#000000'
				}
			},

			height: {
				carousel: '600px'
			},

			fontFamily: {
				inter : ['Inter', 'sans-serif'],
				staatliches: ['Staatliches', 'sans-serif'],
				sourcecodepro: ['Source Code Pro', 'monospace']
			},

			letterSpacing: {
				sourcecode: '0.2em'
			},

			lineHeight: {
				'h1': '0.9',
				'h2': '0.9',
				'h3': '0.9',
				'h4': '0.9'
			},

			backgroundImage: theme => ({
				'rock-climbing': "url('/img/rockclimbing.jpg')",
				'desertscape': "url('/img/landscape-01.jpg')",
				'kid-in-helmet': "url('/img/young-girl-rockclimbing.jpg')",
				'jaggeddivider': "url('/img/branchout-jaggeddivider.svg')",
				'badge': "url('/img/badge-bg.png')"
			}),

			backgroundSize: {
				'auto': 'auto',
				'cover': 'cover',
				'contain': 'contain',
				'badge-size': '18rem',
			},

			animation: {
				fadeIn: "fadeIn 1s ease-in forwards"
			},

			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			},

		}
    },
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function({ addBase, config }) {
			var font = config('theme.fontFamily.staatliches').join(),
				color = config('theme.colors.russet.light');

			addBase({
				'h1': { 
					fontFamily: font,
					fontSize: config('theme.fontSize.7xl'),
					lineHeight: config('theme.lineHeight.h1'),
					color: color
				},
				'h2': {
					fontFamily: font,
					fontSize: config('theme.fontSize.4xl'),
					lineHeight: config('theme.lineHeight.h2'),
					color: color
				},
				'h3': {
					fontFamily: font,
					fontSize: config('theme.fontSize.2xl'),
					lineHeight: config('theme.lineHeight.h3'),
					color: color
				},
				'h4': {
					fontFamily: font,
					fontSize: config('theme.fontSize.xl'),
					lineHeight: config('theme.lineHeight.h4'),
					color: color
				},
			})
		})
	],
}