require('dotenv').config()
import ImgixAPI from  "imgix-management-js";

const imgix = new ImgixAPI({
    apiKey: `${process.env.IMGIX_API_KEY}`
});

module.exports = async (req,res) => {
    let fileString = req.body.base64.replace(/^data:image\/gif;base64,|^data:image\/png;base64,|^data:image\/jpeg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, '');
    let buffer = Buffer.from(fileString, "base64");
    let data = await imgix.request(`sources/upload/${process.env.IMGIX_SOURCE_ID}/${req.body.name}`, {
        method: 'POST',
        body: buffer
    })
    res.json(data);
}