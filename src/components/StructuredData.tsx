type StructuredDataProps = {
  data: unknown
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
