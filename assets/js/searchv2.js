var idx;
var jslist;
let url = '/index.json';
var searchb = document.getElementById("searchbar");
var searchres = document.getElementById("searchresults");
var lastRes;
var debugsymbol;


fetch(url)
.then(res => res.json())
.then(js => jslist = js )
.then(documents  =>  {
  idx = lunr(function () {
    this.ref('url')
    this.field('title', { boost: 100 })
    this.field('content')
    this.field('tags', { boost: 50 })
    documents.forEach(function (doc) {
      this.add(doc)
    }, this);

    this.pipeline.add(
	    lunr.trimmer,
	    lunr.stopWordFilter,
	    lunr.stemmer
	  )
    this.searchPipeline.add(
	    lunr.stemmer
	  )
  })

  
  searchb.removeAttribute("disabled");
  searchb.setAttribute("placeholder", "Insert words");



  searchb.addEventListener("input", (event) => { 
    while (searchres.firstChild) {
      searchres.removeChild(searchres.firstChild);
    }
    if (event.target.value.length > 2) {
        lastRes = idx.search(event.target.value)
        lastRes.forEach(res =>{
          jsEl =  jslist.filter((el) => el.url == res.ref)[0]; 
          let completeURL = res.ref.concat("#:~:text=").concat(event.target.value)
          let li = document.createElement("li");
          let body = document.createElement("div"); 
          let h2 = document.createElement("h1");
          h2.append(jsEl.title)
          h2.setAttribute("style","margin:0")

          let link = document.createElement("a");
          link.setAttribute("href",completeURL)
          link.append(h2);
          if (jsEl.hasRaw == true){
            fetch(jsEl.raw)
            .then(res => res.json())
            .then(res => {
                body.innerHTML=res.raw
            } )           
          }

          
          li.appendChild(link) 
          li.appendChild(body)
          li.classList.add('separated-element');

          searchres.appendChild(li)
        });
    }


  })

} )
.catch(err => console.log(err));



