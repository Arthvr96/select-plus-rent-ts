declare module '*.react.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'react-helmet' {
  export function Helmet({ title, defer }: { title: string; defer: boolean });
}
