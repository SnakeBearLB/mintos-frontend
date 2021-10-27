import React from "react"
import { useState } from "react"
import styled from 'styled-components'


function Show(props) {
  const id = props.match.params.id
  const assets = props.assets
  const asset = assets.find(a => a._id === id)

  const [ editForm, setEditForm ] = useState(asset);

  const handleChange = event => {
    setEditForm({...editForm, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateAsset(editForm, asset._id);
    props.history.push("/")
  }

  const removeAsset = () => {
    props.deleteAsset(asset._id);
    props.history.push("/");
  }

  return (
    <div className="asset">
      <img src={asset.image} alt={asset.name} />
      <h1>{asset.title}</h1>
      <p>Mint This Asset</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title of asset"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </form>
      <button id="delete" onClick={removeAsset}>
        DELETE
      </button>
    </div>
        
  ) 
} 

export default Show;