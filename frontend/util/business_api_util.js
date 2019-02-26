export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = query => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${query}`,
  })
);
