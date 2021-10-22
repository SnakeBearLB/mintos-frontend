import { useState } from "react"
import { Link } from "react-router-dom"


function Index(props) {

  // loaded function
  const loaded = () => {
  return props.assets.map((asset) => (
    <div key={asset._id} className="person">
      <Link to={`/people/${asset._id}`}><h1>{asset.name}</h1></Link>
      <img src={asset.image} alt={asset.title} />
      <h3>{asset.title}</h3>
    </div>
  ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return props.assets ? loaded() : loading();

} 

export default Index;