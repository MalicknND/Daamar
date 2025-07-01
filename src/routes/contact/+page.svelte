<script lang="ts">
    let email = '';
    let subject = '';
    let message = '';
    let loading = false;
    let error = '';
    let success = '';
    const API_URL = import.meta.env.VITE_API_URL;

    function validateEmail(email: string) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      error = '';
      success = '';
      if (!validateEmail(email)) {
        error = "L'email n'est pas valide.";
        return;
      }
      if (!subject.trim()) {
        error = "L'objet est requis.";
        return;
      }
      if (!message.trim()) {
        error = "Le message est requis.";
        return;
      }
      loading = true;
      try {
        const res = await fetch(`${API_URL}/items/ContactForm`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            objet: subject,
            message
          })
        });
        if (!res.ok) {
          const errData = await res.json();
          error = errData.errors?.[0]?.message || 'Erreur lors de l’envoi du message.';
          loading = false;
          return;
        }
        success = 'Votre message a bien été envoyé !';
        email = subject = message = '';
      } catch (e) {
        error = 'Erreur réseau.';
      } finally {
        loading = false;
      }
    };
  </script>
  
  <div class="font-sans text-base text-gray-900 sm:px-10">
    <div class="text-base text-gray-900">
      <div class="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
        <h1 class="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
        <div class="text-lg sm:text-xl xl:text-xl text-gray-900">
          <p class="mb-4">
            Pour toute question ou demande de service, veuillez nous contacter via le formulaire ci-dessous. Nous vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      </div>
    </div>
  
    <div class="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
      <form
        class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8"
        on:submit={handleSubmit}
      >
        {#if error}
          <div class="mb-4 text-red-600">{error}</div>
        {/if}
        {#if success}
          <div class="mb-4 text-green-600">{success}</div>
        {/if}
        <div class="mb-4">
          <label class="text mb-2 block font-medium" for="email">Your e-mail:</label>
          <input
            bind:value={email}
            class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
            id="email"
            type="email"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="text mb-2 block font-medium" for="subject">Subject:</label>
          <input
            bind:value={subject}
            class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
            id="subject"
            type="text"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="text mb-2 block font-medium" for="message">Message:</label>
          <textarea
            bind:value={message}
            class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
            id="message"
            required
          ></textarea>
        </div>
  
        <div class="flex items-center">
          <div class="flex-1"></div>
          <button
            class="rounded-xl bg-[var(--color-primary)] px-4 py-3 text-center font-bold text-white hover:bg-[var(--color-secondary)] disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {#if loading}
              <span class="loader mr-2"></span> Envoi...
            {:else}
              Send message
            {/if}
          </button>
        </div>
      </form>
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
  