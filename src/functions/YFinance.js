import yahooFinance from "yahoo-finance2";


export const YFinance = async()=>{
    const result = await yahooFinance.quoteSummary('AKBNK.IS');
    //const list = await yahooFinance.options()
    //const name = result.price.shortName
    
        //console.log(result.price.regularMarketPrice)
    
        console.log(result)
        
        
}


