import { useState } from "react"
import { Link } from "react-router-dom"


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

  // loaded function
  const loaded = () => {
  return props.assets.map((asset) => (
    <div key={asset._id} className="person">
      <Link to={`/people/${asset._id}`}><h1>{asset.name}</h1></Link>
      <h3>{asset.title}</h3>
      <img src={asset.image} alt={asset.title} />
    </div>
  ))
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
        <input type="submit" value="Upload Asset" />
        {props.assets ? loaded() : loading()}
        
      </form>
    </section>
  )
} 

export default Index;