import TableHeader from "./TableHeader"
import TableRow from "./ItemRow"
import AddItemButton from "./AddItemButton"

const WishlistTable = () => {
  return (
    <>
      WishlistTable
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>

        <tfoot>
          <AddItemButton />
        </tfoot>
      </table>
    </>
  )
}

export default WishlistTable