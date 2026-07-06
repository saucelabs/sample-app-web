// Image loader for Vite builds.
// import.meta.glob is processed statically by Vite at build time.
// In Jest, this module is replaced by src/utils/__mocks__/imageLoaderMock.js
// via the moduleNameMapper in jest.config.js.
const images = import.meta.glob("../assets/img/*.{png,jpg,jpeg,svg,gif}", {
  eager: true,
});

export default function getImage(imageUrl) {
  const key = `../assets/img/${imageUrl}`;
  const mod = images[key];
  return mod ? mod.default || mod : undefined;
}
