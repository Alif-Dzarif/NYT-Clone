import { useEffect, useState } from "react"

function useFetch(path) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPost = () => {
    setIsLoading(true)
    fetch("http://localhost:3000/" + path)
      .then((res) => res.json())
      .then((datas) => {
        setData(datas)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return { data, isLoading, reFetch: fetchPost }
}

export default useFetch