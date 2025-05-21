// /api/server-time.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://ticketlink.co.kr', {
      method: 'HEAD',
    });

    const dateHeader = response.headers.get('date');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'date');

    res.status(200).json({
      serverTime: dateHeader,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
