import { writable } from 'svelte/store';

export interface User {
	id?: string;
	email: string;
	first_name: string;
	last_name: string;
	access_token?: string;
	refresh_token?: string;
}

function createUserStore() {
	let initial: User | null = null;
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem('user');
		if (stored) initial = JSON.parse(stored);
	}
	const store = writable<User | null>(initial);
	store.subscribe((value) => {
		if (typeof localStorage !== 'undefined') {
			if (value) {
				localStorage.setItem('user', JSON.stringify(value));
			} else {
				localStorage.removeItem('user');
			}
		}
	});
	return store;
}

export const user = createUserStore();
