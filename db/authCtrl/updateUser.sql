update users 
set email = ${email},
firstname = ${firstName},
lastname = ${lastName},
hash = ${hash},
resume = ${resume},
picture = ${picture}
where id = ${id}

returning *;