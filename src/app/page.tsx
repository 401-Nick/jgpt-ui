'use client'
import dynamic from 'next/dynamic';

const ClientModelSelector = dynamic(() => import('./components/ModelSelector.tsx'));
const NavBar = dynamic(() => import('./components/NavBar.tsx'));
const SettingsMenu = dynamic(() => import('./components/SettingsMenu.tsx'));

function MyComponent() {
  return (
    <div className="main">
      <NavBar/>
      <ClientModelSelector />
      <SettingsMenu />
    </div>
  );
}

export default MyComponent;
