Client Side Search using lunr.js
--------------------------------

Client Side Search is something we all want to support. Then again, if all the content is static on the page shown, how would you do the search? Turns out there is a nice little library called Lunr.js which abstracts the pain of having to store a dictionary of words and it's great at not just generating results but also ranking them in order of relevance. 

In this code, I am showing a snippet from the project I am currently working on. The project is a ECMASCript Specification Viewer which supports search, and facilitates discussion.

All of the magic happens in custom.js which parses the current webpage(index.html) and builds up an index. This index is ranked based on the importance of text(headings get higher precedence over paras, etc.). Then, in the webpage we have a search bar at the top that seamlessly searches the index and highlights the matching pattern based on precedence. The user can traverse through the search results effortlessly by pressing Ctrl+arrow keys(Ctrl + <- for previous match, Ctrl+ -> for next match).
