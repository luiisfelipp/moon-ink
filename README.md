# Moon Ink Tattoo Studio

Next.js App Router, TypeScript, Tailwind CSS 4, Motion y Lucide React.

## Desarrollo

- `npm install`
- `node scripts/prepare-assets.cjs` (genera WebP desde los originales de assets)
- `npm run dev`
- `npm run build` (exportación estática en out)

## Contenido

`lib/content.ts` centraliza galería, preguntas y contactos. Añade una imagen a public/works y su entrada a works para ampliar la galería. El logo original está conservado en assets/logo.jpeg. Las imágenes se optimizan sin retocar los tatuajes.

## Reservas

El formulario valida datos y prepara un mensaje; la persona abre WhatsApp y pulsa enviar. No guarda ni transmite datos al servidor. Las referencias se seleccionan localmente y deben adjuntarse en la conversación; la acción Compartir usa la hoja nativa cuando está disponible. No se afirma disponibilidad ni confirmación de una cita. Para integrar calendario y almacenamiento, sustituir el adaptador de envío de Booking por un endpoint con persistencia, consentimiento y confirmación.

## Pendiente de información del estudio

Nombre y biografía del artista, fotografía del estudio, dirección, horarios y condiciones de anticipos. No hay testimonios ni certificaciones inventadas. moonink.cl es el dominio previsto en los metadatos; su configuración DNS requiere acceso al dominio.
