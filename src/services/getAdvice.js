import Axios from "axios";

export default function getAdvice() {
  return Axios.get("https://api.adviceslip.com/advice").then((response) => {
    const data = response.data.slip
    const {advice, id} = data
    return {advice, id}
  })
}