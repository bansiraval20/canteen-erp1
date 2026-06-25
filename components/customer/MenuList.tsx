type MenuItem = {
  _id: string
  name: string
  description: string
  price: number
  isAvailable: boolean
}

export default function MenuList({
  items,
}: {
  items: MenuItem[]
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item._id}
          className="border p-4 rounded"
        >
          <h2 className="font-bold">
            {item.name}
          </h2>

          <p>{item.description}</p>

          <p>₹{item.price}</p>

          <p>
            {item.isAvailable
              ? 'Available'
              : 'Out Of Stock'}
          </p>

          <button
            disabled={!item.isAvailable}
            className="border px-3 py-1 mt-2"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}