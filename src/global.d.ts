declare module '*.svg' {
  const content: any

  export default content
}

declare module '*.png';

declare module '*.mp4' {
  const src: string;
  export default src;
}