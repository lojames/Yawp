export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = filters => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    filters
  })
);
