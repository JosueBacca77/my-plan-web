export default async function NewPlan() {

    await new Promise((resolve)=> setTimeout(resolve,2000))

    return (
      <div>
      <h1 style={{color:'red'}}>Plans history</h1>
      </div>
    )
  }