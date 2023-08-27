import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewsCard({ item }) {
  const navigate = useNavigate()

  const seeDetail = () => {
    navigate('/news/' + item.id + '/' + item.slug)
  }
  const [date, setDate] = useState(new Date(item.createdAt))

  let time = date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <div onClick={seeDetail} className=" cursor-pointer bg-white overflow-hidden border-b-4 border-blue-500 w-full m-2">
      <img src={item.imgUrl} alt="People" className="w-full object-cover"/>
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">{item.CategoryId}</p>
          <h3 className="font-semibold mb-2 text-xl">{item.title}</h3>
          <div className="text-sm flex items-center">
            <p className="leading-none">{time}</p>
        </div>
    </div>
  )
}