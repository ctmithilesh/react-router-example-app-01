import axios from 'axios'
let data = null
export const getUsers = async () => {

    await axios.get('https://reqres.in/api/users')
        .then(res => {
            console.log(res)
            data = res.data.data
        })
        .catch(err => {
            console.log(err)
        })
    return data
}
