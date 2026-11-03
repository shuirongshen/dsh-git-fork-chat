/** CSS files are imported as text by the plugin build and injected at runtime. */
declare module '*.css' {
  const content: string
  export default content
}
