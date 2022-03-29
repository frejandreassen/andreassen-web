import axios from "axios"

export default async function handler(req, res) {
  await axios.post('https://hooks.slack.com/services/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',
             req.body,
             {
              headers: {
                'Content-type': 'application/json'
              }
            })
        .then( function(response) {
          res.status(200).json({ status: 'Success' })
        })
        .catch(  function(error){
          console.log(error)
          res.status(500).json({ error })
        })
} 