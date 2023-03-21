import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType( 'course/text-box', {
	icon: {
		src: 'text-page',
		// <svg
		// 	version="1.1"
		// 	viewBox="0 0 500 500"
		// 	preserveAspectRatio="xMinYMin meet"
		// >
		// 	<circle cx="250" cy="250" r="200" />
		// </svg>
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save: Save,
} );
