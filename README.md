# bootstrap-column-height
Makes columns in a row match the height of the content

# What do I do?
1) Add match-columns.js to your project (this runs on document ready [this means it doesn't work on dynamically added rows/columns])<br/>
2) Add data-match-columns=true to any &lt;div class='row'&gt; to have their columns resized to match the tallest column

# Resizing manually
1) Trigger the event 'resizeHeights' on a column to have it and it's neighbors resized

# Gotcha
1) bootstrap-column-height will only look 1 level deep in the subtree of a row that has data-match-columns=true

# Before/After
<b>Before</b>
![Before Image](/images/before-1.png?raw=true "Before")
<b>After</b>
![After Image](/images/after-1.png?raw=true "After")
