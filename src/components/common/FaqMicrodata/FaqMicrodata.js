import React from "react"

const FaqMicrodata = React.memo(({ faqs }) => {
    
  if (!faqs?.length) return null

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ title, body }) => ({
      "@type": "Question",
      "name": title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": body
      }
    }))
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(faqData)}
    </script>
  )
})

export default FaqMicrodata
