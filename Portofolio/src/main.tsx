import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { LanguageProvider } from './hooks/Lang.tsx';
import { TabsProvider  } from './hooks/activeTab'; 

library.add(fab, fas, far)


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <LanguageProvider>
      <TabsProvider>
    <App />
    </TabsProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
