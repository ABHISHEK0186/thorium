let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

let getSortedcities = async function (req, res) {
    try {
        let cities = ["Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobj = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d722c9e635f5f8054c225aab7be54ba8`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            cityobj.push(obj)
        }
        let sortedCities= cityobj.sort(function (a, b) { return (a.temp - b.temp) })
             res.status(200).send({status:true, data: sortedCities})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}



module.exports.getWeather = getWeather;
module.exports.getSortedcities = getSortedcities;