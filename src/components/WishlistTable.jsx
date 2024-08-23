import { useEffect, useState } from "react"
import TableHeader from "./TableHeader"
import ItemRow from "./ItemRow"
import AddItemButton from "./ItemComponents/AddItemButton"
import axios from "axios"

const WishlistTable = ({ initialData }) => {
  const [currentData, setCurrentData] = useState(initialData);

  // Set 'currentData' to 'initialData' anytime 'initialData' changes
  useEffect(() => {
    setCurrentData(initialData);
  }, [initialData]);

  // Create array of 'itemRow' components based on data from 'currentData'
  const itemRows = currentData.map((item) => {
    return (
      <ItemRow
        key={item.id}
        imgURL={item.imgURL}
        itemName={item.itemName}
        itemURL={item.itemURL}
        itemPrice={item.itemPrice}
        itemCategory={item.itemCategory}
        deleteFunc={() => deleteItem(item.id)}
      />
    );
  });

  // Makes api call to delete item based on item id
  const deleteItem = (id) => {
    axios.delete(`/api/deleteItem/${id}`)
    .then((res) => {
      console.log(res.data); // Not showing in console
      setCurrentData(res.data.updatedItems);
    });
  };

  return (
    <>
      WishlistTable
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {/* <ItemRow />
          <ItemRow />
          <ItemRow /> */}
          {itemRows}
        </tbody>

        <tfoot>
          <AddItemButton />
        </tfoot>
      </table>
    </>
  )
}

export default WishlistTable