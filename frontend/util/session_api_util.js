export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// me = {
//   first_name: 'James',
//   last_name: 'Lo',
//   password: 'starwars',
//   email: 'a@gmail.com',
//   gender: 'male',
//   phone_number: 'my phone number',
//   zip_code: '11010',
//   birthdate: "1900-01-01"
// }
