import './App.css';

import React, { useEffect } from 'react'

import Card from './components/Card';
import { isEmpty } from "lodash"

function App() {
  const [playerList, setPlayerList] = React.useState([])
  const [filtered, setFiltered] = React.useState([])
  const [search, setSearch] = React.useState("")
  useEffect(() => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c").then(res => {
      return res.json()
    }).then((data) => {


      if (!isEmpty(data?.playerList)) {
        let sortedList = data.playerList?.sort((playerA, playerB) => { return playerB - playerA })
        setPlayerList(sortedList)
      }


    })
  }, [])

  useEffect(() => {
    if (search) {
      const res = playerList?.filter(player => player?.PFName?.toLowerCase()?.includes(search) || player?.TName?.toLowerCase()?.includes(search))
      setFiltered(res)
    }
  }, [search])

  return (
    <>
      <div className={`search__container`}>

        <input placeholder='Search for player or team...' type="text" value={search} onChange={(e) => setSearch(e?.target?.value)} />
        <div className="icon">
          <i className='search fa fa-search'></i>

        </div>
      </div>
      <div className="container">
        {
          (isEmpty(search) && playerList) ? playerList?.map(player => {
            return (
              <Card {...player} />
            )
          })
            :

            filtered && filtered?.map(player => {
              return (
                <Card {...player} />
              )
            })
        }
      </div>
    </>
  );
}

export default App;
