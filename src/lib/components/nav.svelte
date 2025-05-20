<!-- Navbar.svelte -->
<script lang="ts">
    // État pour le menu mobile
    let isMenuOpen: boolean = false;
    
    // Fonction pour basculer le menu mobile
    function toggleMobileMenu(): void {
      isMenuOpen = !isMenuOpen;
    }
    
    // Liens de navigation
    const navLinks: { label: string; href: string }[] = [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Contact', href: '/contact' }
    ];

  </script>
  
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo et liens de navigation -->
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="text-2xl font-bold text-blue-600" style="cursor: pointer;">
              <img src="/daamar.png" alt="Logo" class="h-20 w-20" />
            </a>
          </div>
          
          <!-- Liens de navigation (visibles sur desktop) -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            {#each navLinks as link}
              <a 
                href={link.href}
                class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                {link.label}
              </a>
            {/each}
          </div>
        </div>
        
        <!-- Boutons de login et register -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
          <a 
            href="/auth/login" 
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Se connecter
          </a>
          <a 
            href="/auth/register" 
            class="px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-md hover:bg-[var(--color-secondary)]"
          >
            S'inscrire
          </a>
        </div>
        
        <!-- Bouton menu mobile -->
        <div class="flex items-center sm:hidden">
          <button 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={isMenuOpen}
            on:click={toggleMobileMenu}
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <!-- Icône menu (hamburger) -->
            {#if !isMenuOpen}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            <!-- Icône fermer (X) -->
            {:else}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu mobile -->
    {#if isMenuOpen}
      <div class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          {#each navLinks as link}
            <a 
              href={link.href}
              class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {link.label}
            </a>
          {/each}
        </div>
        <!-- Boutons mobiles de login et register -->
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="space-y-1 px-3">
            <a 
              href="/auth/login" 
              class="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Se connecter
            </a>
            <a 
              href="/auth/register" 
              class="block px-4 py-2 text-base font-medium text-white bg-[var(--color-primary)] rounded-md hover:bg-[var(--color-secondary)] text-center"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    {/if}
  </nav>