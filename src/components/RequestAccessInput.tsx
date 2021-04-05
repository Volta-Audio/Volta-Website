import React, { useState } from "react"
import axios from "axios"
import InputField from "./input-field"

const checkValidEmail = (email: string): boolean => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const RequestAccessInput = () => {
  const [responseText, setResponseText] = useState(undefined)
  const REQUEST_ACCESS_LIST_ID = 4

  const signUp = (email: string) => {
    checkValidEmail(email)
      ? axios({
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
          url: "https://api.sendinblue.com/v3/contacts",
          data: {
            listIds: [REQUEST_ACCESS_LIST_ID],
            updateEnabled: true,
            email,
          },
        })
          .then(function (response) {
            if (response.status === 201 || response.status === 204) {
              setResponseText("Request successful, we'll be in touch soon")
            }
          })
          .catch(function (_) {
            setResponseText(
              "An unexpected error occurred, please try again later"
            )
          })
      : setResponseText("Please enter a valid email")
  }

  return (
    <InputField
      placeholder={responseText || "Please enter your email"}
      onClick={signUp}
    />
  )
}

export default RequestAccessInput
