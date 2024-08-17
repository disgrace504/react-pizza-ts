/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PIZZAS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
