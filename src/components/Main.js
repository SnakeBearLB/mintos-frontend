import React from "react"
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){

  const [ assets, setAssets ] = useState(null);

  const URL = "http://mintos-lb.herokuapp.com/asset/"

  // const URL = "http://localhost:4000/asset/"

  const getAssets = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setAssets(data);
  }

  const createAssets = async (asset) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(asset),
    })
    getAssets();
  }

  const updateAsset = async (asset, id) => {
    console.log(id)
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      }, 
      body: JSON.stringify(asset),
    });
    getAssets();
  }

  const deleteAsset = async id => {
    await fetch(URL + id, {
      method: "DELETE",
    })
    getAssets();
  }

  useEffect(() => getAssets(), [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index assets={assets} createAssets={createAssets}/>
        </Route>
        <Route
          path="/asset/:id"
          render={rp => (
            <Show
              assets={assets}
              updateAsset={updateAsset}
              deleteAsset={deleteAsset}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  )
} 

export default Main;