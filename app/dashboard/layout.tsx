export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
        <div>SIDEBAR</div>
        <section>{children}</section>
    </div>
    )
  }