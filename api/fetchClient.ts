async function fetchClient(method: any,url:any, ...otherParams:any) {

    const baseURL = 'http://communityeducationapi-dev-env.us-east-1.elasticbeanstalk.com/'

    const options = {
        ...otherParams,
        headers: {
            "Content-Type": "application/json",
            'Accept-Encoding': 'no-difference',
            'Something-Else': 'works fine',
        },
        method,
    }
    let response1:any

    response1 = await fetch(baseURL + url, options) 

    try{

        let response2:any = await response1.json()

        return {
            data:response2,
            ...response1
        }

    }catch(error){
        return {
            data: [],
            ...response1
        }
    }

}

export default fetchClient