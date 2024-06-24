import type {NextApiRequest, NextApiResponse} from 'next'
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {prompt} = req.body

    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
        ],
      })
      const emojiPrompt = `Translate this text into Emoji language for me. You can't write any word and any language except Emoji. Use only Emoji to reply: ${prompt}`

      const result = await model.generateContent(emojiPrompt)
      const response = await result.response
      const text = await response.text()

      res.status(200).json({response: text})
    } catch (error) {
      console.error('Error fetching data:', error)
      res.status(500).json({error: 'Internal Server Error'})
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
