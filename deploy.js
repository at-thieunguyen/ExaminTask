var ghpages = require('gh-pages')
ghpages.publish('dist/Examin', {
  branch: 'master',
  repo: 'git@github.com:at-thieunguyen/AxaximDeploy.git'
}, function (err) {
  console.log('Deploy Success')
  console.log(err)
})