select 
  posts.datetime as postdatetime, 
  comments.datetime as commentdatetime, 
  posts.id as postid, 
  comments.id as commentid, 
  comments.text as commenttext, 
  posts.text as posttext, 
  posts.imagemain, 
  posts.title, 
  posts.family, 
  posts.makeup, 
  posts.food,
  users.firstname,
  users.lastname
from posts
left join comments on comments.post_id = posts.id
left join users on comments.user_id = users.id
order by posts.datetime desc, comments.datetime asc;