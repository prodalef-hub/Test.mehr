export default async function handler(req, res) {

    const q = req.query.q;

    if (!q) {
        return res.status(400).json({
            success: false,
            message: "Missing search query"
        });
    }

    return res.status(200).json({
        success: true,
        query: q,
        apps: [
            {
                name: "Telegram",
                developer: "Telegram FZ-LLC",
                version: "Latest",
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
                download: "https://telegram.org/android"
            },
            {
                name: "WhatsApp",
                developer: "Meta",
                version: "Latest",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                download: "https://www.whatsapp.com/android/"
            }
        ]
    });

}
