# Wishlist App
### Devmountain Project 1 (NoDB)

The purpose of this wishlist app was to create a way for the user to keep track of items they wish to buy in the future. Structured closely after the invoice table created in the code along in class ([repo found here](https://github.com/sbrown3212/wb-thinking-react)), the main element is a table, with rows for each item of the wish list, and the ability to add,edit, or delete rows.

## Languages/Frameworks/Libraries
- HTML
- CSS
- JavaScript
- React
- Express
- Axios

## Features

- Edit: when the "Edit" button is clicked, all editable elements for that row become input fields. Here the user can change the value in the input fields, and save the data by clicking the "Save" button. Once "Save" is clicked, the row will switch back to normal view showing only images, text, and buttons.
- Add Item: when the user clicks the "Add Item" button, a new row will appear at the bottom of the table. The row will be in edit mode, and all editable fields will be blank for the user to input the desired values. Once the user is ready, they must click the "Save" button, just as in edit mode. The new item will then display the images, text, and buttons as normal. If the page is refreshed before the user clicks the "Save" button, the new item will still exist, but the data from the input fields in that row will be gone and the fields will be in edit mode ready for user input.
- Delete: the user has the ability to delete an individual item by clicking the "Delete" button.

## Questions/Challenges

### CSS

I find myself getting frustrated with CSS quite often. It is definitely possible that I have not spent enough time with it yet, but it seems to me that CSS is a language that has more exceptions to the rule than there are rules that are followed.

I had trouble with css styling with the table element and all the descendants. I intended to make each row appear as though it was a card (I hope this is the correct word for it) with its own background color and radiused corners and space inbetween the other rows. I experimented with the `border-collapse` attribute, but I could not figure out how to get what I wanted because certain descendants of the table element aren't affected by the same properties that affect the table element.

With my limited knowledge of CSS, if I were to have more time, I would probably change the elements from a table to plain `div` elements, but then I am sure I would into the headaches of the columns not aligning how I would expect and would probably need to assign a specific width for each child of the item row. I definitely need to practice more css styling.

### Defaulting to edit mode when a new item is created

I ended up giving each wishlist item object a property of 'isInitialized' to know when to populate an item in edit mode or normal mode. Is there a better way to do this?