import { Store } from '@/store';// path to store file

/* eslint-disable */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
