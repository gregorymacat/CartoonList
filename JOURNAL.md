# Journaling

## Bug Journal
This is a table of all the bugs I've come across that it took me a while to find the solution. Director error messages are italicized and who is what was having the issue.

**Who?**|**Bug**           |**Solution**
--------|----------------- | -------------------------------------
NPM | npm install wouldn't run *npm enoent no such file* | Had to run npm init first to create the package.json
Express | Router going to static page instead of specified route | Static was used after router so it was last seen by interpreter, so it used that path. If the path didn't exist then it would have fallen through to the next middleware, but there weren't any so router should go after the call to static files.
Express | Router was not being used in separate file | Declare router in separate file then import to the server file to be