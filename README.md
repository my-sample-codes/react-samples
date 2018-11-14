# react-samples

This is the default structure of the React dashboard.

To build the project, first issue the below command:

```
npm install
```
then to start the application issue the below command. This will open a page in your default browser,
```
npm start
```
if you are a contributor of this project, couple of things that has to be keep in mind
1. Never push any code to the **master** or **development** branch. Create your own feature branch from **development** branch and raise a pull request once you are done with the development. Branch names could be of the format <your-name>/<functionality-name>
2. Keep the component grouping structure intact. A particular component directory should contain its respective *JS* & *CSS* files along with the *test case* file.
3. Do not create any random file inside any random folder. Always create a new directory for new components and update existing files for existing components.
4. No inline scripting or styling should be written. All styling definitions should go into the css files.
5. Format the code properly using VS-Code formatting option before checking in the code.

To build the app for production issue the below command which will create the production ready package in the build folder.
```
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed.

Happy coding !!
