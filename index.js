const fetchData=(url) => {
    return new Promise((res,rej) => {
        fetch(url)
        .then((res)=> res.json())
        .then((data) => {
            res(data)
        })
        .catch((e)=>rej(e))
    })
}




var createcard=function(name,flag,capital,region,cc){
     var row=document.querySelector(".row")
     var col_sm_4=document.createElement("div")
     col_sm_4.classList.add("col-sm-4")
     col_sm_4.classList.add("top-margin")
     var card=document.createElement("div")
     card.id=name
     card.classList.add("card")
     card.classList.add("text-center")
     card.style.width="18rem"
     var card_title=document.createElement("h5")
     card_title.innerText=name
     card_title.classList.add("card-title")
     var img=document.createElement("img")
     img.classList.add("card-img-top")
     img.src=flag
     img.style.padding="4%"
     img.style.width="286px"
     img.style.height="200px"
     var card_body=document.createElement("div")
     card_body.classList.add("card-body")
     //first card_text
     var card_text1=document.createElement("p")
     card_text1.classList.add("card-text")
     card_text1.innerText="Capital: "
     var span1=document.createElement("span")
     span1.innerText=capital
     span1.id=capital
     card_text1.appendChild(span1)
     card_body.appendChild(card_text1)

     //Second card_text
     var card_text2=document.createElement("p")
     card_text2.classList.add("card-text")
     card_text2.innerText="Region: "
     var span2=document.createElement("span")
     span2.innerText=region
     card_text2.appendChild(span2)
     card_body.appendChild(card_text2)

     //Second card_text
     var card_text3=document.createElement("p")
     card_text3.classList.add("card-text")
     card_text3.innerText="Country Code: "
     var span3=document.createElement("span")
     span3.innerText=cc
     card_text3.appendChild(span3)
     card_body.appendChild(card_text3)

     var btn=document.createElement("button")
     btn.classList.add("btn")
     btn.classList.add("btn-primary")
     btn.value=name
     btn.innerText="Click for Weather"
     card_body.appendChild(btn)
     //append all
     row.appendChild(col_sm_4)
     col_sm_4.appendChild(card)
     card.appendChild(card_title)
     card.appendChild(img)
     card.appendChild(card_body)
}

fetchData("https://restcountries.eu/rest/v2/all").then((posts) =>{
    for (i=0;i<posts.length;i++){
      var name=posts[i].name
      var flag=posts[i].flag
      var capital=posts[i].capital
      var region=posts[i].region
      var cc=posts[i].alpha3Code
      createcard(name,flag,capital,region,cc)
    }
}).then(   () => {
document.querySelectorAll('.btn.btn-primary').forEach(item =>{
   item.addEventListener('click',function(){
    fetchData("https://restcountries.eu/rest/v2/name/"+item.value+"?fullText=true").then((post)=>{
        var x = document.getElementById(post[0]["name"]).querySelectorAll(".card-text span");
        var y = document.getElementById(post[0]["name"]).querySelectorAll(".card-text");
        x[0].innerText=post[0]["population"]
        y[0].innerText='Population: '+x[0].innerText
        x[1].innerText=post[0]["callingCodes"]
        y[1].innerText='callingCodes: '+x[1].innerText
        x[2].innerText=post[0]["latlng"]
        y[2].innerText='latlng: '+x[2].innerText
        
    })
   
   })
  
})
}
)


