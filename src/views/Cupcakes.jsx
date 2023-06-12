import React from 'react'
import { useEffect } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'

const Cupcakes = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {

    makeRequest("https://" + process.env.REACT_APP_SUPABASEPROJECTID + ".supabase.co/rest/v1/cupcakes",
      {
        'apikey': process.env.REACT_APP_SUPABASEAPIKEY
      })

  }, [])


  return (
    <>
      {error && <error />}

      {isLoading && <Loader />}

      {
        data && data.map(c =>
          <article key={c.id}>
            <h2>{c.Name} ({"★".repeat(c.stars)})</h2>
            <p>{c.description}</p>
          </article>
        )
      }


    </>
  )
}

export default Cupcakes