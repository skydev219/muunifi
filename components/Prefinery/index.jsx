import { useEffect, useState } from "react"
import styles from "./Prefinery.module.scss"
import shortid from "shortid"
import Image from "next/image";

const Prefinery = () => {

  const [play, setPlay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setPlay(true)
    }, 1000)
  }, []);

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if(window.prefinery) {
      try{
        window.prefinery('addUser', {
          email: email,
         }, function (user) {
          setLoading(false)
          setSuccess(true)
         })
        } catch(error){
          setLoading(false)
      }
    }
  }

  return (
    <div className={`${styles.root} ${play ? 'play' : ''}`}>
    <div className="entry-2">
      {/* <div class='prefinery-form-embed'></div> */}
      <form className={`${styles.form} ${success ? 'hide' : ''}`} onSubmit={onSubmit}>
        {/* <button disabled={loading}>Join The Waitlist</button> */}
        <div>
        <span style={{margin:"20px", borderRadius: "20px"}}>
        <Image
                  src="/images/App Store - eng.png"
                  alt="phone"
                  width={204}
                  height={60}
                  style={{backgroundColor: 'white', margin: '20px',borderRadius: '7px'}}
         />        
        </span>
        <span>
        <Image
                  src="/images/Google Play - eng.png"
                  alt="phone"
                  width={204}
                  height={60}
                  style={{backgroundColor: 'white', margin: '20px',borderRadius: '7px'}}
                   
         />        

        </span>
        </div>

      </form>
      <div className={`${styles.message} ${success ? 'show' : ''}`}>Thank you. You have been successfully added to the waiting list</div>
    </div>
    
  </div>
  )
}

export default Prefinery;