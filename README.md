# bootstrap-column-height
Makes columns in a row match the height of the content

# What do I do?
1) Add match-columns.js to your project (this runs on document ready [this means it doesn't work on dynamically added rows/columns])
2) Add data-match-columns=true to any <div class='row'> to have their columns resized to match the tallest column

# Resizing manually
1) Trigger the event 'DOMSubtreeModified' on a column to have it and it's neighbors resized

# Gotcha
1) bootstrap-column-height will only look 1 level deep in the subtree of a row that has data-match-columns=true
