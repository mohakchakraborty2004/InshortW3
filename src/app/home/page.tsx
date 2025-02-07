import axios from "axios"

const fetchNews = async() => {
    const response : any = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=4c9ba383e3a1409986d66ab6c855cdf5")
    console.log(response.data)
    const news = response.data.articles || [];

        return news.map((n: any) => ({
            title: n.title,
            description: n.description
        }));
}
 
export default async function Scroll() {
    const news = await fetchNews();
// add swipe 
// fetch news from api here 
//4c9ba383e3a1409986d66ab6c855cdf5
// fetch and summarize 
//https://github.com/mohakchakraborty2004/InshortW3.git

return <div>
    

    news 

    <ul className="flex">
         {news.map((t : any, index : any) => (
             <li key={index} >
                <div className="m-5 text-2xl bg-violet-500 p-7 rounded-2xl text-white">
                <strong>Heading:</strong> {t.title} <br />
                <strong>Description:</strong> {t.description} <br />
                </div>
           </li>
         ))
         }
       </ul>
</div>

}