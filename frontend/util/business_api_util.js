export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = data => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data
  })
);
