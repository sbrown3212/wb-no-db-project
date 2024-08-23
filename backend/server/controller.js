import MOCKUP_DATA from '../../docs/data-mockup.js';

const handlerFunctions = {
  getItems: (req, res) => {
    res.send({
      message: "Items sent successfully",
      items: MOCKUP_DATA
    })
  }
}

export default handlerFunctions;