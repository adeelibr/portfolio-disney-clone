function getImagePath(path?: string, fullSize?: boolean) {
  const size = fullSize ? "original" : "w500";
  return path
    ? `http://image.tmdb.org/t/p/${size}/${path}`
    : "/placeholder.jpg";
}

export default getImagePath;
