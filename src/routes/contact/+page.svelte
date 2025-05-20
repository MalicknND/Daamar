<script lang="ts">
    let email = '';
    let subject = '';
    let message = '';
  
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
      // Tu peux ensuite envoyer ces données à une API ici
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
            class="rounded-xl bg-[var(--color-primary)] px-4 py-3 text-center font-bold text-white hover:bg-[var(--color-secondary)]"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
  