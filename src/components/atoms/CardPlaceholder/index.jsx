import React from 'react';
import ContentLoader from "react-content-loader"

const CardPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={376}
    viewBox="0 0 280 376"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="280" />
    <rect x="0" y="296" rx="0" ry="0" width="120" height="18" />
    <rect x="0" y="318" rx="0" ry="0" width="160" height="24" />
    <rect x="0" y="352" rx="0" ry="0" width="24" height="24" />
    <rect x="32" y="352" rx="0" ry="0" width="24" height="24" />
  </ContentLoader>
);

export default CardPlaceholder;
