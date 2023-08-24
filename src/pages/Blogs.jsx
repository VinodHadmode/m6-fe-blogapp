import React, { useEffect, useState } from 'react'

const Blogs = () => {
  const [data, setData] = useState([])
  const token = localStorage.getItem("token")

  const getData = () => {
    fetch("https://red-agreeable-wildebeest.cyclic.cloud/api/blogs/", {
      method: "GET",
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },

    }).then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      })
  }
  useEffect(() => {
    getData()

  }, [])
  console.log("data outside useEffect", data);
  return (
    <div>
      <h2>Blogs Page</h2>
      {
        data && data.map((el) => {
          return <div key={el._id} style={{ border: "1px solid grey" }}>
            <p>title:{el.title}</p>
            <p>username:{el.username}</p>
            <p>content:{el.content}</p>
            <p>like:{el.title}</p>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        })
      }
    </div>
  )
}

export default Blogs
