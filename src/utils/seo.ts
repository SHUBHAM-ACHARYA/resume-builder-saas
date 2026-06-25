export function setPageTitle(title: string) {
  document.title = `${title} | Resume Builder`;
}

export function setMetaDescription(description: string) {
  const tag = document.querySelector('meta[name="description"]');
  if (tag) {
    tag.setAttribute('content', description);
  }
}
