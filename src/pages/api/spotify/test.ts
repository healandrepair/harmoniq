export default function (req, response ) {
    const { method } = req;
    
    console.log("Test")
    response.status(200).json([
        {
            name: "John Doe",
            value: 1,
        },
        {
            name: "Jane Doe",
            value: 2,
        },
    ]);
}