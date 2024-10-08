import MOCKUP_DATA from '../../docs/data-mockup.js';
import testData from '../../docs/data-mockup.json' with { type: 'json' }


let DATA = testData

const handlerFunctions = {
  getItems: (req, res) => {
    res.send({
      message: "Items sent successfully",
      items: DATA
    })
  },

  deleteItem: (req, res) => {
    // Get id of item to be deleted
    const { id } = req.params;

    // Remove item from 'MOCKUP_DATA' array
    DATA = DATA.filter((item) => item.id !== +id);

    // Send response to delete API call
    res.send({
      message: "Item deleted successfully",
      updatedItems: DATA
    });
  },

  addItem: (req, res) => {
    // Get body data from request
    const { imgURL, itemName, itemURL, itemPrice, itemCategory } = req.body;

    // create new object to add to DATA
    const newItem = {
      id: DATA.length,
      imgURL,
      itemName,
      itemURL,
      itemPrice,
      itemCategory,
      isInitialized: false
    }

    // Add newItem to DATA
    DATA = [...DATA, newItem];

    // Send response with message and DATA
    res.send({
      message: "Item added successfully",
      updatedItems: DATA
    })
  },

  editItem: (req, res) => {
    // assign values from request body to local variables
    const { id, imgURL, itemName, itemURL, itemPrice, itemCategory } = req.body;

    // Get index of wishlist item using the item id
    const index = DATA.findIndex((item) => item.id === id);

    // Get data for item to be edited
    const item = DATA[index];
    
    // Save new data to 'item' object variable
    item.imgURL = imgURL ?? item.imgURL;
    item.itemName = itemName ?? item.itemName;
    item.itemURL = itemURL ?? item.itemURL;
    item.itemPrice = +itemPrice ?? item.itemPrice;
    item.itemCategory = itemCategory ?? item.itemCategory;
    item.isInitialized = true;

    res.send({
      message: "Item data updated successfully",
      updatedItem: item
    })
  }
}

export default handlerFunctions;