insert into users (
  email,
  firstname,
  lastname, 
  hash
) values (
  ${email},
  ${firstName},
  ${lastName},
  ${hash}
)

returning *;