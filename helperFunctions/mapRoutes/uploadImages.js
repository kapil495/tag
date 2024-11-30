function uploadImages(app , uplaodPath) {
    app.post('/uploadImages', (req, res) => {
        console.log('Request Body:', req.body); 
        const { images } = req.body;

        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'No images to upload' });
        }

        const uploadDir = path.join(__dirname, uplaodPath);
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        images.forEach((image, index) => {
            const imageBuffer = Buffer.from(image.base64.split(',')[1], 'base64');
            const filePath = path.join(uploadDir, `${image.name}.png`);

            fs.writeFileSync(filePath, imageBuffer);
            console.log(`Saved image: ${filePath}`);
        });

        res.json({ message: 'Images uploaded successfully' });
    });
}
module.exports = { uploadImages }