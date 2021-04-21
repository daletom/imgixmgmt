require('dotenv').config()
import ImgixAPI from  "imgix-management-js";

const imgix = new ImgixAPI({
    apiKey: `${process.env.IMGIX_API_KEY}`
});

module.exports = async (req,res) => {
    console.log(req.body);
    await imgix.request(`assets/${process.env.IMGIX_SOURCE_ID}${req.body.name}`, {
        method: 'PATCH',
        body: {
            "data": {
                "attributes": {
                    "categories": [
                        "publish"
                        ]
                },
            "type": "assets",
            "id": "${process.env.IMGIX_SOURCE_ID}${req.body.name}"
            }
        }
    })
    .then(response => {
        res.json(response)
    })
}