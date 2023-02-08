import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import Table from "./Components/Table"
function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [data, setData] = useState()
  const [isEdit, setIsEdit] = useState()
  const addData = (e) => {
    console.log({ name, age, city });
    fetch("http://localhost:4000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        city: city,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editData = (data) => {
    console.log(data)
      setIsEdit(data.id)
      setName(data.name)
      setAge(data.age)
      setCity(data.city)
  }

  const updateData = (id) => {
    fetch("http://localhost:4000/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : id,
        name: name,
        age: age,
        city: city,
      }),
    })
      .then((res) => {
        setIsEdit()
        setName()
        setAge()
        setCity()
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteData = (id) => {
    fetch("http://localhost:4000/user/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : id
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetch("http://localhost:4000/user", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res)=>{
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <form
        action="#"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          name="Name"
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="Number"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={() => isEdit ? updateData(isEdit) : addData()}>{isEdit ? "Update" : "Add"}</button>

        <Table data={data} editData={editData} deleteData={deleteData}/>
      </form>
    </div>
  );
}

export default App;
