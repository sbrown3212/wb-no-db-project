import { useEffect, useState } from "react"
import TableHeader from "./TableHeader"
import ItemRow from "./ItemRow"
import AddItemButton from "./ItemComponents/AddItemButton"

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
      />
    );
  });

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