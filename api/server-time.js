export default async function handler(req, res) {
  try {
    const [res1, res2] = await Promise.all([
      fetch('https://ticketlink.co.kr', { method: 'HEAD' }),
      fetch('https://facility.ticketlink.co.kr', { method: 'HEAD' }),
    ]);

    const date1 = res1.headers.get('date');
    const date2 = res2.headers.get('date');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'date');

    res.status(200).json({
      ticketlinkTime: date1,
      facilityTime: date2,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
