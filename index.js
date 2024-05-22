require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const github_data = {
  "login": "priyanshujoshi",
  "id": 22034544,
  "node_id": "MDQ6VXNlcjIyMDM0NTQ0",
  "avatar_url": "https://avatars.githubusercontent.com/u/22034544?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/priyanshujoshi",
  "html_url": "https://github.com/priyanshujoshi",
  "followers_url": "https://api.github.com/users/priyanshujoshi/followers",
  "following_url": "https://api.github.com/users/priyanshujoshi/following{/other_user}",
  "gists_url": "https://api.github.com/users/priyanshujoshi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/priyanshujoshi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/priyanshujoshi/subscriptions",
  "organizations_url": "https://api.github.com/users/priyanshujoshi/orgs",
  "repos_url": "https://api.github.com/users/priyanshujoshi/repos",
  "events_url": "https://api.github.com/users/priyanshujoshi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/priyanshujoshi/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2016-09-06T17:37:36Z",
  "updated_at": "2021-06-19T15:56:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
  res.send('abcdotcom')
})

app.get('/github', (req,res) => {
  res.json(github_data)
})

app.get('/login', (req, res) =>{
  res.send('<h1> this is a login page  </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})