

const helper = () =>{

    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=58fa8407237375f8467842ce20027a4c`
      )
        .then((response)=>{
         return response.json()

        })
        .then((data)=>{

            return data
        })

}

export default helper