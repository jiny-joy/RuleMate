import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

// CORS 설정
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177', 'http://localhost:5178', 'http://localhost:5179'],
  credentials: true
}));

app.use(express.json());

// Claude API 프록시 엔드포인트
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'API 키가 설정되지 않았습니다. .env 파일을 확인하세요.'
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Claude API 프록시 오류:', error);
    res.status(500).json({
      error: '서버 오류가 발생했습니다.',
      details: error.message
    });
  }
});

// 헬스 체크 엔드포인트
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Proxy server is running' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 프록시 서버가 실행되었습니다!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`✅ CORS 설정 완료\n`);
});
