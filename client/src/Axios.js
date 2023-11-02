import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

const Axios = () => {
  const [mydata, setMydata] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", city: "" });
  const [response, setResponse] = useState(null);

  const myStyle = {
    border: "1px solid black",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/data/post-data", formData);
      if (res.status === 200) {
        setFormData({ name: "", city: "" });
        setResponse(res?.data);
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  // get api for getting the biodata
  const getMyData = async () => {
    try {
      const res = await axios.get("city/get-city-name");
      setMydata(res?.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMyData();
  }, [response]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`deleteData/delete-data/${id}`);
      if (response.status === 200) {
        setResponse(response?.data);
      }
    } catch (error) {
      console.error(`Error deleting record with ID ${id}: ${error}`);
    }
  };

  return (
    <div className="App">
      <form onSubmit={submitData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Record
        </button>
      </form>

      {!_.isEmpty(error) && <h4>{error?.message}</h4>}
      <table style={myStyle}>
        <tr>
          <th style={myStyle}>Name</th>
          <th style={myStyle}>City</th>
          <th style={myStyle}>Delete</th>
        </tr>
        {mydata?.map((data) => {
          const { id, name, city } = data;
          return (
            <tr key={id}>
              <td style={myStyle}>{name}</td>

              <td style={myStyle}>{city}</td>
              
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Axios;
