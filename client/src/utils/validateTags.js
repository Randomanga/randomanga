function validateIncludeTags(tags, hideAdult = true) {
  if (tags.length === 0) return { genre: [], tags: [], demographic: [] };

  return {
    genre: tags.filter(tag => tag.category === 'Genres').map(tag => tag.label),
    tags: tags
      .filter(
        tag => tag.category !== 'Genres' && tag.category !== 'Demographic'
      )
      .map(tag => tag.label),
    demographic: tags
      .filter(tag => tag.category === 'Demographic')
      .map(tag => tag.label),
  };
}
function validateExcludeTags(tags) {
  if (!tags) return {};
  return {
    genre: tags.filter(tag => tag.value === 'Genres').map(tag => tag.label),
    tags: tags
      .filter(tag => tag.value !== 'Genres' && tag.value !== 'Demographic')
      .map(tag => tag.label),
    demographic: tags
      .filter(tag => tag.value === 'Demographic')
      .map(tag => tag.label),
  };
}

export { validateIncludeTags, validateExcludeTags };
