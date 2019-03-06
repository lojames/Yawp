export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = query => {
  return (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${query}`,
  })
)};
