import React from "react";
import { Helmet } from "react-helmet";
import { baseUrl } from "../../../services/api/config";
const Meta = ({ title, desc, fav, keywords, image, url = baseUrl }) => {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      {desc && <meta name="description" content={desc} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {desc && <meta property="og:description" content={desc} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:image" content={image} />
      {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href={fav} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Meta;
