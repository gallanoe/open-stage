import type { ComponentType } from 'svelte';

export type Page = 'home' | 'chat' | 'agents' | 'settings';

export class NavigationStore {
    currentPage = $state<Page>('home');
    
    navigateTo(page: Page) {
        this.currentPage = page;
    }
}

const navigationStore = new NavigationStore();

export function useNavigationStore() {
    return navigationStore;
}
