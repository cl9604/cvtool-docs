/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.less' {
  const v: any
  export default v
}

declare module '!!raw-loader!*' {
  const v: string
  export default v
}

