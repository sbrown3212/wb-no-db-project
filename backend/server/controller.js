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
    console.log(`DELETE ID:`, id); // Not showing in console

    // Remove item from 'MOCKUP_DATA' array
    DATA = DATA.filter((item) => item.id !== +id);

    // Send response to delete API call
    res.send({
      message: "Item successfully deleted",
      updatedItems: DATA
    });
  },

  addItem: (req, res) => {
    // Get body data from request
    const { imgURL, itemName, itemURL, itemPrice, itemCategory } = req.body;
    // console.log(`req.body`, req.body);
    // console.log(`DATA.length:`, DATA.length)

    // create new object to add to DATA
    const newItem = {
      id: DATA.length,
      imgURL,
      itemName,
      itemURL,
      itemPrice,
      itemCategory
    }

    // Add newItem to DATA
    DATA = [...DATA, newItem];

    // Send response with message and DATA
    res.send({
      message: "Item added successfully",
      updatedItems: DATA
    })
  }
}

export default handlerFunctions;