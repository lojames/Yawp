export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = (lat, lng) => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses'
  })
);
