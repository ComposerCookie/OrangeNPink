{% assign base = site.baseurl | prepend: site.url %}

SimpleJekyllSearch.init({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ base }}/search.json',
});