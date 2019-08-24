select 
  comments.datetime as date, 
  comments.id as commentid, 
  comments.text, 
  users.id as userid,
  users.firstname,
  users.lastname
from posts
left join comments on comments.post_id = posts.id
left join users on comments.user_id = users.id
where posts.id = ${id}
order by comments.datetime asc;