export const fetchData =async ({endPoint}:{endPoint:string})=>{
    try{
    const response = await fetch(`${process.env.BASE_URL}/${endPoint}`)
    const data = response.json()
    return data
    }
    catch(e){
        console.log(e)
    }
}