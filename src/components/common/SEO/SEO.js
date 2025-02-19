import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({
    title,
    description,
    og_title,
    og_description,
    noindex = false,
    ratingSnippet = true,
    reviewCount = 63,
    ratingValue = 5.0,
    children
}) => {
    const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitterUsername
        }
      }
    }
  `)

    const metaTitle = title || site.siteMetadata.title
    const metaDescription = description || site.siteMetadata.description
    const metaOgTitle = og_title || metaTitle
    const metaOgDescription = og_description || metaDescription
    const twitterUsername = site.siteMetadata.twitterUsername || ''

    return (
        <>
            <title>{metaTitle}</title>
            {metaDescription && <meta name="description" content={metaDescription} />}
            {/* Open Graph for Facebook & social */}
            <meta property="og:site_name" content={site.siteMetadata.title} />
            <meta property="og:type" content="website" />
            {metaOgTitle && <meta property="og:title" content={metaOgTitle} />}
            {metaOgDescription && <meta property="og:description" content={metaOgDescription} />}
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={metaOgTitle} />
            <meta name="twitter:description" content={metaOgDescription} />
            {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
            {/* Meta Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {ratingSnippet && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWorkSeries",
                        "name": metaTitle,
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": ratingValue,
                            "reviewCount": reviewCount
                        }
                    })}
                </script>
            )}

            {children}
        </>
    )
}

export default SEO
