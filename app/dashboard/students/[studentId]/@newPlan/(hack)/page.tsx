export default async function NewPlan() {

    await new Promise((resolve)=> setTimeout(resolve,3000))
    
    return (
      <div>
      <h1 style={{color:'blue'}}>Creating new plan</h1>
      </div>
    )
  }