function displayResults (results, store) {
    const searchResults = document.getElementById('article-list')
    console.log(searchResults)
    console.log(document.body)
    if (results.length) {
      let resultList = ''
      for (const n in results) {
        const item = store[results[n].ref]
        resultList += '<li role="none"><a role="menuitem" class="article-link" href="' + item.url + '">' + item.title + '</a>'
        resultList += '<p>' + item.content.substring(0, 150) + '...</p>'
        
        resultList += '</li>'
      }
      console.log(resultList)
      searchResults.innerHTML = resultList
    } else {
      
      searchResults.innerHTML = '<p>No content matches your request, try with another term</p>'
    }
  }
  
  const params = new URLSearchParams(window.location.search)
  const query = params.get('query')
  
  console.log(query)
  // 
  
  if (query) {
    // Retain the search input in the form when displaying results
   // console.log(query)
    document.getElementById('search-input').setAttribute('value', query)
    
    const idx = lunr(function () {
      this.ref('id')
      this.field('title', {
        boost: 15
      })
      this.field('tags')
      this.field('content', {
        boost: 10
      })
  
      for (const key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          tags: window.store[key].category,
          content: window.store[key].content
        })
      }
    })
  
    const results = idx.search(query)
    console.log(results)
    displayResults(results, window.store)
  }