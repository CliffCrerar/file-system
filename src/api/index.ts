/* WEB API ENTRY POINT */

import express from 'express';
import path from 'path';
import openDir from './read-dir';
import cors from 'cors';

const app = express();
const port = process.env['port'] || 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'www')));
app.get('/api', (req, res) => {
	console.log('Get Directory from file system', req.query);
	const getDir = req.query['dir'] as string;
	res.send(openDir(getDir || '/'))
})
// app.get('/*', (req, res) => {
// 	console.log("🚀 ~ file: index.ts:10 ~ app.get ~ req:", req.path);
// 	res.json({ success: true })
// })

app.listen(port, () => {
	console.log(`-- Server is running on port: ${port} --`);
})
