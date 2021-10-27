import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


// import {Submit} from "../styles/submit-button.styled"

// STYLING
const Assets = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`
const AssetContainer = styled.div`
  width: 180px;
  Height: 280px;
  margin: 10px;
`

const Submit = styled.input`
  background-color: #03fcec;
`
const Image = styled.img`
  width: 180px;
  border-radius: 5px;
`
const assetForm = styled.form`
  margin-bottom: 60px;
`

function Index(props) {

  const [ newForm, setNewForm ] = useState({
    title: "",
    image: ""
  });

  const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createAssets(newForm);
    setNewForm({
      title: "",
      image: "",
    })
  }

  const allAssets = () => {
    return props.assets.map((asset) => (
      <AssetContainer key={asset._id} className="asset">
        <h1>{asset.title}</h1>
        <Link to={`/asset/${asset._id}`}><h3>More Info</h3></Link>
        <Image src={asset.image} alt={asset.title} />
      </AssetContainer>
    ))
  }

  // loaded function
  const loaded = () => {
    return (
      <Assets>
        {allAssets()}
      </Assets>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title of asset"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="asset URL"
          onChange={handleChange}
        />
        <Submit type="submit" value="Upload Asset" />
        {props.assets ? loaded() : loading()}
        
      </form>
    </section>
  )
} 

export default Index;