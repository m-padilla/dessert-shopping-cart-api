import 'dotenv/config';
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secrue: true
})

export async function uploadAsset(image) {
    const fileName = image.split('/').pop().split('.')[0];

    try {
        const result = await cloudinary.v2.uploader.upload(image, {
            resource_type: "image",
            public_id: fileName,
            folder: "dessert-shopping-cart",
            use_filename: false,
            unique_filename: false,
            overwrite: true
        });

        // console.log("success", JSON.stringify(result, null, 2));
        return result.url;

    } catch (error) {
        console.log("error", JSON.stringify(error, null, 2));
    }
}

// console.log(await uploadAsset("./images/image-waffle-desktop.jpg"));
