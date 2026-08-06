export default async function handler(req, res) {

    const q = req.query.q;

    if (!q) {

        return res.status(400).json({
            success: false,
            message: "Search query is required."
        });

    }

    try {

        const response = await fetch(
            `https://search.f-droid.org/api/search_apps?q=${encodeURIComponent(q)}`
        );

        const data = await response.json();

        return res.status(200).json(data);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "F-Droid API Error"
        });

    }

}
