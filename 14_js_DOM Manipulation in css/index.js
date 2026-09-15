// .style property used to get or set inline css.
// .cssText property used to get or set inline css but in these property we can access multiple inline styles.

// .setAttribute()
// .className 
// .classList

     // add
     // remove
     // toggle
     // contains

/*
🔹 1. .style property

     Used to get or set inline CSS styles of an element.

     Only works with inline styles, not external or internal CSS.

     ✅ Example:

     <div id="box" style="color:red;"></div>

     <script>
     let box = document.getElementById("box");

     // Get inline style
     console.log(box.style.color); // red

     // Set inline style
     box.style.backgroundColor = "yellow";
     </script>

🔹 2. .cssText property

     Similar to .style, but allows you to get or set multiple inline styles at once.

     Replaces all existing inline styles when set.

     ✅ Example:

     <div id="box" style="color:red;"></div>

     <script>
     let box = document.getElementById("box");

     // Get inline CSS as string
     console.log(box.style.cssText); // "color: red;"

     // Set multiple styles
     box.style.cssText = "color: blue; background: yellow; font-size: 20px;";
     </script>

🔹 3. .setAttribute()

     Used to set or update any attribute of an element (not just styles).

     More generic than .style.

     ✅ Example:

     <div id="box"></div>

     <script>
     let box = document.getElementById("box");

     // Set inline CSS as an attribute
     box.setAttribute("style", "color:green; background:pink;");

     // Set other attributes
     box.setAttribute("title", "Hello there!");
     </script>

🔹 4. .className

     Gets or sets the entire class attribute as a string.

     Replaces all classes if you set it.

     ✅ Example:

     <div id="box" class="red big"></div>

     <script>
     let box = document.getElementById("box");

     console.log(box.className); // "red big"

     // Overwrites classes
     box.className = "blue small";
     </script>

🔹 5. .classList

     Provides methods to add, remove, toggle, or check individual classes.

     Much safer and more flexible than .className.

     ✅ Example:

     <div id="box" class="red"></div>

     <script>
     let box = document.getElementById("box");

     // Add a class
     box.classList.add("big"); // class="red big"

     // Remove a class
     box.classList.remove("red"); // class="big"

     // Toggle a class
     box.classList.toggle("hidden"); // adds if not present, removes if present

     // Check if a class exists
     console.log(box.classList.contains("big")); // true
     </script>

🔹 Quick Comparison Table

Property  	        Purpose	                          Affects Inline?	Notes
.style	       Get/set inline CSS (one property at a time)	✅	       Only inline
.cssText	       Get/set multiple inline CSS at once	          ✅	       Overwrites inline
.setAttribute()  Set any attribute (style, id, title, etc.)	     ✅	       Generic, less specific
.className	  Get/set all classes as a string	               ❌	       Overwrites all
.classList	  Manage classes individually	                    ❌	       Safer & modern


*/