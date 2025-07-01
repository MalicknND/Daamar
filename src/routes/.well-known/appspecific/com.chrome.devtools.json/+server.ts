import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return json({
		name: 'SvelteKit App',
		description: 'A SvelteKit application',
		version: '1.0.0'
	});
};
