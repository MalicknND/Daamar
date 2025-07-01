<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '$lib/stores';
	import { goto } from '$app/navigation';
	let firstname = '';
	let lastname = '';
	let email = '';
	let password = '';
	let loading = false;
	const API_URL = import.meta.env.VITE_API_URL;

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		const userData = {
			email,
			password,
			first_name: firstname,
			last_name: lastname
		};

		loading = true;
		try {
			const res = await fetch(`${API_URL}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});

			if (!res.ok) {
				const errData = await res.json();
				console.error('Erreur lors de l’inscription :', errData);
				loading = false;
				return;
			}

			const data = await res.json();
			user.set({
				id: data.data.id,
				email: data.data.email,
				first_name: data.data.first_name,
				last_name: data.data.last_name
			});
			goto('/');
		} catch (err) {
			console.error('Erreur réseau :', err);
		} finally {
			loading = false;
		}
	};
</script>

<div class="flex flex-wrap">
    <div class="flex w-full flex-col md:w-1/2">
      <div class="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
        <a href="/" class="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-[var(--color-primary)]"> Daamar </a>
      </div>
      <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
        <p class="text-left text-3xl font-bold">Create an account</p>
        <p class="mt-2 text-left text-gray-500">Create an account, please enter your details.</p>
        <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google icon" /> Log in with Google</button>
        <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
          <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
        </div>
        <form class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
                <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="text" id="login-email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="First name" bind:value={firstname} />
                </div>
              </div>
              <div class="flex flex-col pt-4">
                <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="text" id="login-email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Last name" bind:value={lastname} />
                </div>
              </div>
          <div class="flex flex-col pt-4">
            <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input type="email" id="login-email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" bind:value={email} />
            </div>
          </div>
          <div class="mb-12 flex flex-col pt-4">
            <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input type="password" id="login-password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" bind:value={password} />
            </div>
          </div>
          <button type="submit" class="w-full rounded-lg bg-[var(--color-primary)] px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" on:click={handleSubmit} disabled={loading}>
            {#if loading}
              <span class="loader mr-2"></span> Création...
            {:else}
              Create account
            {/if}
          </button>
        </form>
        <div class="py-12 text-center">
          <p class="whitespace-nowrap text-gray-600">
            Already have an account?
            <a href="/auth/login" class="underline-offset-4 font-semibold text-gray-900 underline">Sign in.</a>
          </p>
        </div>
      </div>
    </div>
    <div class="pointer-events-none relative hidden h-screen select-none bg-[var(--color-primary)] md:block md:w-1/2">
      <img class="absolute top-0 h-full w-full object-cover opacity-90" alt="Luxury car on a road" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  </div>
  
<style>
  .loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid var(--color-primary, #3498db);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
  