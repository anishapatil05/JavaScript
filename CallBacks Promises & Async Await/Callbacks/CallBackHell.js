
function getData(getId, nextData){
 
    setTimeout(() =>{
        console.log("Data ",getId)
        if(nextData){
            nextData();
        }
    }, 2000);

}

// callback hell
getData(1, () =>{
    console.log("getting 2nd data....");
    getData(2, () =>{
        console.log("getting 3rd data....");
        getData(3, () =>{
            console.log("getting 4th data....");
            getData(4, () =>{

            })
        })
    })
})