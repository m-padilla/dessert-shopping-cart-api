import Dessert from '../model/dessert.js';

async function getAllDesserts(req, res) {
    try {

        const desserts = await Dessert.find({});
        res.status(200).json(desserts);
    } catch (err) {
        res.status(500).json({ message: err.message })

    }
}

async function getDessertById(req, res) {
    try {
        const { id } = req.params;

        const dessert = await Dessert.findById(id);
        res.status(200).json(dessert);

    } catch (err) {
        res.status(500).json({ message: err.message })

    }
}

// async function createDessert(req, res) {
//     try {

//         console.log(`🚀 Starting upload of ${data.length} desserts...`);

//         const results = []

//         for (let i = 0; i < data.length; i++) {
//             const item = data[i];
//             console.log(`📤 [${i + 1}/${data.length}] Uploading "${item.name}"...`);

//             const dessertUpload = await Dessert.create({
//                 name: item.name,
//                 category: item.category,
//                 price: item.price,
//                 images: {
//                     desktop: await uploadAsset(item.image.desktop),
//                     tablet: await uploadAsset(item.image.tablet),
//                     mobile: await uploadAsset(item.image.mobile),
//                     thumbnail: await uploadAsset(item.image.thumbnail)
//                 }
//             });

//             console.log(`✅ [${i + 1}/${data.length}] "${item.name}" uploaded successfully.`);
//             results.push(dessertUpload);
//         }

//         console.log("🎉 All desserts uploaded successfully!");
//         res.status(201).json({
//             message: 'Desserts created successfully',
//             count: results.length,
//             data: results
//         });

//     } catch (err) {
//         console.log("❌ Upload failed:", err);
//         res.status(500).json({ message: err.message })

//     }
// }


export {
    getAllDesserts,
    getDessertById,
    // createDessert
};