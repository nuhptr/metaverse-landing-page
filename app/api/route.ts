import { NextApiRequest, NextApiResponse } from 'next'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'This is metaverse API' })
}
