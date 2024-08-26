const Home = () => {
  const fetchdata = () => {
    fetch("https://artistic-luck-production-3ddc.up.railway.app/api/getallpokemon")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Fetch Resource...");
        }
        return res.json(); //convert to json
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const deletedata = () => {
    fetch("https://artistic-luck-production-3ddc.up.railway.app/api/deletepokemon?id=6" , {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Delete Data...");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Sucessfully Deleted....");
      })
      .catch((err) => {
        alert("Unable to Delete....");
        console.log(err.message);
      });
  };  

  return (
    <>
      <h4>Sample API Call</h4>
      <button onClick={() => fetchdata()}>Fetch</button>
      <button onClick={() => deletedata()}>Delete </button>
    </>
  );
};

export default Home;
