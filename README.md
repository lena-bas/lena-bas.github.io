# lena-bas.github.io

github pages

Experimenting with LWC on github pages

# How to build and run locally

I am using VS Code. 
I already had node and npm installed. 

> [!NOTE]  
> TODO Add instructions on downloading node and npm 

Once you have node and npm installed, open terminal in VS Code and run following commands:
- cd lwr-project
- npm install
- npm run dev

Application will run at:  http://localhost:3000/

# How to build for production

Run this command inside  lwr-project folder:
- npm run build:prod-compat

Production artifacts are generated in **lwr-project/site** folder

Copy content of **lwr-project/site** folder, including **all files** and **directories** two levels up into root folder **\lena-bas.github.io**.

Commit to local repository and push to github.
Usually, after few minutes new version will be available at https://lena-bas.github.io/, although occasionally it may take more. It never took more than about 30 minutes for me.


# Known Issues

## File names are case sensitive
When I first deployed Lena's painting images by mistake nine images in \lena-bas.github.io\lwr-project\src\assets\images\lena\flowers were using upper case JPG extension instead of lower case .jpg.
This worked fine on my local machine, but broke when deployed to github pages. 


# TODO

Learn how to use Salesforce Lightning Design System
- https://www.salesforceben.com/welcome-to-the-salesforce-lightning-design-system-slds/#:~:text=Salesforce%20describes%20this%20as%20the,platform%2Dagnostic%20design%20system%E2%80%9D.



# Working Notes 


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