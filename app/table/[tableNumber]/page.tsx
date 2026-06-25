import MenuList from '@/components/customer/MenuList'

async function getMenuItems() {
  const res = await fetch(
    'http://localhost:3000/api/menu',
    {
      cache: 'no-store',
    }
  )

  const data = await res.json()

  return data.data
}

export default async function TablePage({
  params,
}: {
  params: Promise<{ tableNumber: string }>
}) {
  const { tableNumber } = await params

  const menuItems = await getMenuItems()

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Table {tableNumber}
      </h1>

      <MenuList items={menuItems} />
    </div>
  )
}