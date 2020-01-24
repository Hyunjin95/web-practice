# Robotfriends - next.js

This page was deployed to Github Pages.

## How to Deploy

```shell
npm run build
npm run export
```

Then create a `.nojekyll` file into the `out` folder.

```
git add out/
git commit -m "MESSAGE"
# This command should be run from the top of the git repository.
git subtree push --prefix react/robotfriends-nextjs/out origin gh-pages
```
