# Use the Lovable mark as the site logo

Replace the current leaf icon in the header with the purple/pink "L" mark cropped from the uploaded promo image.

## What changes

- Crop the square Lovable "L" mark out of the uploaded image (top-left corner of the promo), on a transparent background.
- Header: swap the `Leaf` icon for the cropped mark image, keeping the "Verdant" wordmark and current sizing/spacing.
- Footer: use the same mark in the footer lockup so branding stays consistent.
- Favicon: generate a square PNG from the same mark and point the root route's icon link at it, replacing the default `favicon.ico`.

## Technical notes

- Crop with ImageMagick from `/mnt/user-uploads/image-gen-1_6.png`, trim to the mark, save as a transparent PNG.
- Store as a CDN asset pointer (`lovable-assets create`) imported into `src/routes/index.tsx`; the favicon stays a real file in `public/`.
- Only the two logo lockups in `src/routes/index.tsx` and the icon link in `src/routes/__root.tsx` are touched.

Note: the reported `src/lib/utils.ts(8,7)` TS2322 error is stale — that file is 6 lines long and type-checks clean, so no fix is included.
