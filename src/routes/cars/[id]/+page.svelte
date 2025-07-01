<script lang="ts">
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { get } from 'svelte/store';

const API_URL = import.meta.env.VITE_API_URL;

let car: any = null;
let loading = true;
let error = '';

onMount(async () => {
  const id = get(page).params.id;
  try {
    const res = await fetch(`${API_URL}/items/Cars/${id}`);
    if (!res.ok) throw new Error('Erreur lors du chargement du produit');
    const data = await res.json();
    car = data.data;
  } catch (e) {
    error = (e as Error).message;
  } finally {
    loading = false;
  }
});
</script>

{#if loading}
  <p>Chargement...</p>
{:else if error}
  <p class="text-red-500">{error}</p>
{:else if car}
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-2">{car.marque}</h1>
    <img src={`${API_URL}/assets/${car.image}`} alt={car.marque} class="w-full h-64 object-cover rounded mb-4" />
    <ul class="mb-4">
      <li><b>Pays d'origine :</b> {car.pays_origine}</li>
      <li><b>Année de création :</b> {car.annee_creation}</li>
      <li><b>Type :</b> {car.type_voitures}</li>
      {#if car.modele}<li><b>Modèle :</b> {car.modele}</li>{/if}
    </ul>
    <a href="/cars" class="text-blue-600 underline">Retour à la liste</a>
  </div>
{/if} 