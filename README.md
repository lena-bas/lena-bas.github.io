# w381.github.io
github pages


Experimenting with LWC on github pages

Followed instructions from salesforce-oss/SF_Documentation/Notes.md

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

commited all to git

Started the "prod" version locally by running
- npm run start
  - this serves application from 'site' folder, while 'npm run dev' serves it from src

Then copied complete content of /site folder to the root folder of w381.github.io repository
- overwritten index.html

Commit, push, test https://w381.github.io/


Reviewing https://github.com/trailheadapps/lwc-recipes-oss/blob/main/src/modules/recipe/hello/hello.html
- I think that's where Bojan and I were practicing in the past


Now, lets try to put a LWC component, ideally something with images

Starting from https://developer.salesforce.com/docs/component-library/bundle/lightning-carousel/documentation
- there is link to a github repo https://github.com/salesforce/base-components-recipes#documentation
- but this repo is ARCHIVED, and it forwards user to a public npm package 
  - https://www.npmjs.com/package/lightning-base-components

I will try to install it as instracted on the above web site:
- npm install lightning-base-components
This resulted only in update of the lwr-project/package-lock.json and pckage.json, considering only files that are NOT gitignored.


Trying to use, it following first example on https://www.npmjs.com/package/lightning-base-components
- got error "Could not find module entry with specifier "lightning/button"

Found this note on https://www.npmjs.com/package/lightning-base-components
Limitations
SLDS styles needs to be globally defined at application level.
@lwc/synthetic-shadow is required.


- run
  -  npm install @lwc/synthetic-shadow

