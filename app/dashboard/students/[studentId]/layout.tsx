export default function NewPlanLayout({
    children, // will be a page or nested layout
    newPlan,
    plansHistory
  }: {
    children: React.ReactNode
    newPlan: React.ReactNode
    plansHistory: React.ReactNode

  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <h1>New plan layout</h1>
        {children}
        {newPlan}
        {plansHistory}
      </section>
    )
  }