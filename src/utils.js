export const getImageUrl = (path) => {
    return new URL(path, `http://localhost:4000`).href;
};