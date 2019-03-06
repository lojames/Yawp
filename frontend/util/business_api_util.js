export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchBusinesses = query => {
  console.log("\n\n\n\nHERE\n\n");
  console.log(query);
  console.log(decodeURIComponent(query));
  return (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${query}`,
  })
)};
