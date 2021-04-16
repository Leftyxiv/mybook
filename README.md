# Mannysbook
Mannysbook is an easy-to-use code playground for Javascript/React. You can install any npm package within the editor.
## Installation
To make installation as simple as possible you can run this code in any terminal/git bash to get running immediately

    $ npx mannysbook serve

**note: this does require Node version 14.x or higher.**

After mannysbook is installed you will see a message prompting you to open localhost:4005 to view your code playground

    Opened notebook.js.  Please navigate to http://localhost:4005 to edit the file.

## Flags
Mannysbook comes with a few flags to customize your experience.
### Naming the playground text file
By default Mannysbook saves all of the code you write to a txt file named notebook.js, so that the data persists between sessions.
You can customize this by specifying a .js file to save everything to instead

    $ npx mannysbook serve myFile.js

### Changing the localhost port (-p)
Mannysbook opens on localhost:4005 by default. You can change this with -p or --port

    $ npx mannysbook serve -p {port-number}
    $ npx mannysbook serve --port {port-number}

### Example using all flags:

    $ npx mannysbook serve -p 8080 playground.js

## Features

-  You can use the `show()` function to render anything inside it to the iframe
 -  You can hover above or below any cell to show buttons to add more cells
 - Any code written in a cell can be used in cells below it, code bundles from top to bottom.
 - You can have text cells for documentation/comments (though you can still use regular JS comments). These text cells have markdown capabilities
-  React/ReactDOM are programmatically imported
-  the iframe has a root div
-  you can import and use any npm package
-  **requires node v14 or newer**

## Found a bug?
Message Manny Ledoux on the KenzieTown Slack
or send an email to [manny@aledoux.net](mailto:Manny@aledoux.net) to submit the bug you found. Please be descriptive!
