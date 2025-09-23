// src/utils/gallery.ts
const modules = import.meta.glob("../assets/*/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  query: '?url',
  import: "default",
});

export type GalleryMap = Record<string, string[]>;

export function buildGalleryMap(): GalleryMap {
  const map: GalleryMap = {};
  for (const path in modules) {
    const parts = path.split("/");
    const category = parts[2] || "uncategorized";
    const url = (modules as Record<string, string>)[path];
    if (!map[category]) map[category] = [];
    map[category].push(url);
  }
  Object.keys(map).forEach((c) => map[c].sort());
  return map;
}

export function prettyName(slug: string) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
