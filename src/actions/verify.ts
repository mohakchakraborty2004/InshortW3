"use server"
// introduced for better type but dont know how to do it
interface res {
    confidence_score : number
    matching_details : string
    discripancies : string
}

export default async function Verify(title: string, description: string, source_url: string){
    // verification logic with title and string.
    const data = {
        headline : title,
        description,
        source_url
    }
    const response : any =  await axios.post("Enter-Samyak's-Url-HEre", data);

    const confidence_score : number = (response.confidence_score) * 100

    // 90 is place holder value here , return the confidence_score here.
    return 90;
}