import { useState } from "react"
import { Link } from "react-router-dom"
import {Assets, AssetContainer, Submit, Image, Section, AssetTitle} from "../styles/Index.styled"


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
        <AssetTitle>{asset.title}</AssetTitle>
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
    <Section>
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
    </Section>
  )
} 

export default Index;