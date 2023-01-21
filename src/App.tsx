import { useState, useEffect } from 'react'
import './App.css'
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import { getRandomQuote, getSearchQuotes } from './api-functions'
import { Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {Search, StyledInputBase} from './components/Search'
import QuoteCard from './components/QuoteCard';
import { Quote } from './models';

function App() {
  const [quote, setQuote] = useState<Quote>({id: "", content: "", author: ""})
  const [term, setTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Quote[]>([])
  const [haveSearched, setHaveSearched] = useState<boolean>(false)

async function getQuote(){
  setQuote(await getRandomQuote());
}

useEffect(() => {
  getQuote()
}, [haveSearched])

async function search(term: string){
  setSearchResults(await getSearchQuotes(term));
  setHaveSearched(true);
}


  return (
    <div>
      {/* Search Has Not Been Made */}
         {!haveSearched &&
         <div className="App" style={{justifyContent:"center"}}>
          <Typography variant="h4">Quote Search</Typography>
      <Toolbar style={{justifyContent:"center"}}>
          <Search>
              <SearchIcon onClick={()=>{search(term)}}/>
            <StyledInputBase
            onChange={(e)=>{setTerm(e.target.value)}}
            onKeyPress={(e)=>{if(e.key === "Enter"){search(term)}}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar> 
      <Typography variant="h5" padding={6}>{quote.content}</Typography>
      <Typography variant="h6">~{quote.author}</Typography>
      </div>
       }
       {/* Search Has Been Made */}
       {haveSearched &&
       <div>
        <Typography variant="h4" paddingBottom={2}>QuoteSearch</Typography>
        <HomeIcon  onClick={() => {setHaveSearched(false)}}/>
        <Toolbar style={{justifyContent:"center"}}>
          <Search>
              <SearchIcon onClick={()=>{search(term)}}/>
            <StyledInputBase
            onChange={(e)=>{setTerm(e.target.value)}}
            onKeyPress={(e)=>{if(e.key === "Enter"){search(term)}}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        {searchResults.length === 0 && <Typography paddingTop={5} variant="h6">No Results Found</Typography>}
        {searchResults.map((q) => {
          return (
            <QuoteCard quote={q}/>
          )
        })
        }
        </div>
        }
    </div>
  )
}

export default App
