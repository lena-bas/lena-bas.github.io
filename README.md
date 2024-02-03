# lena-bas.github.io

github pages

Experimenting with LWC on github pages

Following instructions from w381.github.io/README.md - which I created few weeks ago when doing the same exercise on Doca's repository. These instructions are similar to Notes.md in Salesforce-oss/SF_Documentation



I have first run
- npm init lwr
- selected "Single Page App" project type
- selected "LWC" variant instead of "LWC (typescript)"
  - typescript is something to consider later
- next cd lwr-project
- npm install
- npm run dev

Next trying to build for prod

- npm run build:prod-compat

Copied .gitignore from C:\work\git_repos\github\salesforce-oss

Copied whole content of lwr-project/site directory to top level folder, lena-bas.github.io, committed and pushed.

I was getting errors when I tried to use ui-card component until I copied lwr.config.json, package.json and package-lock.json from our old Salesforce-oss/lwr-single-page-app repositroy. 
I must have missed a step in configuring the LWR libraries. 

Followed instructions from https://salesforce.stackexchange.com/questions/323613/lightning-open-source-use-of-base-components

-  lwc.config.json
   -   { "npm": "lightning-base-components" }
-    npm install @salesforce-ux/design-system --save-dev